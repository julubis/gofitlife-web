import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";

import Index from "./pages/index";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Dashboard from './pages/admin/Dashboard';
const Home = lazy(() => import('./pages/home'));
const Recipe = lazy(() => import('./pages/recipe'));
const Food = lazy(() => import('./pages/food'));
const News = lazy(() => import('./pages/news'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const NotFound = lazy(() => import('./pages/404'));
const Profile = lazy(() => import('./pages/profile'));
const Welcome = lazy(() => import('./pages/welcome'))

function App() {
  const user = useSelector(state => state.auth.user);

  return (
    <BrowserRouter>
      {/* <Navbar user={user} /> */}
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/welcome' element={<Suspense><Welcome /></Suspense>}/>
        <Route path='/login' element={<Suspense><Login /></Suspense>}/>
        <Route path='/register' element={<Suspense><Register /></Suspense>}/>
        <Route path='/home' element={<Suspense><Home /></Suspense>}/>
        <Route path='/recipe' element={<Suspense><Recipe /></Suspense>}/>
        <Route path='/food' element={<Suspense><Food /></Suspense>}/>
        <Route path='/news' element={<Suspense><News /></Suspense>}/>
        <Route path='/profile' element={<Suspense><Profile /></Suspense>}/>

        <Route path="/admin" element={<Dashboard />}/>
        <Route path='*' element={<Suspense><NotFound /></Suspense>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
