import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
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
