import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../../../Providers/AuthProviders";
import Swal from 'sweetalert2';

const PaymentForm = ({ selectedClasses, price }) => {
  // console.log(items)
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState();

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await fetch('https://yoga-zone-server-iota.vercel.app/create-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ price }),
        });

        if (response.ok) {
          const data = await response.json();
          setClientSecret(data.clientSecret);
        } else {
          throw new Error('Failed to fetch client secret');
        }
      } catch (error) {
        console.log(error);
        setError('Failed to fetch client secret. Please try again.');
      }
    };

    fetchClientSecret();
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    try {
      setProcessing(true);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        setError(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Payment Failed',
          text: error.message,
        });
      } else {
        console.log('PaymentMethod', paymentMethod);
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'Your payment was successful.',
        });
      }

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "Anonymous",
              email: user?.email || "Anonymous",
            },
          },
        }
      );

      if (confirmError) {
        console.log(confirmError);
        Swal.fire({
          icon: 'error',
          title: 'Payment Confirmation Failed',
          text: confirmError.message,
        });
      }
       
        if ( paymentIntent.status === "succeeded") {
          try {
            const payment = {
              emailId: user?.email,
              quantity: selectedClasses.length,
              price:price,
              itemNames: selectedClasses.map(item => item),  
              transactionId: transactionId,
            };
      
            const response = await fetch('https://yoga-zone-server-iota.vercel.app/payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payment),
            });
      
            if (response.ok) {
              const data = await response.json();
              if (data.insertedId > 0) {
                console.log('Payment saved to the server.');
              }
            } else {
              throw new Error('Failed to save payment to the server');
            }
          } catch (error) {
            console.log(error);
            setError('Failed to save payment to the server. Please try again.');
          }
          
        
      }

      setProcessing(false);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred during payment.',
      });
    }
  };

  // const savePaymentToServer = async (transactionId) => {
  //   try {
  //     const payment = {
  //       emailId: user?.email,
  //       quantity: selectedClasses.length,
  //       itemNames: selectedClasses.map(item => item.className),
  //       transactionId: transactionId,
  //     };

  //     const response = await fetch('https://yoga-zone-server-iota.vercel.app/payments', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(payment),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       if (data.insertedId > 0) {
  //         console.log('Payment saved to the server.');
  //       }
  //     } else {
  //       throw new Error('Failed to save payment to the server');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setError('Failed to save payment to the server. Please try again.');
  //   }
  // };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#ffff',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
            className="p-4 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="bg-[#fa6fa0] hover:bg-[#f2578e] text-white font-semibold px-4 py-2 rounded-md"
          onClick={() => {
            Swal.fire({
              icon: 'info',
              title: 'Processing Payment',
              text: 'Please wait...',
              showConfirmButton: false,
              allowOutsideClick: false,
            });
          }}
        >
          Pay
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default PaymentForm;
