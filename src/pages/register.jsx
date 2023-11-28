import { Link } from "react-router-dom";
import ilustration from "../assets/ilustration-1.svg"

function page(num) {

}

function submit(e) {
  e.preventDefault();
  const { email, password, name } = Object.fromEntries(new FormData(e.currentTarget));
  alert(email+password+name)
}

function Register() {

  return (
    <main className="flex">
      <section className="hidden w-full min-h-screen pt-28 px-4 bg-emerald-50 md:flex">
      <img src={ilustration} alt="" className="w-3/5 mx-auto"/>
      </section>
      <section className="w-full min-h-screen pt-28 px-4">
        <form className="text-center shadow border border-gray-200 rounded-2xl w-full max-w-sm p-8 mx-auto" onSubmit={(e) => submit(e)}>
          <h2 className="text-medium text-lg">Selamat Datang</h2>
          <p className="text-normal text-sm text-gray-500 mb-8">Silahkan isi data diri Anda</p>
          <div className="flex flex-col text-start mb-2">
            <label htmlFor="name-input" className="text-medium text-sm">Nama</label>
            <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-5 h-5 absolute -translate-y-1/2 top-1/2 ml-3"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
              <input type="text" name="name" id="name-input" className="p-2.5 w-full bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white pl-9" required/>
            </div>
          </div>
          <div className="flex flex-col text-start mb-2">
            <label htmlFor="email-input" className="text-medium text-sm">Email</label>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-5 h-5 absolute -translate-y-1/2 top-1/2 ml-3"><path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"/></svg>
              <input type="email" name="email" id="email-input" className="p-2.5 w-full bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white pl-9" required/>
            </div>
          </div>
          <div className="flex flex-col text-start mb-2">
            <label htmlFor="password-input" className="text-medium text-sm">Kata Sandi</label>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 absolute -translate-y-1/2 top-1/2 ml-3"><path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"/><path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"/></svg>
              <input type="password" name="password" id="password-input" className="p-2.5 w-full bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white pl-9" minLength={8} maxLength={15} required/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full mt-16 mb-2">Daftar</button>
          <p className="text-normal text-sm">Sudah punya akun? <Link to="/login" className="text-emerald-500 hover:text-emerald-600">Masuk</Link></p>
        </form>
      </section>
    </main>
  );
}

export default Register;