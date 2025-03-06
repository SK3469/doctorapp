import { HomeIcon, Menu } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open , setOpen] = useState(false)
  const {user} = useSelector(store=>store.auth)
  return (
    <nav className="sticky top-0  h-[10vh] bg-violet-800 w-full shadow-md">
      <div className=" hidden md:flex justify-between items-center h-full px-5">
        {/*Menu Icon */}
        {
          user ? (
            <div className=" md:flex gap-8 items-center">
              <h1 className="bg-white px-3 py-1 text-sm font-bold text-violet-800 rounded-full ">
                Patient System
              </h1>
              <HomeIcon className="text-white cursor-pointer" size={28} />
            </div>
          ) : (<HomeIcon className="text-white cursor-pointer" size={28} />)
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
      {/* Mobile Responsive */}
      <div className=" md:hidden flex justify-between items-center py-[20px] px-2 text-white ">
<div>
  <HomeIcon/>
</div>
<div>
  <Menu onChange={()=> setOpen(!open)} className=" cursor-pointer"/>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
