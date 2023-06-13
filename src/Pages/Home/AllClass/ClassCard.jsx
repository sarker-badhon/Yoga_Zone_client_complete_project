import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClassCard = ({ classItem }) => {
    const { availableSeats, image, name, instructor, price,_id} = classItem
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const isLoggedIn = true;
    const isAdmin = false;
    useEffect(() => {
        AOS.init();
      }, []);
    const handleSelectClass = (classId) => {
        const ClassCartItem = { classId: _id, name, image, price }
        if (user) {
            fetch('http://localhost:5000/ClassesCart', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(ClassCartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Selected successfully!',
                            showConfirmButton: false,
                            timer: 1500,
                        });

                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Swal.fire(
                    //   'Deleted!',
                    //   'Your file has been deleted.',
                    //   'success'
                    // )
                    navigate('/login', { state: { from: location } })
                }
            })
        }
        if (!isLoggedIn) {
            alert('Please log in before selecting the course.');
            return;
        }

        if (classItem.availableSeats === 0 || isAdmin) {
            return;
        }
        console.log('Selected class:', classItem);
    };
   
    return (
        <div data-aos="fade-up" data-aos-duration="1000">

            <div  
                className={`p-4 bg-white shadow-md  ${classItem.availableSeats === 0 ? 'border-red-500' : 'border-gray-500'
                    }`}
            >
                <img src={image} alt="Class" className="w-full h-56 mb-4" />
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="mb-2">Instructor: {instructor}</p>
                <p className="mb-2">Available Seats: {classItem.availableSeats}</p>
                <p className="mb-4">Price: ${price}</p>
                <button
                    disabled={classItem?.availableSeats === 0 || isAdmin}
                    onClick={() => handleSelectClass(classItem._id)}
                    className={`px-4 py-2 rounded  ${classItem?.availableSeats === 0 || isAdmin ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#ff91b8] hover:bg-[#e35c8c]'
                        }`}
                >
                    {classItem.availableSeats === 0 ? 'Sold Out' : 'Select'}
                </button>
            </div>
      
        </div>
    );
};

export default ClassCard;
