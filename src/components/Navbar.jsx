import { useState } from "react";
import { useFloating } from "@floating-ui/react"
import { useDispatch } from "react-redux";
import { removeToken } from "../data/auth";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar({user}) {
  const [openNav, setOpenNav] = useState(false);
  const [openFloat, setOpenFloat] = useState(false);

  const dispacth = useDispatch();
  const { pathname } = useLocation();
  const { refs, floatingStyles } = useFloating({placement: 'bottom-end'});
  const hidden = pathname.startsWith('/login') || pathname.startsWith('/register')

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 backdrop-filter backdrop-blur-lg bg-opacity-80">
        <div className="container flex flex-wrap items-center justify-between p-4">
          <Link to="/" className="flex items-center space-x-3 my-1">
            <img src="/icons/icon_x48.webp" className="h-8 w-8" alt="GoFitLife Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">GoFitLife</span>
          </Link>
          <div className={`flex md:order-2 space-x-3 md:space-x-0 ${ hidden ? 'hidden' : '' }`}>
            { !user.name ? <Link to="/login" className="bg-emerald-400 hover:bg-emerald-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5">Masuk</Link> :
            <div onClick={() => setOpenFloat(float => !float)}>
              <img ref={refs.setReference} src="/icons/icon_x512.webp" alt="" className="w-10 h-10 rounded-full object-cover border border-gray-100" />
              { openFloat ? <div ref={refs.setFloating} style={floatingStyles} className="flex flex-col p-1 rounded-md border border-gray-300 shadow bg-white">
                <Link to="/profile" className="text-start flex px-4 py-2 items-center gap-x-2 hover:bg-emerald-100 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-3 h-3"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>Profil saya</Link>
                <button className="text-start flex px-4 py-2 items-center gap-x-2 hover:bg-emerald-100 rounded-md" onClick={() => dispacth(removeToken())}><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24"><path d="M3,3H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V21H3Z"/><path d="M22.948,9.525,18.362,4.939,16.241,7.061l3.413,3.412L5,10.5,5,13.5l14.7-.027-3.466,3.466,2.121,2.122,4.587-4.586A3.506,3.506,0,0,0,22.948,9.525Z"/></svg>Keluar</button>
              </div> : '' }
            </div> }
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-label="Open Navbar" onClick={() => setOpenNav(nav => !nav)}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:w-auto md:order-1 ${ hidden ? 'md:hidden' : 'md:flex' } ${ openNav ? '' : 'hidden' }`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <NavLink to="/home" className="block py-2 px-3 text-gray-900 rounded hover:bg-emerald-100 md:hover:bg-transparent md:hover:text-emerald-500 md:p-0">Beranda</NavLink>
              </li>
              <li>
                <NavLink to="/recipe" className="block py-2 px-3 text-gray-900 rounded hover:bg-emerald-100 md:hover:bg-transparent md:hover:text-emerald-500 md:p-0">Resep</NavLink>
              </li>
              <li>
                <NavLink to="/food" className="block py-2 px-3 text-gray-900 rounded hover:bg-emerald-100 md:hover:bg-transparent md:hover:text-emerald-500 md:p-0">Pangan</NavLink>
              </li>
              <li>
                <NavLink to="/news" className="block py-2 px-3 text-gray-900 rounded hover:bg-emerald-100 md:hover:bg-transparent md:hover:text-emerald-500 md:p-0">Berita</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`overlay z-10 opacity-0 ${openNav || openFloat ? '' : 'hidden'}`}  onClick={() => {setOpenNav(false);setOpenFloat(false)}}></div>
    </>
  
  );
}

export default Navbar;
