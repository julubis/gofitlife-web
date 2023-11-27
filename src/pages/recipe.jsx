import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from '../data/recipes'

function Card({id, name, image, calorie, time, loading}) {
  const card = (
    <Link to={`/recipe/${id}`} className="w-full rounded-lg mb-4 shadow hover:bg-gray-50">
      <img src={ image } alt="image" className="w-full rounded-t-lg bg-gray-200 aspect-video object-cover" />
      <div className="p-4 rounded-b-lg text-start">
        <p className="text-gray-800 text-lg font-medium">{ name }</p>
        <div className="mt-4 flex gap-2 text-gray-500">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd"/>
            </svg>  
            <p className="text-sm">{ calorie } kcal</p>
          </div>
          <div className="flex items-center gap-1"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
            </svg>               
            <p className="text-sm">{ time } min</p>
          </div>
        </div>
      </div>
    </Link>
  );
  const skeleton = (
    <div className="w-full rounded-lg mb-4 shadow">
      <div className="w-full rounded-t-lg bg-gray-200 aspect-video animate-pulse"></div>
      <div className="p-4 rounded-b-lg">
        <div className="w-3/5 h-7 bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="mt-4 flex gap-2 w-full">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="h-5 w-10 rounded-lg bg-gray-200 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="h-5 w-10 rounded-lg bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
  return loading ? skeleton : card;
}

// function CardList({loading, recipes}) {
//   { loading ? {  } }
// }

function Recipe() {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRecipes(data)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
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
          <p className="text-center text-base font-medium">Resep</p>
        </div>
      </div>
      

      <div className="search-box w-full flex justify-center">
        <input id="input-search" className="p-2.5 w-[30%] rounded-lg text-sm border-2 border-emerald-300 hover:border-emerald-400 focus:outline-none focus:bg-white" type="text" placeholder="Cari resep masakan" onChange={(e) => {
          setLoading(true)
          setTimeout(() => {
            setRecipes(data.filter(recipe => recipe.name.toLowerCase().includes(e.target.value.toLowerCase())))
            setLoading(false)
          }, 300);
          
        }} />
      </div>
      <div className="flex mt-4 w-full gap-x-3">
        <div className="card-container text-center grid grid-cols-3 flex-3 w-full gap-x-3">
          {/* {
            recipes.length > 0 ? 'ada': loading ? 'lagi loading': 'kosong'
          } */}
          {
            recipes.map(recipe => <Card key={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image} calorie={recipe.calorie} time={recipe.time} loading={loading}/>)
          }
          
        </div>
        <form className="p-4 rounded-lg border w-80 h-fit" id="form-filter" onSubmit={(e) => {
          e.preventDefault()
          const {category} = Object.fromEntries(new FormData(e.currentTarget));
          setLoading(true)
          setTimeout(() => {
            setRecipes(data.filter(recipe => recipe.category === category || category === 'all'))
            setLoading(false)
          }, 300);
        }}>
          <h3 className="text-lg mb-4">Filter berdasarkan kategori</h3>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="category" id="all" value="all" className="w-4 h-4 text-emerald-400 bg-gray-100 border-gray-300 focus:ring-emerald-300 cursor-pointer" defaultChecked/>
            <label htmlFor="all">Semua</label> 
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="category" value="breakfast" id="breakfast" className="w-4 h-4 text-emerald-400 bg-gray-100 border-gray-300 focus:ring-emerald-300 cursor-pointer"/>
            <label htmlFor="breakfast" className="cursor-pointer">Sarapan</label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="category" value="lunch" id="lunch" className="w-4 h-4 text-emerald-400 bg-gray-100 border-gray-300 focus:ring-emerald-300 cursor-pointer"/>
            <label htmlFor="lunch" className="cursor-pointer">Makan Siang</label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="category" value="dinner" id="dinner" className="w-4 h-4 text-emerald-400 bg-gray-100 border-gray-300 focus:ring-emerald-300 cursor-pointer"/>
            <label htmlFor="dinner" className="cursor-pointer">Makan Malam</label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" name="category" value="snack" id="snack" className="w-4 h-4 text-emerald-400 bg-gray-100 border-gray-300 focus:ring-emerald-300 cursor-pointer"/>
            <label htmlFor="snack" className="cursor-pointer">Cemilan</label>
          </div>
          <button type="submit" className="btn btn-primary mt-4 w-full">Terapkan</button>
        </form>
      </div>
    </main >
  );
}

export default Recipe;