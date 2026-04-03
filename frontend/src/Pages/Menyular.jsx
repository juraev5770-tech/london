import React, { useEffect, useState } from 'react';
import axios from "axios";

const Menyular = () => {
    const [menyular, setMenyular] = useState([]);
    const manzil = "http://london.loc/backend/menyular";

    useEffect(() => {
        axios.get(manzil)
            .then(res => setMenyular(res.data))
            .catch(err => console.log("Menyu xatosi:", err));
    }, []);
return (
  <section className="bg-[#0C0C0C] pb-24 px-6 md:px-24">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {menyular && menyular.map((item, index) => (
          <div key={index} className="group bg-[#161616] border border-white/5 rounded-3xl p-5 hover:bg-[#1c1c1c] transition-all duration-500 shadow-xl flex flex-col items-center">
            
          
            <div className="w-full h-56 relative mb-6 overflow-hidden rounded-2xl bg-[#0f0f0f] flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.description} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            
              <div className="absolute top-3 right-3 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                ${item.price}
              </div>
            </div>

           
            <div className="text-center w-full space-y-3">
              <h3 className="text-white text-lg font-bold leading-snug h-14 line-clamp-2 group-hover:text-yellow-500 transition-colors">
                {item.description}
              </h3>
              
    
              <div className="flex justify-center text-yellow-500 text-xs gap-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span className="opacity-30">★</span>
              </div>

              <button className="w-full mt-4 py-2.5 bg-transparent border border-white/10 text-white rounded-xl hover:bg-white hover:text-black font-semibold transition-all text-sm uppercase tracking-wider">
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Menyular;