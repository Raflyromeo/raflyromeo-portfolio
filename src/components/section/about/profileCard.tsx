"use client";

import Card from "@/components/fragments/card";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";

export default function ProfileCard() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="items-start text-left">
      {/* Image with Skeleton Loading */}
      <div className="flex mb-5 items-center justify-center aspect-square relative">
        {!imageLoaded && (
          <div className="absolute inset-0 w-full h-full rounded-[12px] bg-gray-700 animate-pulse"></div>
        )}
        <Image
          src="/romeo-about.jpg"
          alt="Romeo about"
          width={1000}
          height={1000}
          className={`w-full rounded-[12px] transition-all duration-200 ${
            !imageLoaded ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>

      <h1 className="mb-4 text-2xl font-bold">
        Haloo, Saya Muhammad Rafly Romeo Nasution
      </h1>
      <p className="text-base font-normal">
        Saya membangun website dan desain menarik seperti ini.
      </p>
      <div className="flex items-start justify-center gap-3 text-sm mt-5 text-[#b3b3b3]">
        <div className="flex items-center gap-2 py-2 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px]">
          <IoLocationOutline size={20} />
          <span>Kota Bekasi, Indonesia</span>
        </div>
        <div className="flex items-center gap-2 py-2 px-3 border-[2px] bg-[#262626] border-black-border rounded-[12px]">
          <FaUniversity size={20} />
          <span>Universitas Gunadarma</span>
        </div>
      </div>
    </Card>
  );
}
