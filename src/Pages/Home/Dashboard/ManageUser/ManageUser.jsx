import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ManageUser = () => { 
  // const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery('[users]', async () => { 
    const response = await fetch('http://localhost:5000/users'); // Fixed the API request
    return response.json(); 
  });

console.log(users)

 const [updatedUsers, setUpdatedUsers] = useState(users);
 
 const makeInstructor = async (userId) => {
  try {
    const response = await fetch(`http://localhost:5000/users/instructor/${userId}`, {
      method: 'PUT',
    });
    if (response.ok) {
      const updatedUsersData = updatedUsers.map((user) => {
        if (user._id === userId) {
          return { ...user, role: 'instructor' };
        }
        return user;
      });
      setUpdatedUsers(updatedUsersData);

      // Display SweetAlert success notification
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: `user has been made an instructor`,
      });
    } else {
      throw new Error('Failed to make user an instructor');
    }
  } catch (error) {
    console.error('An error occurred while making the user an instructor:', error);

    // Display SweetAlert error notification
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Failed to make user an instructor.',
    });
  }
};


  const makeAdmin = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/users/admin/${userId}`, {
        method: 'PUT',
      });
  
      if (!response.ok) {
        throw new Error('Failed to update user role');
      }
  
      // Refetch the updated user data
      refetch();
  
      // Display SweetAlert success notification
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: `User ${userId} has been made an admin.`,
      });
    } catch (error) {
      console.error(error);
  
      // Display SweetAlert error notification
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to update user role.',
      });
    }
  };
  


  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl text-white font-bold my-8 text-center">Manage Users: {users.length}</h1>
      <h1 className="text-3xl text-white mb-3 font-semibold ">Total Users : {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table  lg:w-full border  rounded">
          <thead>
            <tr>
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (  
              <tr key={user._id}>
                <td className="p-2">{index + 1}</td> 
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">
                  <button
                    onClick={() => makeInstructor(user._id)}
                    disabled={user.role === 'instructor'}
                    className="bg-[#e25989] hover:bg-[#ee3475] text-white rounded px-4 py-2 mr-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Instructors
                  </button>
                  <button
                    onClick={() => makeAdmin(user._id)}
                    disabled={user.role === 'admin'}
                    className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
