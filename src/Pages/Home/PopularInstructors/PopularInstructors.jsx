import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const PopularInstructors = () => {
  const [instructorsData, setInstructorsData] = useState([]);

  useEffect(() => {
    // Make an API call to fetch the instructor data
    const fetchInstructors = async () => {
      try {
        const response = await fetch('https://yoga-zone-server-iota.vercel.app/instructors');
        const data = await response.json();
        setInstructorsData(data);
      } catch (error) {
        console.error('Failed to fetch instructors:', error);
      }
    };
    fetchInstructors();
    AOS.init();
  }, []);

  const sortedInstructors = [...instructorsData].sort((a, b) => b.classSize - a.classSize);
  const topInstructors = sortedInstructors.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-4 text-[#ff91b8] mt-10 text-center">Popular Instructors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topInstructors.map((instructor) => (
          <div key={instructor.id} data-aos="fade-up" data-aos-duration="1000" className="bg-white rounded-lg shadow-md p-4">
            <img src={instructor.image} alt={instructor.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
            <p className="mb-4">{instructor.description}</p>
            <p className='text-[#fc5d95]'>Class Size: {instructor.classSize}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
