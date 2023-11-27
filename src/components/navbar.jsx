import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFloating } from "@floating-ui/react"
import { useState } from "react";

function Navbar() {
  const { pathname } = useLocation();
  const [ openNav, setOpenNav ] = useState(true);
  const user = useSelector(state => state.auth.name);
  const { refs, floatingStyles } = useFloating({placement: 'bottom-end'});

  return (
    <header className="fixed top-0 left-0 w-full py-4 md:py-5 px-[3%] md:px-[5.5%] z-20 bg-white">
      <nav className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="text-gray-700 p-2 rounded-lg hover:bg-emerald-100 md:hidden focus:outline-none focus:ring-2 focus:ring-emerald-400" onClick={() => setOpenNav(!openNav)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <Link to="/" className="flex flex-row gap-2 items-center">
            <img src="/icons/icon_x512.webp" alt="logo" className="h-8 w-8"/>
            <span className="text-2xl md:text-3xl font-semibold">GoFitLife</span>
          </Link>
        </div>
        
        { pathname !== '/login' && pathname !== '/register' ?
          <>
            {
              openNav ? <ul className="block fixed w-full top-0 left-0 md:w-auto md:h-auto mt-[4.5rem] px-[3%] md:static md:flex md:flex-row gap-5 font-medium bg-white p-2">
                  <li className="w-full"><NavLink to="/home" className="w-full p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-500">Beranda</NavLink></li>
                  <li className="w-full p-2 rounded-lg hover:bg-emerald-50"><NavLink to="/recipe" className="hover:text-emerald-500">Resep</NavLink></li>
                  <li className="w-full p-2 rounded-lg hover:bg-emerald-50"><NavLink to="/food" className="hover:text-emerald-500">Pangan</NavLink></li>
                  <li className="w-full p-2 rounded-lg hover:bg-emerald-50"><NavLink to="/news" className="hover:text-emerald-500">Berita</NavLink></li>
                </ul> : ''
            }
            
            <div className="extra">
              { user ?
                <>
                <img ref={refs.setReference} src="/icons/icon_x512.webp" alt="" className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                {/* <div ref={refs.setFloating} style={floatingStyles} className="flex flex-col p-2 rounded border border-gray-200 shadow bg-white">
                  <Link to="/profile" className="text-start flex px-4 py-2 items-center gap-x-2 hover:bg-emerald-100 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-3 h-3"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>Profil saya</Link>
                  <button className="text-start flex px-4 py-2 items-center gap-x-2 hover:bg-emerald-100 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24"><path d="M3,3H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V21H3Z"/><path d="M22.948,9.525,18.362,4.939,16.241,7.061l3.413,3.412L5,10.5,5,13.5l14.7-.027-3.466,3.466,2.121,2.122,4.587-4.586A3.506,3.506,0,0,0,22.948,9.525Z"/></svg>Keluar</button>
                </div> */}
                </> : <Link to="/login" className="btn btn-primary">Masuk</Link>
              }
            </div>
          </> : ''
        }
      </nav>
    </header>
  );
}

export default Navbar;