import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-[#0C0C0C] py-24 px-6 md:px-24">
      
      <div className="max-w-[1000px] mx-auto text-center space-y-12">
        
       
        <div className="space-y-4">
          <h4 className="text-yellow-500 font-medium tracking-[0.4em] uppercase italic text-sm">
            History
          </h4>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase italic">
            About Us
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full opacity-30"></div>
        </div>


        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic">
            "Bizning hikoyamiz an'anaviy turk lazzatlarini zamonaviy uslubda taqdim etishdan boshlangan. Har bir taomimizda sharqning mehmondo'stligi va eng sifatli masalliqlarning uyg'unligini his qilasiz."
          </p>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Rasm qismi (Figma'dagidek katta va effektli) */}
        <div className="relative group pt-10">
          {/* Rasm ortidagi bezak ramka */}
          <div className="absolute -inset-4 border border-yellow-500/10 rounded-[40px] -z-10 group-hover:border-yellow-500/30 transition-all duration-700"></div>
          
          <div className="overflow-hidden rounded-[35px] shadow-2xl border-4 border-[#161616]">
            <img 
              src="https://static.wixstatic.com/media/e49f4b_a0f726b0f3cc4407b0b0bee6f05e53bf~mv2.jpg/v1/fill/w_640,h_640,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e49f4b_a0f726b0f3cc4407b0b0bee6f05e53bf~mv2.jpg" // SHU YERGA restoran rasmini qo'ying
              alt="Eaturkish Restaurant" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
          </div>
          
          {/* Rasm ustidagi kichik yozuv (Bezak uchun) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-xs uppercase tracking-[0.3em] font-bold">Eat Turkish • London</p>
          </div>
        </div>

        {/* Pastki tugma */}
        <div className="pt-8">
          <button className="border-2 border-yellow-500 text-yellow-500 px-12 py-4 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-all duration-500 uppercase tracking-widest text-xs">
            Read Our Full Story
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;