import React from "react";
import Logo from "../../assets/klogo.png";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
<<<<<<< HEAD
import Contact from "../../Pages/ContactUs";
=======
>>>>>>> 0e5df0c7ead65312faa3f950239dac7beef692ab

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Us",
    link: "/aboutus",
  },
  {
    id: 3,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    name: "Services",
    link: "/services",
  },
  {
    id: 5,
    name: "Contact Us",
    link: "/contact",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "UK",
    link: "/#",
  },
  {
    id: 2,
    name: "Canada",
    link: "/#",
  },
  {
    id: 3,
    name: "Australia",
    link: "/#",
  },
  {
    id: 4,
    name: "New Zealand",
    link: "/#",
  },
  {
    id: 5,
    name: "Iearland",
    link: "/#",
  },
  {
    id: 6,
    name: "USA",
    link: "/#",
  },
  {
    id: 7,
    name: "View More",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-bl dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-40 drop-shadow-xl grayscale-0" />
              
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
<<<<<<< HEAD
            <a 
            href="/contact"
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="transition-all duration-200">
              Contact Us
            </span>
            <FaUserCircle className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </a>
=======
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Contact Us
              </span>
              <FaUserCircle className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
>>>>>>> 0e5df0c7ead65312faa3f950239dac7beef692ab

            {/* Darkmode Switch */}
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Country
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
