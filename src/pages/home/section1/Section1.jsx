// components/Section1.jsx
import React from 'react';
import Bg from '../../../assets/home/bg.png';

const Section1 = () => {
    return (
        <section
            className="max-w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${Bg})`,
            }}
        >
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10" />
            <div className="w-20 h-20 rounded-full bg-white/70 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>
        </section>
    );
};

export default Section1;
