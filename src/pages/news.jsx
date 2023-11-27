import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

async function getNews(title, page=1) {
  try {
    const params = { page };
    if (title) params.title = title;
    const response = await axios.get('/news', { params });
    return response.data
  } catch(e) {
    return []
  }
  
}

function News() {
  
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews()
      .then(n => {
        setNews(n.data.news)
        setLoading(false)
      })
      .catch((e) => alert(e))
  }, []);

  return (
    <main className="mt-20 mx-[5.5%]">
      <div className="w-full inline-flex py-4 px-0 justify-start align-start opacity-50">
        <Link className="py-0 px-1 flex justify-center items-center text-emerald-500 hover:text-emerald-600" to="/home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <p className="text-center text-base font-medium">Beranda</p>
        </Link>
        <div className="py-0 px-1 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
          <p className="text-center text-base font-medium">Berita</p>
        </div>
      </div>
      

      <div className="search-box w-full flex justify-center">
        <input id="input-search" className="p-2.5 w-[30%] rounded-lg text-sm border-2 border-emerald-300 hover:border-emerald-400 focus:outline-none focus:bg-white" type="text" placeholder="Cari berita" onChange={() => {
          // setLoading(true)
          setTimeout(() => {
            // setRecipes(data.filter(recipe => recipe.name.toLowerCase().includes(e.target.value.toLowerCase())))
            // setLoading(false)
          }, 300);
          
        }} />
      </div>
      <div className="flex mt-4 w-full gap-x-3">
        <div className="card-container text-center grid grid-cols-3 w-full gap-x-3">
          
          
        </div>
      </div>
    </main >
  );
}

export default News;