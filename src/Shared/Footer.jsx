import React from 'react';
import logo from '../assets/yoga.png'
const Footer = () => {
    return (
        <footer className="bg-[#ff91b8] py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <img src={logo} alt="Yoga Zone" className="h-32 mb-4" />
                        <p className="text-white">Bringing balance and harmony to your life</p>
                    </div>
                    <div>
                        <h4 className="text-white">Contact Us</h4>
                        <p className="text-white">Email: info@yogazone.com</p>
                        <p className="text-white">Phone: +1 123-456-7890</p>
                    </div>
                    <div>
                        <h4 className="text-white">Address</h4>
                        <p className="text-white">123 Main Street</p>
                        <p className="text-white">City, State 12345</p>
                    </div>
                </div>
                <hr className="my-8 border-white" />
                <div className="text-center">
                    <p className="text-white">&copy; 2023 Yoga Zone. All rights reserved.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-white">Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="#" className="text-white">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;