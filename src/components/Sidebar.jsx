import { useState } from "react";
import { useFloating } from "@floating-ui/react"
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
    const dispacth = useDispatch();
    const [open, setOpen] = useState(false)
    const [openFloat, setOpenFloat] = useState(false);
    const { refs, floatingStyles } = useFloating({placement: 'bottom-end'});
  return (
    <>
      <div className="flex p-4 sm:ml-64 justify-between sm:justify-end">
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="z-40 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setOpen(open => !open)}>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>
        <div onClick={() => setOpenFloat(float => !float)} className={open ? "" : "z-40"}>
              <img ref={refs.setReference} src="/icons/icon_x512.webp" alt="" className="w-10 h-10 rounded-full object-cover border border-gray-100" />
              { openFloat ? <div ref={refs.setFloating} style={floatingStyles} className="flex flex-col p-1 rounded-md border border-gray-300 shadow bg-white">
                <Link to="/profile" className="text-start flex px-4 py-2 items-center gap-x-2 hover:bg-emerald-100 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-3 h-3"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>Profil saya</Link>
                <button className="text-start flex px-4 py-2 items-center gap-x-2 hover:bg-emerald-100 rounded-md" onClick={() => {}}><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24"><path d="M3,3H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V21H3Z"/><path d="M22.948,9.525,18.362,4.939,16.241,7.061l3.413,3.412L5,10.5,5,13.5l14.7-.027-3.466,3.466,2.121,2.122,4.587-4.586A3.506,3.506,0,0,0,22.948,9.525Z"/></svg>Keluar</button>
              </div> : '' }
            </div>
        <div className={`overlay ${open ? 'opacity-40' : 'hidden'}  z-30`} onClick={() => {
            setOpen(false)
            setOpenFloat(false)
        }}></div>
      </div>
      
      

      

      <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${open ? '-translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidenav">
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200">
            <div to="/" className="flex items-center space-x-3 my-2">
                <img src="/icons/icon_x48.webp" className="h-8 w-8" alt="GoFitLife Logo"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap">GoFitLife</span>
            </div>
            <ul className="space-y-2 mt-4">
                <li>
                    <NavLink to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-emerald-100">
                        {/* <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                        <span className="ml-3">Beranda</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-emerald-100">
                        {/* <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                        <span className="ml-3">Pengguna</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/recipe" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-emerald-100">
                        {/* <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                        <span className="ml-3">Resep</span>
                    </NavLink>
                </li><li>
                    <NavLink to="/food" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-emerald-100">
                        {/* <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                        <span className="ml-3">Pangan</span>
                    </NavLink>
                </li><li>
                    <NavLink to="/activity" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-emerald-100">
                        {/* <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                        <span className="ml-3">Aktivitas</span>
                    </NavLink>
                </li>
            </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;