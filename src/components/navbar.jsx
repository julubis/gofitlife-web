import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full py-5 px-[5.5%] z-10 backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)]">
      <nav className="flex justify-between items-center">
        <Link to="/" className="flex flex-row gap-2">
          <img src="/icons/icon_x512.webp" alt="logo" className="h-9 w-9"/>
          <span className="text-3xl font-semibold">GoFitLife</span>
        </Link>
        { useLocation().pathname !== '/login' ?
          <ul className="flex flex-row gap-5 font-medium text-base">
            <li><NavLink to="/home" className="hover:text-emerald-500">Beranda</NavLink></li>
            <li><NavLink to="/recipe" className="hover:text-emerald-500">Resep</NavLink></li>
            <li><NavLink to="/food" className="hover:text-emerald-500">Pangan</NavLink></li>
            <li><NavLink to="/news" className="hover:text-emerald-500">Berita</NavLink></li>
          </ul> : ''
        }
        <div className="extra">
          { useLocation().pathname === '/user' ?
              <img src="/icons/icon_x512.webp" alt="" className="w-10 h-10 rounded-full object-cover" /> : <Link to="/login" className="btn btn-primary">Mulai sekarang</Link>
          }
        </div>
      </nav>
    </header>
  );
}

export default Navbar;