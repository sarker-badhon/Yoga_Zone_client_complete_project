import React from 'react';
import { Outlet,Link } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center mt-32">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li> <Link className='font-bold'>My Selected Classes</Link> </li>
                    <li> <Link className='font-bold'>My Enrolled</Link> </li>
                    <li> <Link className='font-bold'>Payment</Link> </li>
                    <li></li>

                </ul>
            </div>
        </div> 
    );
};

export default Dashboard;