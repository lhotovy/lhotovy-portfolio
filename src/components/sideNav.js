import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom"
import React from "react";
import { navs } from "../data/links";

export const SideBar = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <>
            <div className={`bg-sky-800 h-screen p-5 pt-8 ${open ? "w-64" : "w-20"} duration-300 absolute hidden md:inline-flex`}>
                <BsArrowLeftShort className={`bg-white text-sky-800 text-3xl rounded-full absolute -right-3 top-6 border border-sky-800 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                <ul className="pt-6">
                    {navs.map((nav) => (
                        <>
                            <li key={nav.id} className="text-white hover:bg-slate-700 text-sm flex justify-start items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2">
                                <Link to={nav.link}>
                                    <i className={`${nav.icon} inline-flex justify-center`}/>
                                    <span className={`${!open && "hidden"} inline-flex justify-start flex-1 font-medium tracking-wider ml-4`}>{nav.name}</span>
                                </Link>                 
                            </li>
                        </>
                    ))}
                </ul>   
            </div>
            <div className={`bg-sky-800 w-screen p-3 fixed z-10 bottom-0 md:hidden flex flex-row justify-center`}>
                <ul className="flex flex-row">
                    {navs.map((nav) => (
                        <>
                            <li key={nav.id} className="text-white hover:bg-slate-700 text-sm flex items-center gap-y-8 cursor-pointer p-1 rounded-md mx-3">
                                <Link to={nav.link}>
                                        <i className={nav.icon}/>                                   
                                </Link>      
                            </li>
                        </>
                    ))}
                </ul>   
            </div>
        </>
    )
}