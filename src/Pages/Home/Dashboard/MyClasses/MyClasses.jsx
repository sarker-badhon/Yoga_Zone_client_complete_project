import React, { useState } from 'react';

const MyClasses = () => {
  const [classes, setClasses] = useState([
    { name: 'Class A', status: 'Pending', enrolledStudents: 0, feedback: '' },
    { name: 'Class B', status: 'Approved', enrolledStudents: 10, feedback: '' },
    { name: 'Class C', status: 'Denied', enrolledStudents: 5, feedback: 'Class C is full.' },
    { name: 'Class B', status: 'Approved', enrolledStudents: 10, feedback: '' },
    { name: 'Class C', status: 'Denied', enrolledStudents: 5, feedback: 'Class C is full.' },
    { name: 'Class B', status: 'Approved', enrolledStudents: 10, feedback: '' },
    { name: 'Class C', status: 'Denied', enrolledStudents: 5, feedback: 'Class C is full.' },
  ]);

  const handleUpdate = (index) => {
    // Implement your logic for updating class details here
  };

  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Class Name</th>
          <th className="py-2 px-4 border-b">Status</th>
          <th className="py-2 px-4 border-b">Total Enrolled Students</th>
          <th className="py-2 px-4 border-b">Feedback</th>
          <th className="py-2 px-4 border-b">Update Button</th>
        </tr>
      </thead>
      <tbody>
        {classes.map((classItem, index) => (
          <tr key={index} className="text-center">
            <td className="py-2 px-4 border-b">{classItem.name}</td>
            <td className="py-2 px-4 border-b">{classItem.status}</td>
            <td className="py-2 px-4 border-b">{classItem.enrolledStudents}</td>
            <td className="py-2 px-4 border-b">{classItem.feedback}</td>
            <td className="py-2 px-4 border-b">
              <button
                className="px-4 py-2 text-white bg-[#e76391] hover:bg-[#ff91b8] rounded hover:[#ff91b8]"
                onClick={() => handleUpdate(index)}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyClasses;



