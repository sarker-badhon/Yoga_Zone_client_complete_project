import React, { useState, useEffect } from 'react';

const MyClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('https://yoga-zone-server-iota.vercel.app/addClass');
        if (response.ok) {
          const classesData = await response.json();
          setClasses(classesData);
        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchClasses();
  }, []);

  const handleUpdate = (index) => {
    
    console.log(`Update class with index ${index}`);
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
            <td className="py-2 px-4 border-b">{classItem.className}</td>
            <td className="py-2 px-4 border-b">{classItem.status}</td>
            <td className="py-2 px-4 border-b">{classItem.enrolledStudents}</td>
            <td className="py-2 px-4 border-b">{classItem.feedback}</td>
            <td className="py-2 px-4 border-b">
              <button
                className="px-4 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded"
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
