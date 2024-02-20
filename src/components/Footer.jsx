import React from 'react';
import { FaExternalLinkAlt, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
            <div>© 2024 Bhangle software opc ltd</div>
            <div className="flex items-center">
                <span className="mr-4">Disclaimer Privacy</span>
                <a href="#" className="mr-4"><FaExternalLinkAlt /></a>
                <a href="#"><FaInstagram /></a>
            </div>
        </div>
    );
}

export default Footer;
