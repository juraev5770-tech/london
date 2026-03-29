import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const News = () => {
    const [news, setNews] = useState([]);
    const manzil = "http://london.loc/backend/news  ";

    useEffect(() => {
        axios.get(manzil)
            .then(res => setNews(res.data))
            .catch(err => console.log("News xatosi:", err));
    }, []);

    return (
        <section className="bg-[#0C0C0C] py-24 px-6 md:px-24">
            <div className="container mx-auto">
                
                {/* Sarlavha qismi */}
                <div className="text-center mb-16 space-y-3">
                    <h4 className="text-yellow-500 font-medium tracking-[0.3em] uppercase italic text-sm">
                        Blogs
                    </h4>
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                        Geri̇cht Updates
                    </h2>
                </div>

                {/* Yangiliklar Gridi */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {news && news.map((item, index) => (
                        <div key={index} className="group cursor-pointer flex flex-col">
                            
                            {/* Yangilik rasmi (Bazadagi 'image') */}
                            <div className="relative overflow-hidden rounded-sm mb-8 aspect-[16/10]">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Sana (Bazadagi 'date') */}
                            <div className="flex items-center gap-4 mb-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
                                <span>{item.date}</span>
                                <span className="w-10 h-[1px] bg-yellow-500/50"></span>
                                <span>Admin</span>
                            </div>

                            {/* Sarlavha (Bazadagi 'name') */}
                            <h3 className="text-white text-2xl font-bold mb-4 leading-tight group-hover:text-yellow-500 transition-colors h-16 line-clamp-2">
                                {item.name}
                            </h3>

                            {/* Qisqa matn (Bazadagi 'description') */}
                            <p className="text-gray-400 leading-relaxed mb-8 line-clamp-3 text-sm">
                                {item.description}
                            </p>

                            {/* Read More linki */}
                            <Link to={`/news/${item.id}`} className="mt-auto text-yellow-500 font-bold text-xs uppercase tracking-[0.3em] hover:text-white transition-colors inline-block border-b border-yellow-500/30 pb-1 w-fit">
                                Read More
                            </Link>
                            
                        </div>
                    ))}
                </div>

                {/* View More tugmasi */}
                <div className="text-center mt-20">
                    <button className="border border-yellow-500 text-yellow-500 px-10 py-3 rounded-sm font-bold hover:bg-yellow-500 hover:text-black transition-all uppercase text-xs tracking-widest">
                        View More
                    </button>
                </div>

            </div>
        </section>
    );
};

export default News;