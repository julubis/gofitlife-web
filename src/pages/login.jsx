import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../data/auth";
import ilustration from "../assets/ilustration-0.svg"

function Login() {
  const dispacth = useDispatch()
  const [loading, setLoading] = useState(false)
  const { name } = useSelector(state => state.auth.user);
  if (name) return <Navigate to="/"/>
  
  const submit = async(e) => {
    setLoading(true);

    try {
      e.preventDefault();
      const { email, password } = Object.fromEntries(new FormData(e.currentTarget));
      const response = await fetch('https://prw8fl-5000.csb.app/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
          "content-type": "application/json"
        }
      })
      const responseJson = await response.json()
      if (!response.ok) throw response
      dispacth(setToken(responseJson.data.token))
    } catch(e) {
      if (e.status < 500) return alert('email atau password salah')
      alert(JSON.stringify(e))
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen">
      <section className="hidden w-full min-h-screen pt-28 px-4 bg-emerald-50 md:flex">
        <img src={ilustration} alt="" className="w-3/5 mx-auto"/>
      </section>
      <section className="w-full min-h-screen pt-28 px-4 bg-emerald-50 md:bg-white">
        <form className="bg-white text-center my-auto shadow border border-gray-200 rounded-2xl w-full max-w-sm p-8 mx-auto" onSubmit={(e) => submit(e)}>
          <h2 className="text-medium text-lg">Selamat Datang</h2>
          <p className="text-normal text-sm text-gray-500 mb-8">Silahkan isi data diri Anda</p>
          <div className="flex flex-col text-start mb-2">
            <label htmlFor="email-input" className="text-medium text-sm">Email</label>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-5 h-5 absolute -translate-y-1/2 top-1/2 ml-3"><path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"/></svg>
              <input type="email" name="email" id="email-input" className="p-2.5 w-full bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white pl-9" disabled={loading} required/>
            </div>
            
          </div>
          <div className="flex flex-col text-start mb-2">
            <label htmlFor="password-input" className="text-medium text-sm">Kata Sandi</label>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 absolute -translate-y-1/2 top-1/2 ml-3"><path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"/><path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"/></svg>
              <input type="password" name="password" id="password-input" className="p-2.5 w-full bg-emerald-50 rounded-lg text-sm border-2 border-emerald-300 hover:bg-white hover:border-emerald-400 focus:outline-none focus:bg-white pl-9" minLength={8} maxLength={15} disabled={loading} required/>
            </div>
          </div>
          <div className="flex items-center text-start">
            <input type="checkbox" value="" id="remember" className="w-4 h-4 text-emerald-400 bg-gray-100 border-gray-300 rounded focus:ring-emerald-400 accent-emerald-400" disabled={loading}/>
            <label htmlFor="remember" className="ms-1 text-sm">Ingatkan saya</label>
          </div>
          <button type="submit" className="btn btn-primary w-full mt-16 mb-2" disabled={loading}>{loading ? 'Memuat...' : 'Masuk'}</button>
          <p className="text-normal text-sm">Belum punya akun? <Link to="/register" className="text-emerald-500 hover:text-emerald-600">Daftar</Link></p>
        </form>
      </section>
    </main>
  );
}

export default Login;