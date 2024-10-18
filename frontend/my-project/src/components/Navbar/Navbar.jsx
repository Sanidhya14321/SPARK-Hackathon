import React from "react";
import logo from "../../assets/logo.jpg"; // Import your logo image
import "./Navbar.css"; // External CSS for animations

const Navbar = () => {
  return (
    <div className="navbar-container fixed top-7 left-0 right-0 flex justify-center items-center p-4">
      {/* Left Capsule */}
      <div className="capsule capsule-left flex justify-end items-center bg-gray-800 text-white rounded-full transform scale-x-0 origin-left animate-openCapsuleLeft">
        <ul className="flex space-x-5 pr-10">
          <li className="nav-item-left">Social</li>
          <li className="nav-item-left">Community</li>
          <li className="nav-item-left">Events</li>
        </ul>
      </div>

      {/* Logo at the center */}
      <div className="logo-container z-10 mx-4">
        <img src={logo} alt="Logo" className="logo-image w-12 h-12" />
      </div>

      {/* Right Capsule */}
      <div className="capsule capsule-right flex justify-start items-center bg-gray-800 text-white rounded-full transform scale-x-0 origin-right animate-openCapsuleRight">
        <ul className="flex space-x-5 pl-10">
          <li className="nav-item-right">Projects</li>
          <li className="nav-item-right">About Us</li>
          <li className="nav-item-right">Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;