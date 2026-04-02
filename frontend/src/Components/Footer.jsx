import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] pt-32 pb-12 px-6 md:px-24 relative overflow-hidden">
      
      {/* 1. NEWSLETTER QISMI (Qora fonda, Tilla hoshiya bilan) */}
      <div className="max-w-[1100px] mx-auto bg-[#0C0C0C] border border-yellow-500/20 rounded-[40px] p-10 md:p-16 text-center space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 mb-20">
        
        {/* Bezak uchun orqa fondagi xira tillarang nur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px] -z-10"></div>

        <div className="space-y-3">
          <h4 className="text-yellow-500 font-medium tracking-[0.4em] uppercase italic text-sm">
            Newsletter
          </h4>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light">
            And never miss latest Updates!
          </p>
        </div>

        {/* Email Input va Tugma */}
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto pt-6">
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="flex-1 bg-transparent border border-white/10 rounded-full px-8 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 transition-all duration-300"
          />
          <button className="bg-yellow-500 text-black px-12 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm shadow-lg transform active:scale-95">
            Subscribe
          </button>
        </div>
      </div>

      {/* 2. ASOSIY FOOTER MA'LUMOTLARI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-16">
        
        {/* Contact Us */}
        <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
          <h3 className="text-white text-2xl font-bold uppercase italic tracking-widest border-b border-yellow-500/30 pb-2">Contact Us</h3>
          <div className="text-gray-500 space-y-3 text-sm leading-relaxed">
            <p className="hover:text-white transition-colors cursor-default">9 W 53rd St, London, NY 10019, UK</p>
            <p className="hover:text-yellow-500 transition-colors cursor-pointer">+1 212-344-1230</p>
            <p className="hover:text-yellow-500 transition-colors cursor-pointer">+1 212-555-1230</p>
          </div>
        </div>

        {/* LOGOTIP va Ijtimoiy tarmoqlar */}
        <div className="flex flex-col items-center justify-center space-y-8 order-first md:order-none">
          <div className="text-center">
            <h1 className="text-white text-5xl md:text-6xl font-bold tracking-[0.2em] uppercase italic mb-6">
               EATURKISH
            </h1>
            <p className="text-gray-500 text-sm max-w-xs italic leading-relaxed mx-auto">
              "The best way to find yourself is to lose yourself in the service of others."
            </p>
          </div>
          {/* Ijtimoiy tarmoqlar */}
          <div className="flex gap-8 text-white text-xl">
             <span className="hover:text-yellow-500 cursor-pointer transition-all hover:-translate-y-1">f</span>
             <span className="hover:text-yellow-500 cursor-pointer transition-all hover:-translate-y-1">t</span>
             <span className="hover:text-yellow-500 cursor-pointer transition-all hover:-translate-y-1">ig</span>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col items-center md:items-end space-y-6 text-center md:text-right">
          <h3 className="text-white text-2xl font-bold uppercase italic tracking-widest border-b border-yellow-500/30 pb-2">Working Hours</h3>
          <div className="text-gray-500 space-y-5 text-sm leading-relaxed">
            <div>
              <p className="text-yellow-500/80 font-bold mb-1 uppercase tracking-tighter">Monday - Friday:</p>
              <p>08:00 am - 12:00 am</p>
            </div>
            <div>
              <p className="text-yellow-500/80 font-bold mb-1 uppercase tracking-tighter">Saturday - Sunday:</p>
              <p>07:00 am - 11:00 pm</p>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Copyright */}
      <div className="text-center pt-10 border-t border-white/5 opacity-30">
        <p className="text-gray-400 text-[10px] uppercase tracking-[0.5em]">
           © 2026 EATURKISH. Crafted with passion.
        </p>
      </div>

    </footer>
  );
};

export default Footer;