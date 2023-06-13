import React from 'react';
import {  useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InstructorsPage = () => {
    const instructors = useLoaderData()
    // console.log(instructors);
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div  className="container mx-auto px-4 py-10 ">
            <h1 className="text-3xl font-bold mb-6 text-center text-[#ff91b8] ">Instructors</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-[#ff91b8]">
                {instructors.map((instructor) => (
                    <div key={instructor.id} data-aos="fade-up" data-aos-duration="1000" className="bg-white  rounded shadow-md p-4 flex flex-col">
                        <img src={instructor.image} alt="Instructor" className="w-full h-36 flex justify-center items-center object-cover mb-4  " />
                        <div>
                            <h2 className="text-xl font-bold mb-2">{instructor.name}</h2>
                            <p className="text-gray-600 mb-2">{instructor.email}</p>
                            {instructor.classesTaken && (
                                <div>
                                    <p className="mb-2">Number of Classes taken: {instructor.classesTaken}</p>
                                    <p>Classes Taken: {instructor.classNames.join(', ')}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstructorsPage;
