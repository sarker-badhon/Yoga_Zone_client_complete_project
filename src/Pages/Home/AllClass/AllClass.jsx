import React, { useContext,useEffect,useState } from 'react';
// import {useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../Providers/AuthProviders';
// import Swal from 'sweetalert2';
import ClassCard from './ClassCard'; 


const AllClass = () => {
  // // const classes = useLoaderData()
  // // console.log(classes)
  // const { user } = useContext(AuthContext)
  // const navigate=useNavigate()
  // const location=useLocation()

  // const isLoggedIn = true;
  // const isAdmin = false;
  const [classes, setClasses] = useState([]);
  // console.log(classes)
  useEffect(() => {
    fetch('http://localhost:5000/allClasses')
    .then(res =>res.json())
    .then(data=>{
      setClasses(data)
    })
  }, []);

  // const handleSelectClass = (classId) => {
  //   const cartItem = {menuItemId: _id, name, image, price}
  //   if (user) {
  //     fetch('http://localhost:5000/ClassesCart',{
  //       method:"POST",
  //       headers:{
  //         "content-type":"application/json"
  //       },
  //       body:JSON.stringify()
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data);
  //         if (data.insertedId) {
  //           Swal.fire({
  //             icon: 'success',
  //             title: 'Added successfully!',
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
            
  //         }
  //       })
  //   }
  //   else{
  //     Swal.fire({
  //       title: 'Please Login',
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Login Now'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         // Swal.fire(
  //         //   'Deleted!',
  //         //   'Your file has been deleted.',
  //         //   'success'
  //         // )
  //         navigate('/login',{state:{from: location}})
  //       }
  //     })
  //   }
  //   if (!isLoggedIn) {
  //     alert('Please log in before selecting the course.');
  //     return;
  //   }

  //   const selectedClass = classes.find((c) => c.id === classId);
  //   if (selectedClass.availableSeats === 0 || isAdmin) {
  //     return;
  //   }
  //   console.log('Selected class:', selectedClass);
  // };

  return (
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
           classes.map((classItem) => <ClassCard
            key={classItem.id}
            classItem={classItem}
            ></ClassCard>) 
      }
    </div>
  );

  }
export default AllClass;
