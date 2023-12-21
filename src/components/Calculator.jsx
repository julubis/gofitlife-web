import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { calorie } from "../helpers/calorie";
import Chart from "./Chart";
import ChartBMI from "./ChartBMI";

const activity = {
  key: ['Sangat rendah', 'Rendah', 'Sedang', 'Tinggi', 'Sangat tinggi'],
  value: [
    'Sedikit atau tidak berolahraga sama sekali',
    'Berolahraga ringan 1 hingga 3 hari dalam seminggu',
    'Berolahraga secukupnya 3 hingga 5 hari dalam seminggu',
    'Melakukan olahraga berat 6 hingga 7 hari dalam seminggu',
    'Melakukan olahraga yang sangat berat 6 hingga 7 hari dalam seminggu'
  ]
}

const Counter = ({num}) => {
  const [init, setInit] = useState(0);
  const startRef = useRef(null);
  const animateCounter = (ts) => {
    if (!startRef.current) {
      startRef.current = ts
    }
    const progress = ts - startRef.current;
    const duration = 800
    const percent = Math.min(progress / duration, 1);
    const animateValue = Math.floor(percent * num);
    setInit(animateValue)

    if (percent < 1) {
      requestAnimationFrame(animateCounter)
    }
  }
  useEffect(() => {
    startRef.current = null;
    requestAnimationFrame(animateCounter)
  }, [num])

  return <span>{init}</span>
}

function Calculator() {
  const [slide, setSlide] = useState(false);
  const user = useSelector(state => state.auth.user);

  const [profiles, setProfiles] = useState({
    gender: user.gender || '',
    age: user.age || '',
    weight: user.weight || '',
    height: user.height || '',
    target: user ? 'maintain' : '',
    activityLevel: user.activity_level || 1,
  })

  const [total, setTotal] = useState(0);
  const [protein, fat, carbs] = [total * .15 / 4, total * .2 / 9, total * .65 / 4];
  const bmi = (profiles.weight / (profiles.height / 100) ** 2).toFixed(1)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { gender, age, height, weight, activity_level, target } = Object.fromEntries(new FormData(e.currentTarget));
    setTotal(calorie({ weight, height, age, gender, activity_level, target }));
    setProfiles({ gender, age, weight, height, target, activityLevel: activity_level });
  }

  useEffect(() => {
    if (user) {
      setTotal(calorie(profiles));
      setSlide(true)
    }
  },[]);

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 relative">
        <div className="text-center md:mt-20 mx-auto py-8">
          <h2 className="font-bold text-4xl md:text-5xl">KALKULATOR<br/><span className="text-emerald-400">KALORI</span></h2>
          <p className="max-w-md text-gray-600 mt-2 text-base">Hitung kalori optimal untuk tubuh Anda, masukkan usia, berat badan, tinggi badan, jenis kelamin, dan tingkat aktivitas Anda</p>
        </div>
        <form className={`bg-emerald-50 z-10 p-6 md:p-8 rounded-2xl flex flex-col md:w-1/2 md:absolute ${slide ? 'md:translate-x-0' : 'md:translate-x-full'} duration-700`} onSubmit={(ev) => {
          setSlide(true)
          handleSubmit(ev)
        }}>
          <h2 className="font-medium text-xl mb-2">Parameter</h2>
          <div className="flex mb-2 gap-x-2">
            <input type="radio" name="gender" id="male" value="male" className="hidden peer/male" defaultChecked={profiles.gender === 'male' ? true : false} />
            <label htmlFor="male" className="w-full p-3 border border-emerald-400 md:p-3.5 font-medium bg-white text-center rounded-lg cursor-pointer hover:bg-emerald-200 peer-checked/male:bg-emerald-400">Laki-Laki</label>
            <input type="radio" name="gender" id="female" value="female" className="hidden peer/female" defaultChecked={profiles.gender === 'female' ? true : false} />
            <label htmlFor="female" className="w-full p-3 border border-emerald-400 md:p-3.5 font-medium bg-white text-center rounded-lg cursor-pointer hover:bg-emerald-200 peer-checked/female:bg-emerald-400">Perempuan</label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            <input type="number" name="age" className="p-2.5 text-sm bg-transparent rounded-lg border-2 border-emerald-400 focus:outline-none" placeholder="Umur" min={16} required defaultValue={profiles.age} />
            <input type="number" name="height" className="p-2.5 text-sm bg-transparent rounded-lg border-2 border-emerald-400 focus:outline-none" placeholder="Tinggi (cm)" min={100} required defaultValue={profiles.height} />
            <input type="number" name="weight" className="p-2.5 text-sm bg-transparent rounded-lg border-2 border-emerald-400 focus:outline-none" placeholder="Berat (kg)" min={30} required defaultValue={profiles.weight} />
          </div>

          <h2 className="font-medium text-xl">Tingkat Aktivitas</h2>
          <p className="text-gray-600 text-sm"><span className="font-medium text-gray-900">{activity.key[profiles.activityLevel - 1]}: </span>{activity.value[profiles.activityLevel-1]}</p>
          <div className="px-[10%]">
            <input type="range" name="activity_level" defaultValue={profiles.activityLevel} min={1} max={5} step={1} className="w-full h-2 accent-emerald-400 bg-gray-200 rounded-lg appearance-none cursor-pointer" onChange={(e) => {
              const value = e.currentTarget?.value
              if (value) return setProfiles(prev => ({...prev, activityLevel: value}))
            }} />
          </div>
          <div className="grid grid-cols-5 text-center text-sm mb-4">
            <span>Sangat<br />Rendah</span>
            <span className="invisible md:visible">Rendah</span>
            <span className="invisible md:visible">Sedang</span>
            <span className="invisible md:visible">Tinggi</span>
            <span>Sangat<br />Tinggi</span>
          </div>
          
          <h2 className="font-medium text-xl mb-2">Target</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-6">
            <input type="radio" name="target" id="slim" value="slim" className="hidden peer/slim" defaultChecked={profiles.target === 'slim' ? true : false} />
            <label htmlFor="slim" className="p-3 border border-emerald-400 font-medium bg-white text-center rounded-lg cursor-pointer hover:bg-emerald-200 peer-checked/slim:bg-emerald-400">Kurangi</label>
            
            <input type="radio" name="target" id="maintain" value="maintain" className="hidden peer/maintain" defaultChecked={profiles.target === 'maintain' ? true : false} />
            <label htmlFor="maintain" className="p-3 border border-emerald-400 font-medium bg-white text-center rounded-lg cursor-pointer hover:bg-emerald-200 peer-checked/maintain:bg-emerald-400">Menjaga</label>
            
            <input type="radio" name="target" id="mass" value="mass" className="hidden peer/mass" defaultChecked={profiles.target === 'mass' ? true : false} />
            <label htmlFor="mass" className="p-3 border border-emerald-400 font-medium bg-white text-center rounded-lg cursor-pointer hover:bg-emerald-200 peer-checked/mass:bg-emerald-400">Tambah</label>
          </div>

          <button type="submit" className="p-3 w-1/2 font-medium text-center rounded-lg bg-emerald-400 hover:bg-emerald-500 mr-0 ml-auto">Hitung</button>
        </form>
        <div className={`p-6 ${slide ? '' : 'hidden'}`}>
          <h2 className="font-medium text-2xl">Hasil Perhitungan</h2>
          <h3 className="font-bold text-5xl">{slide ? <Counter num={total}/> : 0} kkal</h3>
          

          <h4 className="font-medium text-xl">Porsi Harian</h4>
          <p className="text-gray-600">Porsi harian untuk {profiles.target === 'slim' ? 'mengurangi' : profiles.target === 'maintain' ? 'menjaga' : 'menambah'} berat badan</p>
          <div className="my-2 flex gap-x-2">
            <div className="grid grid-cols-2 text-sm">
              <div className="flex gap-2">
                <span className="h-5 w-5 bg-emerald-500"></span>
                <p>Protein</p>
              </div>
              <p className="text-right">{Math.round(protein)} gram</p>
              
              <div className="flex gap-2">
                <span className="h-5 w-5 bg-emerald-300"></span>
                <p>Lemak</p>
              </div>
              <p className="text-right">{Math.round(fat)} gram</p>
              
              <div className="flex gap-2">
                <span className="h-5 w-5 bg-emerald-100"></span>
                <p>Karbohidrat</p>
              </div>
              <p className="text-right">{Math.round(carbs)} gram</p>
            </div>
            {slide ? <Chart n={total} /> : ''}
          </div>

          <h4 className="font-medium text-xl">Nilai BMI</h4>
          <p className="text-gray-600">Nilai BMI Anda termasuk ke kategori {bmi < 18.5 ? 'kurang' : bmi < 25 ? 'normal' : bmi < 30 ? 'lebih' : 'obesitas'}</p>
          <div className="my-2 flex gap-3">
            <div className="grid grid-cols-2 text-sm gap-x-8">
              <div className="flex gap-2">
                <span className="h-5 w-5 bg-yellow-500"></span>
                <p>Kurang</p>
              </div>
              <p className="text-right">&lt; 18.5</p>
              
              <div className="flex gap-2">
                <span className="h-5 w-5 bg-blue-500"></span>
                <p>Normal</p>
              </div>
              <p className="text-right">18.5 - 24.9</p>

              <div className="flex gap-2">
                <span className="h-5 w-5 bg-orange-500"></span>
                <p>Lebih</p>
              </div>
              <p className="text-right">25 - 29.9</p>

              <div className="flex gap-2">
                <span className="h-5 w-5 bg-red-500"></span>
                <p>Obesitas</p>
              </div>
              <p className="text-right">&gt; 30</p>
            </div>
            { slide ? <ChartBMI bmi={bmi} /> : ''}
          </div>
        </div>
      </section>
  )
}

export default Calculator;