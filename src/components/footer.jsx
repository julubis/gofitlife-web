import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-emerald-50 mt-auto mb-0">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <Link to="/" className="flex items-center">
                    <img src="/icons/icon_x48.webp" className="h-8 w-8 me-3" alt="FlowBite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">GoFitLife</span>
                </Link>
                <p className="text-gray-500">Membantu tubuh Anda menjadi lebih ideal</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-32 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Navigasi</h2>
                    <ul className="text-gray-500 font-medium">
                        <li className="mb-4">
                            <Link to="/home" className="hover:underline">Home</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/recipe" className="hover:underline">Resep</Link>
                        </li>
                        <li>
                            <Link to="/news" className="hover:underline">Berita</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Layanan</h2>
                    <ul className="text-gray-500 font-medium">
                        <li className="mb-4">
                          <Link to="/home" className="hover:underline">Kalkulator</Link>
                        </li>
                        <li className="mb-4">
                          <Link to="/recipe" className="hover:underline">Resep</Link>
                        </li>
                        <li>
                          <Link to="/news" className="hover:underline">Berita</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://gofitlife.netlify.app/" className="hover:underline">GoFitLife</a>. All Rights Reserved.
            </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;