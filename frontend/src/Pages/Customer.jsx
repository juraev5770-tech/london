import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimony = () => {
    const [customers, setCustomers] = useState([]);
    const manzil = "http://london.loc/backend/customer"; // Sizning backend manzilingiz

    useEffect(() => {
        axios.get(manzil)
            .then(res => {
                setCustomers(res.data);
            })
            .catch(err => console.log("Testimony xatosi:", err));
    }, []);

    return (
        <section className="bg-[#0C0C0C] py-24 px-6 md:px-24">
            <div className="container mx-auto">
                
                {/* Sarlavha qismi */}
                <div className="text-center mb-16 space-y-4">
                    <h4 className="text-yellow-500 font-medium tracking-[0.3em] uppercase italic">
                        Testimony
                    </h4>
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                        Happy Customers
                    </h2>
                </div>

                {/* Mijozlar fikrlari - Grid (3 talik qator) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {customers && customers.map((item, index) => (
                        <div key={index} className="group bg-[#161616] p-10 rounded-[35px] border border-white/5 hover:border-yellow-500/30 transition-all duration-500 relative flex flex-col justify-between">
                            
                            {/* Qo'shtirnoq belgisi (Bezak uchun) */}
                            <div className="absolute top-8 right-10 text-7xl text-yellow-500/10 font-serif group-hover:text-yellow-500/20 transition-colors">
                                "
                            </div>

                            {/* Mijozning fikri (Bazadagi 'description' ustuni) */}
                            <p className="text-gray-300 text-lg leading-relaxed italic mb-10 relative z-10">
                                "{item.description}"
                            </p>

                            <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                                {/* Mijoz rasmi (Bazangizda rasm yo'qligi uchun placeholder qo'ydim) */}
                                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-500 to-red-600 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-[#161616] flex items-center justify-center text-white font-bold">
                                        {item.name.charAt(0)}
                                    </div>
                                </div>
                                
                                <div>
                                    {/* Mijoz ismi (Bazadagi 'name' ustuni) */}
                                    <h5 className="text-white font-bold text-xl group-hover:text-yellow-500 transition-colors">
                                        {item.name}
                                    </h5>
                                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                                        Customer
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Yuklanish holati */}
                {customers.length === 0 && (
                    <div className="text-center text-gray-500 py-10 italic">
                        Mijozlar fikrlari yuklanmoqda...
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimony;