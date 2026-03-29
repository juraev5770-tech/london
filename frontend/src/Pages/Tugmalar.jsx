import React, { useEffect, useState } from 'react';
import axios from "axios";

const Tugmalar = () => {
    const [tugmalar, setTugmalar] = useState([]);
    const [activeTab, setActiveTab] = useState(1);
    const manzil = "http://london.loc/backend/tugmalar";

    useEffect(() => {
        axios.get(manzil)
            .then(res => {
                setTugmalar(res.data);
            })
            .catch(err => console.log("Tugmalar xatosi:", err));
    }, []);

   return (
    <section className="bg-[#0C0C0C] pt-20 pb-10 text-white">
        <div className="container mx-auto px-6">
            

            <div className="text-center mb-12 space-y-3">
                <h4 className="text-yellow-500 font-medium tracking-[0.2em] uppercase italic">
                    Menu Pack
                </h4>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                    Our Regular Menu Pack
                </h2>
            </div>


            <div className="flex justify-start md:justify-center items-center overflow-x-auto no-scrollbar pb-6">
                <div className="flex flex-nowrap gap-4 md:gap-6 whitespace-nowrap px-4">
                    

                    <button
                        onClick={() => setActiveTab(0)}
                        className={`px-8 py-3 rounded-full font-bold text-base md:text-lg transition-all duration-300 border-2 ${
                            activeTab === 0 
                            ? "bg-yellow-500 border-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]" 
                            : "border-white/20 text-white hover:border-yellow-500 hover:text-yellow-500"
                        }`}
                    >
                        All
                    </button>

 
                    {tugmalar && tugmalar.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`px-8 py-3 rounded-full font-bold text-base md:text-lg transition-all duration-300 border-2 ${
                                activeTab === item.id 
                                ? "bg-yellow-500 border-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]" 
                                : "border-white/20 text-white hover:border-yellow-500 hover:text-yellow-500"
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}
                    
                </div>
            </div>

        </div>
    </section>
);
}

export default Tugmalar;