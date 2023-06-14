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
    fetch('https://yoga-zone-server-iota.vercel.app/allClasses')
    .then(res =>res.json())
    .then(data=>{
      setClasses(data)
    })
  }, []);

  
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
