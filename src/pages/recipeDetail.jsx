import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const [detail, setDetail] = useState({})

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://prw8fl-5000.csb.app/api/recipes/${id}`);
      const responseJson = await response.json();
      if (responseJson.status !== 'success') throw response;
      setDetail(responseJson.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

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
        <Link className="py-0 px-1 flex justify-center items-center text-emerald-400 hover:text-emerald-500" to="/recipe">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1 text-gray-600">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
          <p className="text-center text-sm font-medium">Resep</p>
        </Link>
        <div className="py-0 px-1 flex justify-center items-center text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
          <p className="text-center text-sm font-medium">Detail</p>
        </div>
      </div>
      
      <div className={`flex mt-4 lg:gap-8 flex-col lg:flex-row ${loading ? 'hidden': ''}`}>
        <div className="text-center w-full">
            <img src={`https://prw8fl-5000.csb.app/api/images/${detail.photo}`} alt="image" className="w-full rounded-xl bg-gray-200 aspect-video object-cover" />    
            {/* <div className="rounded-lg mt-4 mb-4 shadow">
                <div className="rounded-t-lg bg-white p-3">kalori Karbo Lemak Protein</div> 
            </div>  */}
        </div>
        <div className="w-full rounded-xl mb-4 shadow-lg p-3 border border-gray-200">
            <div className="p-4">
                <h3 className="font-medium text-2xl">{ detail.name }</h3>
            </div>
            <div className="flex gap-2 ms-4">
                <span className="px-5 py-1 text-sm rounded-full bg-emerald-50 border border-emerald-200">{detail.serving} Porsi</span>
                <span className="px-5 py-1 text-sm rounded-full bg-emerald-50 border border-emerald-200">{detail.duration} Menit</span>
            </div>
            <div className="p-4 clear-both">{ detail.description }</div>
            <div className="mt-4 p-4">
              <h3 className="font-medium text-2xl mb-2">Bahan - bahan</h3>
                <ul className="w-full rounded-lg bg-gray-50 p-6 mb-2">
                    {detail.ingredients?.map((ingredient, i) => (
                      <li key={i} className="border-b border-black flex justify-between mb-2">
                        <p>{ingredient.name}</p>
                        <p className="text-right">{ingredient.unit}</p>
                      </li>
                    ))}
                </ul>
            </div>
            <div className="p-4 mb-8">
              <h3 className="font-medium text-2xl mb-2">Cara memasak</h3>
              <ol className="list-decimal ml-4">
                {detail.directions?.map((direction, i) => <li key={`direct-${i}`} className="text-gray-800">{ direction.detail }</li>)}
              </ol>
            </div>
          {/* </div> */}
        </div>
      </div>

      {/* <b className="mt-4">Resep Lainnya</b>
      
      <div className={`flex mt-4 gap-5 ${loading ? 'hidden': ''}`}>
        <div className="card-container text-center w-full">
            <img src="assets\food-1.webp" alt="image" className="w-full rounded-t-lg bg-gray-200 aspect-video object-cover" />    
            <div className="p-4 rounded-b-lg text-start shadow mb-4">
                <p className="text-gray-800 font-medium">Easy Pea & Bayam Carbonara</p>
                <div className="mt-4 flex gap-2 text-gray-500">
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd"/>
                    </svg>  
                    <p className="text-xs">430 kkal</p>
                </div>
                <div className="flex items-center gap-1"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
                    </svg>               
                    <p className="text-xs">20 mnt</p>
                </div>
                </div>
            </div>
        </div>
        <div className="card-container text-center w-full">
            <img src="assets\food-1.webp" alt="image" className="w-full rounded-t-lg bg-gray-200 aspect-video object-cover" />    
            <div className="p-4 rounded-b-lg text-start shadow mb-4">
                <p className="text-gray-800 font-medium">Easy Pea & Bayam Carbonara</p>
                <div className="mt-4 flex gap-2 text-gray-500">
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd"/>
                    </svg>  
                    <p className="text-xs">430 kkal</p>
                </div>
                <div className="flex items-center gap-1"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
                    </svg>               
                    <p className="text-xs">20 mnt</p>
                </div>
                </div>
            </div>
        </div>
        <div className="card-container text-center w-full">
            <img src="assets\food-1.webp" alt="image" className="w-full rounded-t-lg bg-gray-200 aspect-video object-cover" />    
            <div className="p-4 rounded-b-lg text-start shadow mb-4">
                <p className="text-gray-800 font-medium">Easy Pea & Bayam Carbonara</p>
                <div className="mt-4 flex gap-2 text-gray-500">
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd"/>
                    </svg>  
                    <p className="text-xs">430 kkal</p>
                </div>
                <div className="flex items-center gap-1"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
                    </svg>               
                    <p className="text-xs">20 mnt</p>
                </div>
                </div>
            </div>
        </div>
      </div> */}
    </main >
  );
}

export default RecipeDetail;