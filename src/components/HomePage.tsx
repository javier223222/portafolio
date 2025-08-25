'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  SiGo,
  SiNodedotjs,
  SiPython,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiTypescript,
  
} from 'react-icons/si';
import { Download, FolderOpen } from 'lucide-react';


export default function HomePage() {
 return (
  <section id='home'  className="scroll-mt-20 py-16   text-gray-100 max-w-[98%] md:max-w-[97%] sm:max-w-[97%] lg:max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 ">

      <div className='flex flex-col mt-6 lg:mt-12 items-center justify-center gap-0  px-6'>
       <motion.div initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }} className='relative'>

              <span aria-hidden className="absolute -inset-4 rounded-full bg-white/40 dark:bg-white/10 blur-xl" />
              <Image
                src="/emoji.png"
                alt="Javier emoji"
                width={150}
                height={150}
                className='relative rounded-full'
                priority
              />
              </motion.div>
               <motion.h1
            className="text-4xl text-center md:text-6xl font-bold mt-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ¡Hello! I am Javier Cundapi
          </motion.h1>
            <motion.p
            className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            >
            Software Engineer specialized in backend and microservices.
            I craft reliable digital infrastructures, blending AI, cloud, and data-driven solutions to solve real-world challenges.
            
            </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 transition"
            >
              <FolderOpen size={18} /> View Work
            </a>
          </motion.div>

              
            

       </div>
         
          {/* <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span aria-hidden className="absolute -inset-4 rounded-full bg-white/40 dark:bg-white/10 blur-xl" />
            <Image
              src="/emoji.png"
              alt="Javier emoji"
              width={150}
              height={150}
              className="relative rounded-full"
              priority
            />
          </motion.div>
  
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mt-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ¡Hello! I am Javier Cundapi
          </motion.h1>
  
          <motion.p
            className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Software Engineer specialized in backend and microservices.
            I craft reliable digital infrastructures, blending AI, cloud, and data-driven solutions to solve real-world challenges.
            
          </motion.p>
  
         
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 transition"
            >
              <FolderOpen size={18} /> View Work
            </a>
          </motion.div>
   */}
  <motion.div
    className=" mt-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
  >
    
  
  
    <div className="">
      <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 px-6">
        {[
          { Icon: SiGo, label: 'Go' },
          { Icon: SiNodedotjs, label: 'Node.js' },
          { Icon: SiPython, label: 'Python' },
          { Icon: SiLaravel, label: 'Laravel' },
          { Icon: SiMysql, label: 'MySQL' },
          { Icon: SiPostgresql, label: 'PostgreSQL' },
          { Icon: SiMongodb, label: 'MongoDB' },
          { Icon: SiDocker, label: 'Docker' },
          { Icon: SiTypescript, label: 'TypeScript' },
        ].map(({ Icon, label }) => (
          <li key={label} title={label} className="select-none">
            <motion.span
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex"
              aria-label={label}
            >
              <Icon className="h-8 w-8 md:h-10 md:w-10 text-gray-900 dark:text-gray-100 opacity-80 hover:opacity-100 transition" />
            </motion.span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
  
         
  
        </section>

 );
}