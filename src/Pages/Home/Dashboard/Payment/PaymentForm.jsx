import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from "../../../../Providers/AuthProviders";
const PaymentForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user}=useContext(AuthContext)
    const [Error, setError] = useState()
    const [clientSecret,setClientSecret] = useState();


    useEffect(() => {
        axios.post('http://localhost:5000/create-payment', { price })
          .then(response => {
            setClientSecret(response.data.clientSecret);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) { 
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Additional logic for handling the payment submission

        console.log(card)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message)
            console.log('[error]', error);
        } else {
            console.log('PaymentMethod', paymentMethod);
        }
        const {paymentIntent,error:confirmError}= await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method:{
                    card:card,
                    billing_details:{
                        
                        name:user?.displayName || " Anonymous",
                        email:user?.email || "Anonymous ",
                    }
                }
            }
        )
        if(confirmError) {
            console.log(confirmError)
        }
        console.log('intent',paymentIntent)
    };
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
                    disabled={!stripe || !clientSecret}
                    className="bg-[#fa6fa0] hover:bg-[#f2578e] text-white font-semibold px-4 py-2 rounded-md"
                >
                    Pay
                </button>
            </form>
            {Error && <p className="text-red-500">{Error}</p>}
        </>
    );
};

export default PaymentForm;
