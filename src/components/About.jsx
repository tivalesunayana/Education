import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const About = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const numberOfImages = 5; // Set this to the total number of images you have
    const slideInterval = 4000; // Slide interval in milliseconds
    const slideSpeed = 10; // Slide speed in pixels per interval

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % numberOfImages);
        }, slideInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-between">

            <div className="grid grid-cols-1 gap-8 p-0 relative overflow-hidden" style={{ overflowX: 'hidden' }}>
                <div className="flex" style={{ transform: `translateX(-${slideIndex * 100}%)`, transition: `transform ${slideSpeed}s linear` }}>
                    <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww" alt="Random" className="w-full h-auto animate-right-to-left" />
                    <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww" alt="Random" className="w-full h-auto animate-right-to-left" />
                    <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Random" className="w-full h-auto animate-right-to-left" />
                    <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Random" className="w-full h-auto animate-right-to-left" />
                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdW5zZWxpbmd8ZW58MHx8MHx8fDA%3D" alt="Random" className="w-full h-auto animate-right-to-left" />
                    <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Random" className="w-full h-auto animate-right-to-left" />
                    <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Random" className="w-full h-auto animate-right-to-left" />
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">About Us</h3>
                    <p className="text-gray-600">Bhangale Software OPC Pvt Ltd is an education counseling company that specializes in providing expert counseling services. Our company also launched Ybites, a food delivery app, 2 years ago.</p>
                    <p className="text-gray-600">For more information, please contact us at <span className="text-blue-600 font-bold">4534543545</span>.</p>
                </div>
            </div>
            <div className="flex justify-end pb-8 pr-8">
                <a href="https://bhangalesoftwares.co.in/#about" className="mr-4 flex items-center text-blue-600 hover:text-blue-700">
                    <FaExternalLinkAlt size={30} className="mr-2" /> Visit Website
                </a>
                <a href="https://www.instagram.com/ybites_official/" className="mr-4 flex items-center text-pink-600 hover:text-pink-700">
                    <FaInstagram size={30} className="mr-2" /> Follow on Instagram
                </a>
            </div>
        </div>
    );
}

export default About;
