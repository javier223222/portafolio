"use client";
import Image from "next/image";
import ShippedProject from "./ShippedProject";

export default function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-20 py-18 md:py-16 text-gray-100 w-full max-w-[98%] sm:max-w-[97%] lg:max-w-[95%]  mx-auto px-2 sm:px-4 lg:px-6"
    >
      
      <div className="flex justify-between items-end mb-12">
        <h1 className="text-4xl md:text-5xl font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
          Selected Work
        </h1>
        <span className="hidden md:block text-4xl lg:text-5xl font-light text-gray-400">
          &apos;21-&apos;25
        </span>
      </div>

     
      <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
        <div className="absolute top-6 left-6 z-20">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg">
            Latest Project
          </span>
        </div>

       
        <div
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] overflow-hidden rounded-2xl"
          onClick={() =>
            window.open("https://monogatori-ui.vercel.app/", "_blank")
          }
        >

          <div className="absolute inset-0 transform-gpu will-change-transform transition-transform duration-700 group-hover:scale-[1.04]">
           
            <Image
              src="/monogatari.webp"
              alt="Monogatari Manga Platform"
              fill
              
              className="object-cover"
              priority
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>

        <div className="px-2 mt-4">
          <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
            Monogatari
          </h3>
          <p className="text-gray-300 text-sm md:text-base max-w-md">
            Web3 Platform International Hackathon Winner
          </p>
        </div>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <ShippedProject
          pathImage="/good_actions.webp"
          alt="Good Actions"
          name="Good Actions"
          description="Web3 / Blockchain Platform - Gamification- Education"
        />
        <ShippedProject
          pathImage="/ominio.webp"
          alt="Ominio"
          name="Ominio"
          description="E-Learning Platform - Gamification - AI"
        />
      </div>
    </section>
  );
}
