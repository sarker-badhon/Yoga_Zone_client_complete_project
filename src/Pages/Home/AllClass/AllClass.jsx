import React from 'react';
import { useLoaderData } from 'react-router-dom';


const AllClass = () => {
  const classes = useLoaderData()
  const isLoggedIn = true;
  const isAdmin = false; 

  const handleSelectClass = (classId) => {
    if (!isLoggedIn) {
      alert('Please log in before selecting the course.');
      return;
    }

    const selectedClass = classes.find((c) => c.id === classId);
    if (selectedClass.availableSeats === 0 || isAdmin) {
      return;
    }
    console.log('Selected class:', selectedClass);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {classes.map((classItem) => (
        <div
          key={classItem.id}
          className={`p-4 bg-white shadow-md ${
            classItem.availableSeats === 0 ? 'border-red-500' : 'border-gray-500'
          }`}
        >
          <img src={classItem.image} alt="Class" className="w-full h-56 mb-4" />
          <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
          <p className="mb-2">Instructor: {classItem.instructor}</p>
          <p className="mb-2">Available Seats: {classItem.availableSeats}</p>
          <p className="mb-4">Price: ${classItem.price}</p>
          <button
            disabled={classItem.availableSeats === 0 || isAdmin}
            onClick={() => handleSelectClass(classItem.id)}
            className={`px-4 py-2 rounded  ${
              classItem.availableSeats === 0 || isAdmin ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#ff91b8] hover:bg-[#e35c8c]'
            }`}
          >
            {classItem.availableSeats === 0 ? 'Sold Out' : 'Select'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllClass;
