import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./pages/index";
import Home from "./pages/home";
import Recipe from "./pages/recipe";
import Food from "./pages/food";
import News from "./pages/news";
import Login from './pages/login';
import Register from './pages/register'
import NotFound from "./pages/404";
import Navbar from './components/navbar';
import Profile from './pages/profile';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
