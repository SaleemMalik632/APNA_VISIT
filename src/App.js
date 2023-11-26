import './App.css';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import About from './components/About/About'
import Packages from './components/Packages/Packages';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Admin from './Admin/Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/*' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/packages' element={<Packages />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
