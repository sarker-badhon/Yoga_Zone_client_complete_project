// AddClass.js

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function AddClass() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext)
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/addClass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const classData = await response.json();
        console.log(classData);                    // The server returns the added class object
        reset();                                  // Reset the form

        // Show success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'The class has been added successfully.',
        });
      } else {
        // Handle the error if the request fails
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error(error);
      // Handle error if the request fails
    }
  };



  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-9 text-white mb-2">Add a Class</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className="mb-4">
            <label htmlFor="className" className="block mb-1 font-medium text-xl">
              Class Name
            </label>
            <input
              type="text"
              id="className"
              {...register('className', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.className ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.className && (
              <p className="text-red-500">Class Name is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="classImage" className="block mb-1 font-medium text-xl">
              Class Image
            </label>
            <input
              type="url"
              id="classImage"
              {...register('classImage', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.classImage ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.classImage && (
              <p className="text-red-500">Class Image URL is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="instructorName" className="block mb-1 font-medium text-xl">
              Instructor Name
            </label>
            <input
              type="text"
              id="instructorName"
              {...register('instructorName', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.instructorName ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.instructorName && (
              <p className="text-red-500">Instructor Name is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="instructorEmail" className="block mb-1 font-medium text-xl">
              Instructor Email
            </label>
            <input
              type="email"
              id="instructorEmail"
              {...register('instructorEmail', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.instructorEmail ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.instructorEmail && (
              <p className="text-red-500">Instructor Email is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="availableSeats" className="block mb-1 font-medium text-xl">
              Available Seats
            </label>
            <input
              type="number"
              id="availableSeats"
              {...register('availableSeats', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.availableSeats ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.availableSeats && (
              <p className="text-red-500">Available Seats is required.</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-1 font-medium text-xl">
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register('price', { required: true })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${errors.price ? 'border-red-500' : 'border-gray-300 focus:ring-[#ff91b8]'
                }`}
            />
            {errors.price && (
              <p className="text-red-500">Price is required.</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="w-full text-xl bg-[#ec6896] hover:bg-[#ff91b8] text-white font-medium px-4 py-2 rounded-md"
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddClass;
