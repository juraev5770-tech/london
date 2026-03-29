import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import News from './Pages/News';
import Blok2 from './Pages/Blok2';
import Tugmalar from './Pages/Tugmalar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menyular from './Pages/Menyular';
import Customer from './Pages/Customer';



const App = () => {
  return (
    <BrowserRouter>
      {/* Dizayndagi tashqi ramka (border) */}
      <div className="max-w-[1400px] border-[5px] m-auto mt-[30px] border-white/5 bg-[#0C0C0C]">
        
        {/* Navbar barcha sahifalarning tepasida turadi */}
        <Navbar />

        <Routes>
          {/* ASOSIY SAHIFA (/) - Bu yerda bloklar ketma-ket chiqadi */}
          <Route path="/" element={
            <>
              <Home />      {/* Hero Section: The Key to Fine Dining */}
              <Blok2 />     {/* Popular Dishes: Our Special Menu */}
              <Tugmalar />  {/* Menu Pack: Our Regular Menu Pack */}
              <Menyular />  {/* Menu Pack: Our Regular Menu Pack */}
              <Customer />  {/* Menu Pack: Our Regular Menu Pack */}
              <News />  {/* Menu Pack: Our Regular Menu Pack */}



            </>
          } />

          {/* Boshqa alohida sahifalar */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/news" element={<News />} />
          
          {/* Agar bu bloklarni alohida sahifa sifatida ham ko'rmoqchi bo'lsangiz */}
          <Route path="/blok2" element={<Blok2 />} />
          <Route path="/tugmalar" element={<Tugmalar />} />
          <Route path="/menyular" element={<Menyular />} />
          <Route path="/customer" element={<Customer />} />




        </Routes>

        {/* Footer barcha sahifalarning pastida turadi */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;