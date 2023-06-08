import { useContext } from 'react';
import logo from '../assets/yoga.png'
import { Link } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProviders';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems = <>
        <li><Link className='text-xl text-white font-bold' to="/">Home</Link></li>
        <li><Link className='text-xl text-white font-bold' to="/InstructorsPage"> Instructors</Link></li>
        <li><Link className='text-xl text-white font-bold' to="/allclass">All Classes</Link></li>
       
        {
            user ? <>
             <li><Link className='text-xl text-white font-bold' to="/dashboard">Dashboard</Link></li>
             

            </> : <>
            
            </>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="navbar bg-[#ff91b8]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <img className='h-[60px]' src={logo} alt="" />
                    <div className='px-2'>
                        <h3 className='text-3xl font-bold text-white'>Yoga Zone</h3>
                        <p className=' text-white'>Clam Mind - Strong Body</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?<>
                         <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                           <div className="w-10 rounded-full">
                         <img src={user?.photoURL} />
                               </div>
                        </label>
                    </div>

                         <button onClick={handleLogOut} className='btn btn-outline'>Log out</button>
                        </> : <li><Link className=' text-white font-bold btn btn-outline' to="/login">Login</Link></li>
                    }
                </div>


            </div >
        </div >
    );
};

export default Navbar;