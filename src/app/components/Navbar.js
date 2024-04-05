"use client";

import { useState } from "react";
import Link from "next/link";
import XIcon from "./icons/XIcon";
import BarIcon from "./icons/BarIcon";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="py-4 relative z-10"
      style={{ backgroundImage: `url('/TopHeaderImage.png')` }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex md:items-center md:justify-center w-full text-center">
          {/* Centered navigation links for large screens */}
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Appointments</Link>
            </li>
            <li>
              <Link href="/">Medical Card Info</Link>
            </li>
            <li>
              <Link href="/">FAQs</Link>
            </li>
            <li>
              <Link href="/">Pharmacies</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end w-full md:w-auto">
          {/* Mobile menu icon */}
          <button
            onClick={toggleMobileMenu}
            className="text-white md:hidden focus:outline-none"
          >
            <BarIcon
              className={`z-50 text-gray-900 ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
            />
          </button>
        </div>
      </div>
      {/* Navigation links for mobile */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-1/2 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        style={{ backgroundColor: "#e6efc5" }}
      >
        {/* Close button */}
        <button
          onClick={closeMobileMenu}
          className="text-white absolute top-4 right-4 focus:outline-none"
        >
          <XIcon />
        </button>
        <ul className="flex flex-col justify-center h-full items-center">
          <li>
            <Link href="/">Appointments</Link>
          </li>
          <li>
            <Link href="/">Medical Card Info</Link>
          </li>
          <li>
            <Link href="/">FAQs</Link>
          </li>
          <li>
            <Link href="/">Pharmacies</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
