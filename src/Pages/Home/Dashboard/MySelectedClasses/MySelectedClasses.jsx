import React, { useEffect, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
const MySelectedClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const total = selectedClasses.reduce((sum, item) => item.price + sum, 0).toFixed(2);

  const fetchData = () => {
    fetch('http://localhost:5000/ClassesCart')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch classes');
        }
        return res.json();
      })
      .then((data) => {
        setSelectedClasses(data);
      })
      .catch((error) => {
        console.log('Error fetching classes:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteClass = (classObj) => {
   
    setSelectedClasses((prevSelectedClasses) =>
      prevSelectedClasses.filter((c) => c._id !== classObj._id)
    );
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
    // Send delete request to server
    fetch(`http://localhost:5000/ClassesCart/${classObj._id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Delete response:', data);
        if (data.deletedCount > 0) {
            
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
        fetchData();
      })
      .catch((error) => {
        console.error('Error deleting class:', error);
      });
    }})
  };

  const handlePayClass = (classObj) => {
    // Implement payment functionality here
    console.log('Pay clicked for class:', classObj);
  };

  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center mb-8 bg-[#f87ca8] py-10">
        <h3 className="text-3xl">Total Class: {selectedClasses.length}</h3>
        <h3 className="text-3xl">Total Price: $ {total}</h3>
        
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>#</th>
              <th>Class</th>
              <th>Name</th>
              <th>price</th>
              <th>Enroll</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((classObj, index) => (
              <tr key={classObj._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="rounded-xl w-24 h-20">
                      <img src={classObj.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td className="py-2">{classObj.name}</td>

                <td className="py-2">$ {classObj.price}</td>
                <td>
                  <button
                    className="btn btn-ghost bg-[#eac90f]  text-white"
                    onClick={() => handlePayClass(classObj)}  
                  >
                    <Link to="/dashboard/payment">
                    Payment </Link>
                  </button>
                 </td>
                <td>
                  <button
                    className="btn btn-ghost bg-[#f11c67] text-white"
                    onClick={() => handleDeleteClass(classObj)}
                  >
                    <RiDeleteBinLine size={20} />
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

export default MySelectedClasses;
