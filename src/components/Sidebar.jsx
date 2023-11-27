import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const [openNav, setOpenNav] = useState(false);

  return (
  <nav className="bg-white fixed w-full z-20 top-0 start-0 backdrop-filter backdrop-blur-lg bg-opacity-80">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link to="/" className="flex items-center space-x-3">
        <img src="/icons/icon_x512.webp" className="h-8 w-8" alt="GoFitLife Logo"/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap">GoFitLife</span>
      </Link>
      <div className="flex md:order-2 space-x-3 md:space-x-0">
        <Link to="/login" className="bg-emerald-400 hover:bg-emerald-500 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Masuk</Link>
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200" onClick={() => setOpenNav(!openNav)}>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${ openNav ? '' : 'hidden' }`}>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-emerald-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
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
  )
}

export default Sidebar;