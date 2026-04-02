import React, { useState } from 'react';
// 1. Videoni import qilib olamiz (Yo'lni tekshiring)
import myVideo from '../assets/video.mp4';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="bg-[#0C0C0C] py-20 px-6 md:px-24">
            <div className="container mx-auto max-w-[1100px]">
                
                {/* Asosiy Video Konteyneri */}
                <div className="relative w-full aspect-video rounded-[40px] overflow-hidden shadow-2xl border border-white/5 bg-black group">
                    
                    {!isPlaying ? (
                        /* 1-HOLAT: Rasm va Play Tugmasi */
                        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                            {/* Orqa fondagi muqova rasmi */}
                            <img 
                                src="https://unsplash.com" 
                                alt="Video Cover" 
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                            />
                            
                            <div className="absolute inset-0 bg-black/30"></div>

                            {/* Play Tugmasi */}
                            <button 
                                onClick={() => setIsPlaying(true)}
                                className="group relative z-10 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center transition-transform hover:scale-110"
                            >
                                <div className="absolute inset-0 rounded-full border-2 border-yellow-500/40 animate-ping opacity-20"></div>
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 group-hover:bg-yellow-500 transition-all duration-300">
                                    <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent ml-2 group-hover:border-l-black"></div>
                                </div>
                            </button>

                            <div className="absolute bottom-12 text-center z-10">
                                <p className="text-white text-lg md:text-2xl font-bold tracking-[0.3em] uppercase italic opacity-70">
                                   Experience Our Kitchen
                                </p>
                            </div>
                        </div>
                    ) : (
                        /* 2-HOLAT: HTML5 Video Player (Local file) */
                        <video 
                            src={myVideo} 
                            className="w-full h-full object-cover" 
                            controls 
                            autoPlay
                            loop
                        >
                            Brauzeringiz videoni qo'llab-quvvatlamaydi.
                        </video>
                    )}

                </div>
            </div>
        </section>
    );
};

export default VideoSection;