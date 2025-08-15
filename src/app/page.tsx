"use client";

import Card from "@/components/fragments/card";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div 
      className="relative flex items-center justify-center min-h-screen w-screen p-4 bg-cover bg-center"
      style={{
        backgroundImage: `url("/background.avif")`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <Card className="max-w-3xl w-full relative z-10 bg-white/95 p-8 rounded-3xl shadow-2xl border border-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Profile Picture - Larger and centered */}
          <div className="w-48 h-47 min-w-[12rem] rounded-full bg-gray-100 overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/raflyromeo.jpg"
              alt="Muhammad Rafly Romeo Nasution" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/400';
                e.currentTarget.className = 'w-full h-full object-contain p-4 bg-gray-200';
              }}
            />
          </div>

          {/* Text Content - Better spacing and typography */}
          <div className="flex-1 space-y-5 text-gray-800">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Hai, saya <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  Muhammad Rafly<br />Romeo Nasution
                </span>
              </h1>
              <div className="w-100 h-1.5 bg-gray-500 rounded-full my-4"></div>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Seorang mahasiswa semester 4 program sarjana di{' '}
              <span className="font-semibold text-gray-900">Universitas Gunadarma</span> yang berfokus pada{' '}
              <span className="font-medium text-amber-600">frontend development</span>,{' '}
              <span className="font-medium text-purple-600">UI/UX design</span>, dan{' '}
              <span className="font-medium text-emerald-600">data science</span>.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic">
              "Saya sangat menyukai mendesain aplikasi mobile maupun website."
            </p>
          </div>
        </motion.div>
      </Card>
    </div>
  );
}