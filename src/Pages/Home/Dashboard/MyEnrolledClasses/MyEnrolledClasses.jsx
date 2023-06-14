import React, { useState, useEffect } from 'react';

function MyEnrolledClasses() {
  const [enrolledClasses, setEnrolledClasses] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://yoga-zone-server-iota.vercel.app/payments');     
          const data = await response.json();
          setEnrolledClasses(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);

  return (
    <div className="w-full px-5 bg-base-300">
      <h2 className="text-xl font-semibold mb-2">My Enrolled Classes</h2>
      <table className="w-full table">
        <thead>
          <tr>
            <th className="py-2">Class</th>
            <th className="py-2">Class Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Class Date</th>
          </tr>
        </thead>
        <tbody>
          {enrolledClasses.map((classObj) => (
            <tr key={classObj.name}>
              <td className="py-2">
              <img className="h-20 w-20" src={classObj.itemNames[0]?.image} alt="" />
              </td>
              <td className="py-2">{classObj.itemNames[0]?.name}</td>
              <td className="py-2">{classObj.emailId}</td>
              <td className="py-2">{classObj.date}</td>
              <td className="py-2">{classObj.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyEnrolledClasses;
