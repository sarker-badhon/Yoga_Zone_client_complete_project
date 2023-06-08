import React from 'react';
import errorLogo from '../assets/error-page/404.png'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
   
    return (
        
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="mx-auto mb-8 md:w-1/2 lg:w-1/3">
                   <img src={errorLogo} alt="" />
                </div>
                <h1 className="text-4xl font-bold text-gray-800 text-center">Oops! Page not found.</h1>
                <p className="text-gray-600 text-center">The page you are looking for does not exist.</p>
                <Link to="/">
                <button className='btn bg-[#ff91b8] font-bold mt-3'>Go To Back</button></Link>
            </div>
        
    );
};

export default ErrorPage;