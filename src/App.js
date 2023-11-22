import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App()
{
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/*' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}


export default App;
