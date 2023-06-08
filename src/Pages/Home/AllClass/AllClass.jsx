import React from 'react';

const classes = [
  {
    id: 1,
    image: 'https://i.ibb.co/cJZFR53/Hatha-Yoga.jpg',
    name: 'Hatha Yoga',
    instructor: 'David Swenson',
    availableSeats: 15,
    price: 49.99,
  },
  {
    id: 2,
    image:'https://i.ibb.co/tZScV5W/Vinyasa-Flow.jpg',
    name: 'Vinyasa Flow',
    instructor: 'Matthew Sweeney',
    availableSeats: 40,
    price: 39.99,
  },
  {
    id: 3,
    image: 'https://i.ibb.co/SwssRLf/ashtanga-yoga.jpg',
    name: 'Ashtanga Yoga',
    instructor: 'Kino MacGregor',
    availableSeats: 0,
    price: 39.99,
  },
  {
    id: 4,
    image: 'https://i.ibb.co/dcYgkcG/Bikram-Yoga.jpg',
    name: 'Bikram Yoga',
    instructor: 'Stephanie Keach',
    availableSeats: 32,
    price: 39.99,
  },
  {
    id: 5,
    image: 'https://i.ibb.co/0KD0qk9/Yin-Yoga.jpg',
    name: 'Yin Yoga',
    instructor: 'David Swenson',
    availableSeats: 80,
    price: 39.99,
  },
  {
    id: 6,
    image: 'https://i.ibb.co/Jt48zjF/Kundalini-Yoga.jpg',
    name: 'Kundalini Yoga',
    instructor: 'Lino Miele',
    availableSeats: 0,
    price: 39.99,
  },
  {
    id: 7,
    image: 'https://i.ibb.co/cJZFR53/Hatha-Yoga.jpg',
    name: 'Hatha Yoga',
    instructor: 'David Swenson',
    availableSeats: 65,
    price: 49.99,
  },
  {
    id: 8,
    image: 'https://i.ibb.co/SwssRLf/ashtanga-yoga.jpg',
    name: 'Ashtanga Yoga',
    instructor:'Kino MacGregor',
    availableSeats: 0,
    price: 39.99,
  },
  {
    id: 9,
    image: 'https://i.ibb.co/0KD0qk9/Yin-Yoga.jpg',
    name: 'Yin Yoga',
    instructor: 'David Swenson',
    availableSeats: 80,
    price: 39.99,
  }
  
];

const AllClass = () => {
  const isLoggedIn = true; // Set this to false if user is not logged in
  const isAdmin = false; // Set this to true if user is an admin/instructor

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
