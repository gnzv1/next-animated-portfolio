"use client"
import Link from "next/link"
import { useState } from "react";

const links = [
    { url: "/", title: "Inicio" },
    { url: "/about", title: "Nosotros" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contacto" },
  
];

const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/*logo */}
    <div className="">
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center -z-50 relative">
          <span className="text-white mr-1">Test</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Hola</span>
        </Link>
    </div>
    {/* MENU RESPONSIVE */}
    <div className="">
      {/* BOTON MENU */}
      <button className="w-10 h-8 bg-black flex flex-col justify-between relative z-50" 
      onClick={() => setOpen ((prev) => !prev)}>
      <div className="w-10 h-1 bg-white rounded"></div>
      <div className="w-10 h-1 bg-white rounded"></div>
      <div className="w-10 h-1 bg-white rounded"></div>
      </button>
        {/* LISTA MENU */}
        {open && ( 
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4x1">
            {links.map(link => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
               ))}
              </div>
        )}
          </div>
          </div>
          );
        };

export default Navbar;