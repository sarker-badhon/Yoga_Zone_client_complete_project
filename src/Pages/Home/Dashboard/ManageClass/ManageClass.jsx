import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';

const ManageClass = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);

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

  const approveClass = (classId) => {
    // Update the status of the class to "approved"
    const updatedClasses = classes.map((cls) => {
      if (cls.id === classId) {
        return { ...cls, status: 'approved' };
      }
      return cls;
    });
    setClasses(updatedClasses);
  };

  const denyClass = (classId) => {
    // Update the status of the class to "denied"
    const updatedClasses = classes.map((cls) => {
      if (cls.id === classId) {
        return { ...cls, status: 'denied' };
      }
      return cls;
    });
    setClasses(updatedClasses);
  };

  const sendFeedback = (classId, feedback) => {
    // Handle sending feedback to the instructor
    // You can store the feedback in the state or send it to the backend
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Manage Classes</h1>
      <div className="overflow-x-auto">
        <table className="table w-full border rounded">
          <thead>
            <tr className="text-[18px]">
              <th className="p-2">Class Image</th>
              <th className="p-2">Class Name</th>
              <th className="p-2">Instructor Name</th>
              <th className="p-2">Instructor Email</th>
              <th className="p-2">Available Seats</th>
              <th className="p-2">Price</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls._id}>
                <td className="p-2">
                  <img className='rounded h-20' src={cls?.classImage} alt="" />
                </td>
                <td className="p-2">{cls.className}</td>
                <td className="p-2">{user?.displayName}</td>
                <td className="p-2">{user?.email}</td>
                <td className="p-2">{cls.availableSeats}</td>
                <td className="p-2">{cls.price}</td>
                <td className="p-2">{cls.status}</td>
                <td className="p-2">
                  <button
                    onClick={() => approveClass(cls.id)}
                    disabled={cls.status !== 'pending'}
                    className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 mr-2 disabled:bg-gray-400 disabled:cursor-not-allowed mb-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => denyClass(cls.id)}
                    disabled={cls.status !== 'pending'}
                    className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 mr-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Deny
                  </button>
                  <button
                    onClick={() => {
                      // Open the modal or navigate to another route for sending feedback
                    }}
                    className="bg-[#ef5f91] hover:bg-[#f52b72] text-white rounded px-4 py-2 disabled:bg-gray-400 disabled:cursor-not-allowed mt-2"
                  >
                    Feedback
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

export default ManageClass;
