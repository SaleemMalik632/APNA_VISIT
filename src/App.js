import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App()
{
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/*' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}


export default App;
