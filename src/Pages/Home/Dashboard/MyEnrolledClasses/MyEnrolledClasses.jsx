import React, { useState } from 'react';

function MyEnrolledClasses() {
  const [enrolledClasses, setEnrolledClasses] = useState([
    { name: 'Mathematics', date: '2023-06-12', time: '09:00 AM' },
    { name: 'Science', date: '2023-06-18', time: '11:00 AM' }
  ]);

  return (
    <div className="w-full px-5 bg-base-300">
      <h2 className="text-xl font-semibold mb-2">My Enrolled Classes</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 ">Class Name</th>
            <th className="py-2">Class Date</th>
            <th className="py-2">Class Time</th>
          </tr>
        </thead>
        <tbody>
          {enrolledClasses.map((classObj) => (
            <tr key={classObj.name}>
              {/* <td className="py-2">{classObj.name}</td> */}
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
