import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./pages/index";
import Home from "./pages/home";
import Recipe from "./pages/recipe";
import Food from "./pages/food";
import News from "./pages/news";
import Login from './pages/login';
import NotFound from "./pages/404";
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
