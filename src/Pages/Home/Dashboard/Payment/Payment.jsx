
import PaymentForm from './PaymentForm';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);


  const fetchData = () => {
    fetch('http://localhost:5000/ClassesCart')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch classes');
        }
        return res.json();
      })
      .then((data) => {
        setSelectedClasses(data);
      })
      .catch((error) => {
        console.log('Error fetching classes:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  const total = selectedClasses.reduce((sum, item) => item.price + sum, 0).toFixed(2);
  const price=parseFloat(total)


  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      <Elements stripe={stripePromise}>
        <PaymentForm price={price}></PaymentForm>
      </Elements>
    </div>
  );
};

export default Payment;
