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
import Menyular from './Pages/Menyular';
import Customer from './Pages/Customer';
import VideoSection from './Pages/VideoSection';
import PhotoGallery from './Pages/PhotoGallery';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {/* 
         ASOSIY O'ZGARISH: 
         - mx-auto: Saytni har doim qoq markazda ushlaydi.
         - overflow-x-hidden: Elementlar chetdan chiqib ketishini to'xtatadi.
      */}
      <div className="max-w-[1400px] mx-auto min-h-screen bg-[#0C0C0C] border-[5px] border-white/5 mt-[30px] overflow-x-hidden shadow-2xl">
        
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              {/* Har bir komponent o'z ichida ham cheklovga ega bo'lishi kerak */}
              <Home />
              <Blok2 />
              <Tugmalar />
              <Menyular />
              <Customer />
              <News />
              <VideoSection />
              <PhotoGallery />
            </>
          } />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/news" element={<News />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;