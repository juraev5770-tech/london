import React from 'react';

const PhotoGallery = () => {
  // Rasmlar linklarini shu yerga o'zingiz xohlagancha qo'shishingiz mumkin
  const images = [
      "https://i.pinimg.com/1200x/5a/5c/cf/5a5ccf9819281a34f7e8ccf71f8b2a3f.jpg",
      "https://i.pinimg.com/736x/fc/0b/67/fc0b67cfe6e2030896aa795455d906ca.jpg",
    "   https://i.pinimg.com/1200x/c5/c6/5f/c5c65fb0db0b42f2f1ca173b8fd38c56.jpg",
    "https://i.pinimg.com/736x/71/a1/25/71a125bf68248fe13e1e14245c03c872.jpg",
  ];

  return (
    <section className="bg-[#0C0C0C] py-24 px-6 md:px-24 flex flex-col lg:flex-row items-center gap-16">
      
      {/* Chap tomon: Matnlar */}
      <div className="lg:w-1/3 space-y-6">
        <h4 className="text-yellow-500 font-medium tracking-[0.2em] uppercase italic text-sm">
          Instagram
        </h4>
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Photo Gallery
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-sm">
          Bizning mazali taomlarimiz va restoran hayotidan eng so'nggi lahzalarni kuzatib boring.
        </p>
        <button className="border-2 border-yellow-500 text-yellow-500 px-10 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-all uppercase text-xs tracking-widest">
          View More
        </button>
      </div>

      {/* O'ng tomon: Rasmlar (Scroll bo'ladigan qator) */}
      <div className="lg:w-2/3 w-full overflow-x-auto no-scrollbar pb-6">
        <div className="flex flex-nowrap gap-6">
          {images.map((img, index) => (
            <div key={index} className="relative min-w-[240px] md:min-w-[300px] aspect-[3/4] group cursor-pointer overflow-hidden rounded-lg">
              <img 
                src={img} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              {/* Instagram ikonkasi (Hover bo'lganda chiqadi) */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-white text-4xl">📸</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PhotoGallery;