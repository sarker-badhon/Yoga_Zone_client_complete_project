import React, { useState, useEffect } from 'react';
import { FaCreditCard } from 'react-icons/fa';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
console.log('payment',payments)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://yoga-zone-server-iota.vercel.app/payments'); 
        const data = await response.json();
        setPayments(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Sort payments in descending order by date
  const sortedPayments = [...payments].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Payment History</h1>
      <table className="table min-w-full bg-white ">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {sortedPayments.map((payment) => (
            <tr key={payment.id}>
              <td className="py-2 px-4 border-b">{payment.date}</td>
              <td className="py-2 px-4 border-b">${payment.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
