import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const classesData = [
    {
        name: 'Hatha Yoga',
        image: 'https://i.ibb.co/cJZFR53/Hatha-Yoga.jpg',
        students: 100
    },
    { name: 'Vinyasa Flow', image: 'https://i.ibb.co/tZScV5W/Vinyasa-Flow.jpg', students: 85 },
    { name: 'Ashtanga Yoga', image: 'https://i.ibb.co/SwssRLf/ashtanga-yoga.jpg', students: 78 },
    { name: 'Bikram Yoga', image: 'https://i.ibb.co/dcYgkcG/Bikram-Yoga.jpg', students: 65 },
    { name: 'Yin Yoga', image: 'https://i.ibb.co/0KD0qk9/Yin-Yoga.jpg', students: 55 },
    { name: 'Kundalini Yoga', image: 'https://i.ibb.co/Jt48zjF/Kundalini-Yoga.jpg', students: 50 },
]

const PopularClasses = () => {
    const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    const fetchClassesData = async () => {
      try {
        const response = await fetch('http://localhost:5000/allClasses');
        const data = await response.json();
        setClassesData(data);
      } catch (error) {
        console.error('Failed to fetch classesData:', error);
      }
    };
    fetchClassesData();
    AOS.init();
  }, []);

    const sortedClasses = [...classesData].sort((a, b) => b.students - a.students);
    const topClasses = sortedClasses.slice(0, 6);

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-[#ff91b8] mt-10 mb-6 text-center ">Popular Classes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {topClasses.map((cls) => (
                        <div key={cls._id} data-aos="fade-up" data-aos-duration="1000" className="bg-white rounded-lg shadow-lg overflow-hidden">
                           
                            <img
                                src={cls.image}
                                alt={cls.name}
                                className="h-56 w-full object-cover object-center"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{cls.name}</h3>
                                <p className="text-[#fc5d95]">{`${cls.students} students`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularClasses;
