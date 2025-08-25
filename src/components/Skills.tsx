'use client';

import { motion } from 'framer-motion';
import { Server, Database, Boxes } from 'lucide-react';
import Chip from './Chip';
import LevelDots from './LevelDots';
import SkillCard from './SkillCard';
import { skills } from '@/utils/data';
const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};




export default function Skills() {
 
  return (
    <section id="skills" className="scroll-mt-20 py-12 text-gray-100 max-w-[98%] sm:max-w-[97%] lg:max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 ">
      <motion.div
        className=""
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -80px 0px' }}
        variants={fade}
      >
        <header className="text-center mb-10">
           <h2 className="text-4xl md:text-5xl font-medium mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A snapshot of the tools and practices I use to build solid backends.
          </p>
          
         
        </header>

        
        <div className="grid md:grid-cols-3 gap-6">
          
          
          <SkillCard icon={Server} classNames={"text-blue-400"} title="Backend" skills={skills} level={5} />
          <SkillCard icon={Database} classNames={"text-indigo-400"} title="Databases" skills={skills} level={4} />
          <SkillCard icon={Boxes} classNames={"text-purple-400"} title="DevOps & Infra" skills={skills} level={4} />
          

        
          
        </div>

        
        <div className="mt-10 w-full rounded-xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 p-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-200">
            <span className="opacity-80">Toolbelt:</span>
            {
                skills.map((skill) => skill.type === "Toolbelt" && <Chip key={skill.name}>{skill.name}</Chip>)
            }
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((s) => s.type === "soft" && (
              <Chip key={s.name}>{s.name}</Chip>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
