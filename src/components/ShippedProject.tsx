
"use client"
import Image from "next/image"

export default function ShippedProject({pathImage,alt,name,description}:{pathImage:string,alt:string,name:string,description:string}) {
  return(
     <div className="group cursor-pointer">
                           
                                <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden rounded-2xl transition-transform duration-700 group-hover:scale-105">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10">   
                                        <Image
                                        src={pathImage}
                                        alt={alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        priority
                                        />
    
                                    </div>
                                </div>

                                <div className="mt-4 px-2">
                            <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                                {name}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base">
                                {description}
                            </p>
                        </div>
                        </div>
  )
}