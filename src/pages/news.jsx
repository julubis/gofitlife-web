import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewsList({news}) {
  return (
    <>
    { news.map(n => <article key={n.id} className="w-full rounded-lg shadow flex flex-col">
      <img src={n.image?.small} alt="" className="w-full rounded-t-lg bg-gray-200 aspect-video object-cover" />
      <div className="p-4 rounded-lg text-start flex flex-col h-full gap-2">
        <p className="text-sm text-gray-600">{new Intl.DateTimeFormat('id-ID', {month: 'long', day: 'numeric', year: 'numeric'}).format(new Date(n.isoDate))}</p>
        <p className="text-gray-800 font-medium">{ n.title }</p>
        <a href={n.link} target="_blank" rel="noreferrer" className="mt-auto mb-0 w-fit text-sm font-medium px-5 py-2.5 bg-emerald-400 hover:bg-emerald-500 rounded-lg">Baca selengkapnya</a>
      </div>
    </article>) }
    </>
  )
}

function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1)

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://prw8fl-5000.csb.app/api/news?page=${page}&pageSize=6`);
      const data = await response.json();
      setNews(prev => [...prev, ...data.data.news]);
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const handleScroll = () => {
    if ((window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) && !loading) {
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[page]);

  return (
    <main className="container px-4 mt-20 min-h-screen">
      <div className="w-full inline-flex py-4 px-0 justify-start align-start">
        <Link className="py-0 px-1 flex justify-center items-center text-emerald-400 hover:text-emerald-500" to="/home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <p className="text-center text-sm font-medium">Beranda</p>
        </Link>
        <div className="py-0 px-1 flex justify-center items-center text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
          <p className="text-center text-sm font-medium">Berita</p>
        </div>
      </div>
      

      <div className="search-box w-full flex justify-center">
        <input id="input-search" className="p-2.5 w-full max-w-xs rounded-lg text-sm border-2 border-emerald-300 hover:border-emerald-400 focus:outline-none focus:bg-white" type="text" placeholder="Cari berita" onChange={() => {
          // setLoading(true)
          // setTimeout(() => {
            // setRecipes(data.filter(recipe => recipe.name.toLowerCase().includes(e.target.value.toLowerCase())))
            // setLoading(false)
          // }, 300);
          
        }} />
      </div>
      <div className="mt-8 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
        <NewsList news={news}/>
      </div>
    </main >
  );
}

export default NewsPage;