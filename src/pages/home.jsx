function Home() {

  return (
    <main className="max-w-screen-xl mx-auto px-4 mt-20">
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-center m-auto py-8">
          <h2 className="font-bold text-4xl md:text-5xl">KALORI<br/><span className="text-emerald-400">KALKULATOR</span></h2>
          <p className="max-w-md text-gray-600 mt-2 text-base">Hitung kalori optimal untuk tubuh Anda, masukkan usia, berat badan, tinggi badan, jenis kelamin, dan tingkat aktivitas Anda</p>
        </div>
        <form className="bg-emerald-50 px-9 md:px-12 py-6 md:py-8 rounded-2xl flex flex-col">
          <h2 className="font-medium text-xl mb-2">Parameter</h2>
          <div className="flex mb-2 gap-x-2">
            <input type="radio" name="gender" id="male" value="male" className="hidden peer/male" defaultChecked/>
            <label htmlFor="male" className="w-full p-3 md:p-4 font-medium bg-white text-center rounded-lg cursor-pointer hover:bg-emerald-200 peer-checked/male:bg-emerald-400">Laki-Laki</label>
            <input type="radio" name="gender" id="female" value="female" className="hidden peer/female" />
            <label htmlFor="female" className="w-full p-3 md:p-4 font-medium bg-white text-center rounded-lg cursor-pointer hover:bg-emerald-200 peer-checked/female:bg-emerald-400">Perempuan</label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            <input type="number" className="py-2 px-4 text-sm bg-transparent rounded-lg border-2 border-emerald-400 focus:outline-none" placeholder="Umur" />
            <input type="number" className="py-2 px-4 text-sm bg-transparent rounded-lg border-2 border-emerald-400 focus:outline-none" placeholder="Tinggi (cm)" />
            <input type="number" className="py-2 px-4 text-sm bg-transparent rounded-lg border-2 border-emerald-400 focus:outline-none" placeholder="Berat (kg)" />
          </div>

          <h2 className="font-medium text-xl">Tingkat Aktivitas</h2>
          <p className="text-gray-600 text-sm"><span className="font-medium text-gray-900">Rendah: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, facilis.</p>
          <div className="px-[10%]">
            <input type="range" defaultValue={1} min={1} max={5} step={1} className="w-full h-2 accent-emerald-400 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
          </div>
          <div className="grid grid-cols-5 text-center text-sm mb-4">
            <span>Sangat<br />Rendah</span>
            <span>Rendah</span>
            <span>Sedang</span>
            <span>Tinggi</span>
            <span>Sangat<br />Tinggi</span>
          </div>
          
          <h2 className="font-medium text-xl mb-2">Target</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-6">
            <input type="radio" name="target" id="slim" value="slim" className="hidden peer/slim" defaultChecked/>
            <label htmlFor="slim" className="p-3 font-medium bg-white text-center rounded-lg cursor-pointer hover:bg-emerald-200 peer-checked/slim:bg-emerald-400">Laki-Laki</label>
            <input type="radio" name="target" id="maintain" value="maintain" className="hidden peer/maintain" />
            <label htmlFor="maintain" className="p-3 font-medium bg-white text-center rounded-lg cursor-pointer hover:bg-emerald-200 peer-checked/maintain:bg-emerald-400">Perempuan</label>
            <input type="radio" name="target" id="mass" value="mass" className="hidden peer/mass" />
            <label htmlFor="mass" className="p-3 font-medium bg-white text-center rounded-lg cursor-pointer hover:bg-emerald-200 peer-checked/mass:bg-emerald-400">Perempuan</label>
          </div>

          <button type="submit" className="p-3 w-1/2 font-medium text-center rounded-lg bg-emerald-400 hover:bg-emerald-500 justify-end">Hitung</button>
        </form>
      </section>
      <section></section>
    </main>
  );
}

export default Home;