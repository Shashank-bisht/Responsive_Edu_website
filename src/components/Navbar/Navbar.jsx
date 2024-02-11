import React, { useEffect } from "react";
import { navLinks } from "../../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavlink from "./MobileNavlink";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = ()=>{
     setActive(window.scrollY>20)
    }
    window.addEventListener("scroll",scrollActive)
    return ()=>{
      window.removeEventListener("scroll",scrollActive)
    }
  },[active])
  return (
    <div className={`${active ? 'shadow-lg bg-Solitude' : ''} fixed w-full top-0 left-0 z-20`}>
      <div>
        <div className={`${active ? 'shadow-lg bg-Solitude' : ''} py-4 px-8 flex justify-between items-center`}>
         <div className="flex items-center gap-4">
          {/* hamburger menu */}
         <HiMenuAlt1 className="text-3xl sm:hidden cursor-pointer" onClick={() => setToggle(!toggle)}/>
          <div className="text-xl text-Teal uppercase tracking-wide font-bold">
            Shanky
          </div>
         </div>
         {/* navlinks hidden for small screen */}
         <div className="hidden sm:flex items-center gap-4">
          {navLinks.map((link) => {
          return <NavLink key={link.id} {...link} />
          })}
         </div>
         {/* signup */}
         <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray ">Sign Up</button>
         {
          toggle && (<div className="fixed h-full w-72 top-0 left-0 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"> {
            navLinks.map((navLink) => {
            return <MobileNavlink key={navLink.id} {...navLink} setToggle={setToggle} toggle={toggle}/>
            })}
            {/* close */}
            <HiX className="absolute right-16 top-12 text-3xl cursor-pointer " onClick={() => setToggle(!toggle)}/>
        </div>)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
