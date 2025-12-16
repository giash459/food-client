import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logoImage from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo + Name */}
        <div className="">
          <div className='flex justify-center mt-5'>
            <img src={logoImage} alt="Logo" className="w-24 rounded" />
          </div>
          <h2 className="text-xl font-bold my-5">Fahima Chowdhury</h2>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5 text-2xl">
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-blue-300">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" className="hover:text-red-500">
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Fahima Chowdhury — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
