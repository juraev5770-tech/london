import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const Home = () => {

    const [manzil, setManzil] = useState("http://london.loc/backend/header")
    const [home, setHome] = useState([])

  useEffect(() => {
    axios.get(manzil)
      .then(info => setHome(info.data))
  }, [])

  console.log(home);
return (
  /* 1. Eng tashqi qism: Bu butun ekran bo'ylab rangni (bg) beradi */
  <section className="w-full bg-[#0C0C0C] min-h-screen flex items-center overflow-hidden">
    
    {/* 2. Konteyner: Bu ma'lumotlarni o'rtada va chegaralangan kenglikda ushlab turadi */}
    <div className="max-w-[1300px] w-full mx-auto px-6 md:px-16 lg:px-24">
      
      {home && home.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Chap tomon: Matnlar qismi */}
          <div className="w-full md:w-[55%] text-white space-y-6 z-10">
            <h4 className="text-yellow-500 font-medium tracking-[0.4em] uppercase italic text-sm md:text-base">
              Chase The New Flavour
            </h4>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              {item.title}
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
              {item.info}
            </p>

            <div className="pt-8">
              <button className="border-2 border-white px-12 py-3.5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform active:scale-95 shadow-lg">
                {item.button_text}
              </button>
            </div>
          </div>

          {/* O'ng tomon: Rasm qismi */}
          <div className="w-full md:w-[45%] flex justify-center items-center relative">
            {/* Orqa fondagi bezak aura - rasm ortida turadi */}
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/5 rounded-full blur-[100px] -z-10"></div>
            
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full max-w-[450px] lg:max-w-[550px] h-auto object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.6)] hover:rotate-2 transition-transform duration-700"
            />
          </div>

        </div>
      ))}
      
    </div>
  </section>
);
}

export default Home
