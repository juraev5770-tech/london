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
  /* 1. min-h-screen o'rniga aniq balandlik beramiz, shunda zoomda osmon bo'lib ketmaydi */
  <section className="w-full bg-[#0C0C0C] min-h-[700px] flex items-center justify-center py-20 overflow-hidden">
    
    {/* 
       2. ENG MUHIMI: max-w-[1200px] va justify-center. 
       Bu matn va rasmni har doim bir-biriga yaqin ushlaydi.
    */}
    <div className="w-full max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32">
      
      {home && home.map((item, index) => (
        <React.Fragment key={index}>
          
          {/* Chap tomon: Matn (Kengligi md:w-[450px] qilib qat'iy belgilandi) */}
          <div className="w-full md:w-[450px] space-y-6 text-left shrink-0">
            <h4 className="text-yellow-500 font-medium tracking-[0.3em] uppercase italic text-sm">
              {item.little_title || "Chase The New Flavour"}
            </h4>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1]">
              {item.title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              {item.info}
            </p>
            <div className="pt-4">
              <button className="border-2 border-white text-white px-10 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all">
                {item.button_text || "Explore Menu"}
              </button>
            </div>
          </div>

          {/* O'ng tomon: Rasm (Kengligi md:w-[500px] qilib qat'iy belgilandi) */}
          <div className="w-full md:w-[500px] flex justify-center items-center relative shrink-0">
            {/* Orqa fondagi effekt */}
            <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full -z-10"></div>
            
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
            />
          </div>

        </React.Fragment>
      ))}
      
    </div>
  </section>
);
}

export default Home
