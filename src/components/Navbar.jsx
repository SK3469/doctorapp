import { store } from "@/redux/store";
import { Menu } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {user} = useSelector(store=>store.auth)
  return (
    <nav className="sticky top-0  h-[10vh] bg-violet-800 w-full shadow-md">
      <div className="flex justify-between items-center h-full px-5">
        {/* Hamburger Menu Icon */}
        {
          user ? (
            <div className="flex gap-8 items-center">
              <h1 className="bg-white px-3 py-1 text-sm font-bold text-violet-800 rounded-full ">
                Patient System
              </h1>
              <Menu className="text-white cursor-pointer" size={28} />
            </div>
          ) : (<Menu className="text-white cursor-pointer" size={28} />)
        }
        {/* Navbar Links */}
        <div className="flex gap-3">
          <Link to='/services'>
            <h1 className="bg-white px-3 py-1 text-violet-800 rounded-[6px] hover:font-bold cursor-pointer">
              Services
            </h1>
          </Link>
          <Link to='/book-appointment'> <h1 className="bg-white px-3 py-1 text-violet-800 rounded-[6px] hover:font-bold cursor-pointer">
            Book an appointment
          </h1></Link>
          <Link to="/my-appointment">
            <h1 className="bg-white px-3 py-1 text-violet-800 rounded-[6px] hover:font-bold cursor-pointer">
              My appointment
            </h1></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
