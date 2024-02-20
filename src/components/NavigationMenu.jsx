import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const handleNavigation = (path) => {
        setActiveLink(path);
        if (path !== "/services") { // Check if the clicked path is not services
            setShowServices(false); // Close the services dropdown
        }
        navigate(path);
    };
    const [showServices, setShowServices] = useState(false);

    const toggleServices = () => {
        setShowServices(!showServices);
    };

    return (
        <div className='sticky top-0 bg-white py-2 shadow-sm z-50'>
            <div className="mx-10 flex items-center justify-between">
                <div className="inline-block text-center p-2 font-inter rounded-full bg-purple-700 text-white">
                    <span className="text-xl font-sans">EduCounseling</span>
                </div>
                <ul className="flex space-x-10">
                    <li className={`cursor-pointer hover:text-orange-600 ${activeLink === "/" ? ' font-bold border-b-2 border-blue-900' : ''} text-blue-900 font-inter text-base font-normal leading-5 tracking-normal text-left`} onClick={() => handleNavigation("/")}>Home</li>
                    <li className={`cursor-pointer hover:text-orange-600 ${activeLink === "/about" ? ' font-bold border-b-2 border-blue-900' : ''} text-blue-900 font-inter text-base font-normal leading-5 tracking-normal text-left`} onClick={() => handleNavigation("/about")}>About Us</li>
                    <li className={`relative ${showServices ? 'dropdown-open' : ''}`}>
                        <span className="cursor-pointer text-blue-900 font-inter text-base font-normal leading-5 tracking-normal text-left" onClick={toggleServices}>Our Services</span>
                        {showServices && (
                            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-64 z-50">
                                <ul className="divide-y divide-gray-200">
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/career")}>
                                        <span className="flex items-center">
                                            Career Guidance
                                        </span>
                                    </li>
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service2")}>
                                        <span className="flex items-center">
                                            Personality Development
                                        </span>
                                    </li>

                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service1")}>
                                        <span className="flex items-center">
                                            Job search
                                        </span>
                                    </li>
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service1")}>
                                        <span className="flex items-center">
                                            Recruiter
                                        </span>
                                    </li>
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service1")}>
                                        <span className="flex items-center">
                                            Academic Courses
                                        </span>
                                    </li>
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service1")}>
                                        <span className="flex items-center">
                                            Admission Council
                                        </span>
                                    </li>
                                    <li className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300" onClick={() => handleNavigation("/service1")}>
                                        <span className="flex items-center">
                                            Technical Courses
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className={`cursor-pointer inline-block py-2 px-4 bg-purple-600 text-white font-inter text-base font-normal leading-5 tracking-normal text-left rounded-md transition duration-300 ease-in-out ${activeLink === "/contact" ? 'font-black font-bold border-b-2 border-blue-900' : 'hover:bg-purple-700'}`} onClick={() => handleNavigation("/contact")}>Login/Registration</li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationMenu;
