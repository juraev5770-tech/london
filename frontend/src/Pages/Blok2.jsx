import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blok2 = () => {
  const [blok2, setBlok2] = useState([]);
  const manzil = "http://london.loc/backend/blok2"; 
  useEffect(() => {
    axios.get(manzil)
      .then(res => {
        setBlok2(res.data);
      })
      .catch(err => console.log("Blok2 xatosi:", err));
  }, []);

  return (
    <section className="bg-[#0C0C0C] py-20 px-6 md:px-24 text-white">
      <div className="container mx-auto">
        
  
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-yellow-500 font-medium tracking-[0.3em] uppercase italic">
            Popular Dishes
          </h4>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Our Special Menu
          </h2>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {blok2 && blok2.map((item, index) => (
            <div key={index} className="group bg-[#1A1A1A] p-6 rounded-3xl hover:bg-[#222] transition-all duration-500 transform hover:-translate-y-3 shadow-2xl">
              
             
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square flex items-center justify-center bg-[#111]">
                <img 
                  src={item.image_url} 
                  alt={item.description} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              
              <div className="flex items-center gap-1 mb-4 text-yellow-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < item.rating ? "opacity-100" : "opacity-20"}>
                    ★
                  </span>
                ))}
                <span className="text-gray-500 ml-2">({item.rating}.0)</span>
              </div>

              <h3 className="text-xl font-bold mb-4 line-clamp-2 h-14 group-hover:text-yellow-500 transition-colors">
                {item.description}
              </h3>

           
              <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-5">
                <span className="text-2xl font-extrabold text-yellow-500">
                  ${item.price}
                </span>
                <button className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all shadow-lg">
                  <span className="text-2xl font-light">+</span>
                </button>
              </div>
              
            </div>
          ))}
        </div>


        {blok2.length === 0 && (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-yellow-500 mx-auto"></div>
            <p className="mt-4 text-gray-500">Menyu yuklanmoqda...</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blok2;   