import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../data/auth";
import Toast from "../components/Toast";
import ilustration1 from "../assets/ilustration-2.svg";
import ilustration2 from "../assets/ilustration-3.svg";
import ilustration3 from "../assets/ilustration-4.svg";
import ilustration4 from "../assets/ilustration-5.svg";
import male from "../assets/male.png";
import female from "../assets/female.png";

function Page1({gender, setGender}) {
  return (
    <>
      <h2 className="text-medium text-lg">Jenis kelamin</h2>
      <p className="text-normal text-sm text-gray-500 mb-8">Silahkan pilih jenis kelamin Anda</p>
      <div className="grid grid-cols-2 gap-x-3">
        <input type="radio" name="gender" id="male" className="hidden peer/male" checked={gender==='male'} onChange={e => e.currentTarget.checked ? setGender('male') : null} />
        <label htmlFor="male" className="p-2 w-full border hover:bg-emerald-50 border-emerald-400 rounded-lg peer-checked/male:bg-emerald-400">
          <img src={male} alt="" className="w-24 h-24 mx-auto" />
          Laki-Laki
        </label>
        <input type="radio" name="gender" id="female" className="hidden peer/female" checked={gender==='female'} onChange={e => e.currentTarget.checked ? setGender('female') : null} />
        <label htmlFor="female" className="p-2 w-full border hover:bg-emerald-50 border-emerald-400 rounded-lg peer-checked/female:bg-emerald-400">
          <img src={female} alt="" className="w-24 h-24 mx-auto" />
          Perempuan
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full mt-16 mb-2">Selanjutnya</button>
    </>
  )
} 

function Page2({birthday, setBirthday, setPage}) {
  return (
    <>
      <button className="block" onClick={() => setPage(1)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
  
      <h2 className="text-medium text-lg">Tanggal lahir</h2>
      <p className="text-normal text-sm text-gray-500 mb-8">Silahkan masukkan tanggal lahir Anda</p>
      <input type="date" name="birthday" id="birthday" className="p-2.5 w-fit mx-auto bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white pl-9" onChange={e => setBirthday(e.currentTarget.value)} value={birthday} required />
      <button type="submit" className="btn btn-primary w-full mt-16 mb-2">Selanjutnya</button>
    </>
  )
} 

function Page3({weight, setWeight, setPage}) {
  return (
    <>
      <button className="block" onClick={() => setPage(2)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
  
      <h2 className="text-medium text-lg">Berat badan</h2>
      <p className="text-normal text-sm text-gray-500 mb-8">Silahkan masukkan berat badan Anda</p>
      <input type="number" name="birthday" id="birthday" className="p-2.5 w-fit mx-auto bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white pl-9" placeholder="Berat badan (kg)" value={weight} onChange={e => setWeight(e.currentTarget.value)} required />
      <button type="submit" className="btn btn-primary w-full mt-16 mb-2">Selanjutnya</button>
    </>
  )
} 

function Page4({height, setHeight, setPage}) {
  return (
    <>
      <button className="block" onClick={() => setPage(3)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
  
      <h2 className="text-medium text-lg">Tinggi badan</h2>
      <p className="text-normal text-sm text-gray-500 mb-8">Silahkan masukkan tinggi badan Anda</p>
      <input type="number" name="birthday" id="birthday" className="p-2.5 w-fit mx-auto bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white pl-9" placeholder="Tinggi badan (cm)" value={height} onChange={e => setHeight(e.currentTarget.value)} required />
      <button type="submit" className="btn btn-primary w-full mt-16 mb-2">Selanjutnya</button>
    </>
  )
} 

function Page5({activityLevel, setActivityLevel, setPage}) {
  return (
    <>
      <button className="block" onClick={() => setPage(4)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
  
      <h2 className="text-medium text-lg">Tingkat aktivitas</h2>
      <p className="text-normal text-sm text-gray-500 mb-8">Silahkan pilih tingkat aktivitas Anda</p>
      <input type="radio" name="activity_level" id="level-1" className="hidden peer/1" value={1} checked={activityLevel===1} onChange={e => e.currentTarget.checked ? setActivityLevel(1) : null} />
      <label htmlFor="level-1" className="block p-2.5 w-full rounded-lg text-sm border-2 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 mb-2 peer-checked/1:bg-emerald-400">Sangat rendah</label>
      <input type="radio" name="activity_level" id="level-2" className="hidden peer/2" value={2} checked={activityLevel===2} onChange={e => e.currentTarget.checked ? setActivityLevel(2) : null} />
      <label htmlFor="level-2" className="block p-2.5 w-full rounded-lg text-sm border-2 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 mb-2 peer-checked/2:bg-emerald-400">Rendah</label>
      <input type="radio" name="activity_level" id="level-3" className="hidden peer/3" value={3} checked={activityLevel===3} onChange={e => e.currentTarget.checked ? setActivityLevel(3) : null} />
      <label htmlFor="level-3" className="block p-2.5 w-full rounded-lg text-sm border-2 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 mb-2 peer-checked/3:bg-emerald-400">Sedang</label>
      <input type="radio" name="activity_level" id="level-4" className="hidden peer/4" value={4} checked={activityLevel===4} onChange={e => e.currentTarget.checked ? setActivityLevel(4) : null} />
      <label htmlFor="level-4" className="block p-2.5 w-full rounded-lg text-sm border-2 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 mb-2 peer-checked/4:bg-emerald-400">Tinggi</label>
      <input type="radio" name="activity_level" id="level-5" className="hidden peer/5" value={5} checked={activityLevel===5} onChange={e => e.currentTarget.checked ? setActivityLevel(5) : null} />
      <label htmlFor="level-5" className="block p-2.5 w-full rounded-lg text-sm border-2 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 mb-2 peer-checked/5:bg-emerald-400">Sangat tinggi</label>
      <button type="submit" className="btn btn-primary w-full mt-12 mb-2">Simpan</button>
    </>
  )
} 

function Welcome() {
  const dispacth = useDispatch()
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  // const [toast, setToast] = useState({})

  const [gender, setGender] = useState('male');
  const [birthday, setBirthday] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState(1);

  const { name } = useSelector(state => state.auth.user);
  if (name) return <Navigate to="/"/>

  return (
    <main className="flex">
      {/* <Toast type={toast.type} message={toast.message}/> */}
      <section className="hidden w-full min-h-screen pt-28 px-4 bg-emerald-50 md:flex">
        <img src={
          page === 1 ? ilustration1 : 
          page === 2 ? ilustration3 : 
          page === 3 ? ilustration2 :
          page === 4 ? ilustration2 :
          ilustration4
          } alt="" className="w-3/5 mx-auto"/>
      </section>
      <section className="w-full min-h-screen pt-28 px-4 bg-emerald-50 md:bg-white">
        <form className="bg-white text-center my-auto shadow border border-gray-200 rounded-2xl w-full max-w-sm p-8 mx-auto" onSubmit={(e) => {
          e.preventDefault()
          setPage(page => page < 5 ? page+1 : 5)
          // setToast({type: 1, message: 'Hallo'+Date.now()})
        }}>
          {page === 1 ? <Page1 gender={gender} setGender={setGender}/> :
            page === 2 ? <Page2 birthday={birthday} setBirthday={setBirthday} setPage={setPage}/> :
            page === 3 ? <Page3 weight={weight} setWeight={setWeight} setPage={setPage}/> : 
            page === 4 ? <Page4 height={height} setHeight={setHeight} setPage={setPage}/> :
            <Page5 activityLevel={activityLevel} setActivityLevel={setActivityLevel} setPage={setPage} />
          }
        </form>
      </section>
    </main>
  );
}

export default Welcome;