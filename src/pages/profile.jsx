import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import male from "../assets/male.png";
import female from "../assets/female.png";

function Profile() {
  const user = useSelector(state => state.auth.user);
  const dispacth = useDispatch();
  const formatBirth = new Date(user.birthday);
  const [image, setImage] = useState(user.photo ? `https://prw8fl-5000.csb.app/api/images/${user.photo}` : user.gender === 'female' ? female : male);

  return (
    <main className="bg-emerald-50">
      <div className="container px-4 mt-20 py-4">
        <h1 className="text-2xl font-semibold">Halo, { user.name }</h1>
        <p className="text-gray-600">Selamat datang di situs web GoFitLife. Kami siap membantu Anda dengan pola makan dan gaya hidup sehat.</p>

        <form className="flex flex-col-reverse md:flex-row gap-8 mt-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Setelan Akun</h2>
            <section className="bg-white py-4 px-8 mb-4 rounded-lg w-full">
              <h3 className="text-xl font-medium">Informasi Pribadi</h3>
              <p className="text-gray-600 mb-4">Anda dapat menambahkan informasi baru tentang diri Anda atau mengedit informasi pribadi yang ada.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div className="flex flex-col mb-2">
                  <label htmlFor="name" className="font-medium">Nama</label>
                  <input type="text" name="name" id="name" className="p-2.5 bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white" defaultValue={user.name} required/>
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="email" className="font-medium">Email</label>
                  <input type="email" name="email" id="email" className="p-2.5 bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 opacity-75" value={user.email} disabled/>
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="weight" className="font-medium">Berat badan (kg)</label>
                  <input type="number" name="weight" id="weight" className="p-2.5 bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white" defaultValue={user.weight} required/>
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="height" className="font-medium">Tinggi badan (cm)</label>
                  <input type="number" name="height" id="height" className="p-2.5 bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white" defaultValue={user.height} required/>
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="birthday" className="font-medium">Tanggal lahir</label>
                  <input type="date" name="birthday" id="birthday" className="p-2.5 bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white" defaultValue={`${formatBirth.getFullYear()}-${('0' + formatBirth.getMonth() + 1).slice(-2)}-${('0' + formatBirth.getDate()).slice(-2)}`} required/>
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="gender" className="font-medium">Jenis kelamin</label>
                  <select name="gender" id="gender" className="p-2.5 bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white" defaultValue={user.gender} required>
                    <option value="male">Laki-Laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                </div>
                <div className="flex flex-col mb-2">
                  <label htmlFor="activity_level" className="font-medium">Tingkat aktivitas</label>
                  <select name="activity_level" id="activity_level" className="p-2.5 bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white" defaultValue={user.activity_level} required>
                    <option value={1}>Sangat rendah</option>
                    <option value={2}>Rendah</option>
                    <option value={3}>Sedang</option>
                    <option value={4}>Tinggi</option>
                    <option value={5}>Sangat tinggi</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button type="submit" className="px-5 py-2.5 mt-2 bg-emerald-400 rounded-lg text-sm font-medium w-full max-w-xs">Simpan</button>
              </div>
            </section>
          </div>
          <div className="w-full max-w-md">
            <div className="mx-auto w-fit">
              <h2 className="text-2xl font-semibold text-center mb-2">Foto Profil</h2>
              <section className="bg-white p-2 rounded-lg flex flex-col gap-2">
                <img src={image} alt="" className="w-56 h-56 rounded-lg mx-auto"/>
                <input type="file" id="photo-profile" name="image" accept="image/*" className="hidden" onChange={(e) => {
                  const [file] = e.currentTarget.files;
                  if (file) setImage(URL.createObjectURL(file));
                }}/>
                <label htmlFor="photo-profile" className="px-5 py-2.5 text-center bg-emerald-400 hover:bg-emerald-500 rounded-lg w-full font-medium">Ganti Foto</label>
              </section>
            </div>
          </div>
        </form>
        <section className="bg-white py-4 px-8 mb-4 rounded-lg w-full md:w-[calc(100%-30rem)]">
          <h3 className="text-xl font-medium">Setelan Kata Sandi</h3>
          <p className="text-gray-600 mb-4">Anda dapat mengubah kata sandi.</p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <div className="flex flex-col mb-2">
                <label htmlFor="password" className="font-medium">Kata sandi lama</label>
                <input type="password" name="birthday" id="birthday" className="p-2.5 bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white" required/>
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="password" className="font-medium">Kata sandi baru</label>
                <input type="password" name="birthday" id="birthday" className="p-2.5 bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white" required/>
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="password" className="font-medium">Konfirmasi kata sandi baru</label>
                <input type="password" name="birthday" id="birthday" className="p-2.5 bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white" required/>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button type="submit" className="px-5 py-2.5 mt-2 bg-emerald-400 rounded-lg text-sm font-medium w-full max-w-xs">Simpan</button>
            </div>
          </form>
          
        </section>
        
      
      </div>
      
    </main>
  );
}

export default Profile;