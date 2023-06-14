import React, { useContext } from 'react';
import { Link, Outlet } from "react-router-dom";
import { FaCheckCircle, FaUser,FaUserPlus,FaUsers, FaWallet } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import useAdmin from '../../../hooks/useAdmin';
import useInstructors from '../../../hooks/useInstructors'; 
import { AuthContext } from '../../../Providers/AuthProviders';

const Dashboard = () => {
  // const {user}=useContext(AuthContext)
  const [isAdmin] = useAdmin();
  console.log('isadmin',isAdmin)
  const [isInstructor]=useInstructors()
  
  return (
    <div className="drawer lg:drawer-open bg-[#e8aec2] ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#ff91b8] text-base-content">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        
       

         {/* <div className="dropdown dropdown-end flex justify-center items-center">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                           <div className="h-[150px] w-full rounded-full">
                         <img src={user?.photoURL} />
                               </div>
                        </label>
                    </div> */}
        

         
          {
          isAdmin && 
            <>
              <li><Link className='text-xl' to="/dashboard/ManageClass"><FaUser className="text-[#c60448]" /> Manage classes</Link></li>
              <li><Link className='text-xl' to="/dashboard/ManageUser"> <FaUsers  className="text-[#c60448]" />Manage Users</Link></li>
              
            </>
          }
          {!isAdmin && isInstructor && 
            <>
              <li><Link className='text-xl' to="/dashboard/AddClass">Add Class</Link></li>
              <li><Link className='text-xl' to="/dashboard/MyClasses"> My class</Link></li>
              
            </>
          }
          {!isAdmin && !isInstructor && 
            <>
              <li><Link className='text-xl' to="/dashboard/MySelectedClasses">
              <FaCheckCircle className="text-[#c60448]" size={25} /> Selected Classes</Link></li>
              <li><Link className='text-xl' to="/dashboard/MyEnrolledClasses"> 
              <FaUserPlus className="text-[#c60448]" size={25} />Enroll Classes</Link></li>
              <li><Link className='text-xl' to="/dashboard/PaymentHistory"> 
              <FaWallet className="text-[#c60448]" />
              Payment History </Link></li>
            </>
          }
          <div className="divider"></div>
          <li><Link className='text-xl' to="/"><AiOutlineHome className="text-[#c60448]" /> Home</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
