import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuSection = () => {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState(1);

  useEffect(() => {
    axios.get("http://london.loc/backend/tugmalar")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get("http://london.loc/backend/tugmalar")
      .then(res => setMenuItems(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="bg-[#0C0C0C] py-24 px-6 md:px-24 border-t border-white/5">
      <div className="container mx-auto max-w-[1200px]">
        
        {/* Sarlavha Qismi */}
        <div className="text-center mb-20 space-y-3">
          <h4 className="text-yellow-500 font-medium tracking-[0.4em] uppercase italic text-sm">
            Menu Pack
          </h4>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase italic">
            Our Regular Menu
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* CHAP TOMON: Vertikal Kategoriya (Dark Sidebar) */}
          <div className="w-full md:w-1/4 sticky top-24">
            <div className="bg-[#161616] border border-white/5 rounded-[35px] p-8 shadow-2xl">
              <h3 className="text-yellow-500 text-lg font-bold mb-8 uppercase tracking-widest italic border-b border-white/10 pb-4">
                Categories
              </h3>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li 
                    key={cat.id}
                    onClick={() => setActiveCat(cat.id)}
                    className={`cursor-pointer py-3 px-5 rounded-2xl transition-all duration-300 font-bold text-sm uppercase tracking-widest ${
                      activeCat === cat.id 
                      ? "bg-yellow-500 text-black shadow-[0_10px_20px_rgba(234,179,8,0.2)] scale-105" 
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {cat.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* O'NG TOMON: Taomlar Gridi (Dark Cards) */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20">
              {menuItems
                .filter(item => item.cat_id === activeCat)
                .map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center group animate-fade-in">
                  
                  {/* Taom rasmi - Soya bilan */}
                  <div className="relative w-full aspect-square mb-8 overflow-hidden flex items-center justify-center">
                    <div className="absolute w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-all"></div>
                    <img 
                      src={item.image} 
                      alt={item.description} 
                      className="relative z-10 w-[85%] h-auto object-contain group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                  
                  {/* Taom nomi */}
                  <h4 className="text-white text-xl font-bold mb-3 group-hover:text-yellow-500 transition-colors tracking-tight h-14">
                    {item.description}
                  </h4>
                  
                  {/* Narxi */}
                  <p className="text-yellow-500 font-extrabold text-3xl tracking-tighter">
                    ${item.price}
                  </p>
                  
                  <div className="w-12 h-[2px] bg-yellow-500/20 mt-6 group-hover:w-24 transition-all duration-500"></div>
                </div>
              ))}
            </div>
{/* Bo'sh holat */}
            {menuItems.filter(item => item.cat_id === activeCat).length === 0 && (
              <div className="h-96 flex flex-col items-center justify-center space-y-4">
                <div className="text-6xl opacity-20">🍽️</div>
                <p className="text-gray-600 italic tracking-widest">Hali bu bo'limga taom qo'shilmagan...</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MenuSection;