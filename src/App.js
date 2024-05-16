import './App.css';
import { useEffect } from 'react';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Invoice from './Component/Invoice';
import Navbar from './Component/Navbar';
import Certificate from './Component/Certificate';
import Footer from './Component/Footer';
import Aos from 'aos';
function App() {
  useEffect(() => {
    // Update the document title using the browser API
    Aos.init();
  });
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
      <Route path='/invoice' element={<Invoice/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
