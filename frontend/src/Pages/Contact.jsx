import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#0C0C0C] py-24 px-6 md:px-24 min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Sarlavha */}
        <div className="text-center mb-20 space-y-4">
          <h4 className="text-yellow-500 font-medium tracking-[0.4em] uppercase italic text-sm">
            Contact
          </h4>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase italic">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* CHAP TOMON: Aloqa ma'lumotlari (Dark Style) */}
          <div className="space-y-12">
            <div className="space-y-10">
              {/* Phone */}
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-[#161616] border border-yellow-500/20 rounded-2xl flex items-center justify-center text-yellow-500 text-2xl group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                  📞
                </div>
                <div>
                  <p className="text-yellow-500/60 text-xs uppercase font-bold tracking-[0.2em] mb-1">Phone Number</p>
                  <p className="text-white font-bold text-xl">+1 212-344-1230</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-[#161616] border border-yellow-500/20 rounded-2xl flex items-center justify-center text-yellow-500 text-2xl group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                  ✉️
                </div>
                <div>
                  <p className="text-yellow-500/60 text-xs uppercase font-bold tracking-[0.2em] mb-1">Email Address</p>
                  <p className="text-white font-bold text-xl">info@eaturkish.com</p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-[#161616] border border-yellow-500/20 rounded-2xl flex items-center justify-center text-yellow-500 text-2xl group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                  🌐
                </div>
                <div>
                  <p className="text-yellow-500/60 text-xs uppercase font-bold tracking-[0.2em] mb-1">Follow Us</p>
                  <div className="flex gap-4 text-white font-bold">
                    <span className="hover:text-yellow-500 cursor-pointer transition-colors">Instagram</span>
                    <span className="hover:text-yellow-500 cursor-pointer transition-colors">Facebook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* O'NG TOMON: Xabar yuborish formasi (Gold Inputs) */}
          <div className="bg-[#161616] p-10 md:p-12 rounded-[45px] border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Bezak nuri */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"></div>
            
            <h3 className="text-3xl font-bold mb-8 text-white">Send Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full p-4 bg-[#0C0C0C] border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 transition-all"
/>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 bg-[#0C0C0C] border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 transition-all" 
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full p-4 bg-[#0C0C0C] border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 transition-all" 
              />
              <textarea 
                placeholder="Message" 
                rows="4" 
                className="w-full p-4 bg-[#0C0C0C] border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 transition-all"
              ></textarea>
              
              <button className="w-full bg-yellow-500 text-black py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-[0_10px_30px_rgba(234,179,8,0.2)]">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* XARITA QISMI (Dark Map) */}
        <div className="mt-28 text-center space-y-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white italic uppercase tracking-[0.3em]">Find Us By Map</h3>
          <div className="w-full h-[450px] rounded-[50px] overflow-hidden border border-white/5 shadow-2xl relative">
            <iframe 
              src="https://google.com" 
              className="w-full h-full grayscale invert-[0.9] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-1000" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;