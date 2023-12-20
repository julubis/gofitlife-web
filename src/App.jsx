import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";

import Index from "./pages/index";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from './components/footer';
import Dashboard from './pages/admin/Dashboard';
import ScrollToTop from './components/ScrollToTop';
const Home = lazy(() => import('./pages/home'));
const Recipe = lazy(() => import('./pages/recipe'));
const RecipeDetail = lazy(() => import('./pages/recipeDetail'))
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
      <ScrollToTop/>
      {user?.role === 'admin' ? <Sidebar/> : <Navbar user={user} />}
      <Routes>
        <Route path='/' element={user?.role === 'admin' ? <Dashboard/> : <Index/>} />
        <Route path='/welcome' element={<Suspense  fallback={<main className='flex min-h-screen'></main>}><Welcome /></Suspense>} />
        <Route path='/login' element={<Suspense fallback={<main className='flex min-h-screen'></main>}><Login /></Suspense>} />
        <Route path='/register' element={<Suspense fallback={<main className='flex min-h-screen'></main>}><Register /></Suspense>} />
        <Route path='/home' element={<Suspense fallback={<div className='container px-4 mt-20 min-h-screen'></div>}><Home /></Suspense>} />
        <Route path='/recipe' element={<Suspense fallback={<div className='container px-4 mt-20 min-h-screen'></div>}><Recipe /></Suspense>}/>
        <Route path='/recipe/:id' element={<Suspense fallback={<div className='container px-4 mt-20 min-h-screen'></div>}><RecipeDetail /></Suspense>} />
        <Route path='/food' element={<Suspense><Food /></Suspense>} />
        <Route path='/news' element={<Suspense fallback={<div className='container px-4 mt-20 min-h-screen'></div>}><News /></Suspense>} />
        <Route path='/profile' element={<Suspense><Profile /></Suspense>} />
        <Route path='*' element={<Suspense><NotFound /></Suspense>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
