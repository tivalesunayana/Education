// NavigationMenu.js
import { React, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const handleNavigation = (path) => {
        setActiveLink(path);
        navigate(path);
    };

    return (
        <ul className='flex bg-white py-2 shadow-sm sticky  justify-end space-x-10 mx-10'>
            {/* <img
                src="https://play-lh.googleusercontent.com/RQzseFw87JP9kZFgUaqM7-Sy0xz5QKIDZveHs6z-ZWz9gwmidq-0IcHQmd6Cq0MBNw"
                alt="key"
                className=" mr-auto w-8 h-5 "
            /> */}
            <h1 className=" mr-auto w-8 h-5 font-inter">EduCounseling</h1>

            <li className={`cursor-pointer hover:text-orange-600 ${activeLink === "/" ? 'font-black font-bold border-b-2 border-blue-900' : ''} text-blue-900 font-inter text-base font-normal leading-5 tracking-normal text-left`} onClick={() => handleNavigation("/")}>Home</li>

            <li className={`cursor-pointer hover:text-orange-600 ${activeLink === "/about" ? 'font-black font-bold border-b-2 border-blue-900' : ''}  text-blue-900 font-inter text-base font-normal leading-5 tracking-normal text-left`} onClick={() => handleNavigation("/about")}>About Us</li>
            <li className={`cursor-pointer hover:text-orange-600 ${activeLink === "/portfolio" ? 'font-black font-bold border-b-2 border-blue-900' : ''}  text-blue-900 font-inter text-base font-normal leading-5 tracking-normal text-left`} onClick={() => handleNavigation("/portfolio")}>Our Services</li>
            <li className={`cursor-pointer inline-block py-2 px-4 bg-purple-600 text-white font-inter text-base font-normal leading-5 tracking-normal text-left rounded-md transition duration-300 ease-in-out ${activeLink === "/contact" ? 'font-black font-bold border-b-2 border-blue-900' : 'hover:bg-purple-700'}`} onClick={() => handleNavigation("/contact")}>Login/Registration</li>

        </ul>
    );
}

export default NavigationMenu;
