'use client';

import Link from 'next/link';
import { Github } from 'lucide-react';
import { projects } from '@/utils/data';
import { toBullets } from '@/utils/helpers/bullets';




export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-16 text-gray-100 max-w-[98%] sm:max-w-[97%] lg:max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6  ">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 px-4 lg:px-8">Experience</h1>

      <div className=" divide-y divide-gray-800/60">
        {projects.map((p, idx) => (
          <article key={idx} className="px-4 lg:px-8 py-10">
            <div className="flex items-start gap-4">
              
              <span className="text-2xl sm:text-3xl font-semibold text-primary-400/90 tabular-nums bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                {String(idx + 1).padStart(2, '0')}
              </span>

              <div className="flex-1">
                
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight ">
                    <span className='text-primary-400 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent'>{p.title}</span>
                    <span className="text-primary-400 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent ">, {p.company}</span>
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400">{p.period}</p>
                </div>

               
                <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-300">
                  {toBullets(p.description).map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-[6px] w-[6px] rounded-full bg-primary-400/80 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

               
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {p.techStack.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs tracking-wide rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-primary-300"
                    >
                      {t}
                    </span>
                  ))}

                  {p.github && (
                    <Link
                      href={p.github}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-sm text-primary-300 hover:text-primary-200 transition"
                    >
                      <Github size={16} />
                      GitHub
                    </Link>
                  )}

                  {p.docs && (
                    <Link
                      href={p.docs}
                      target="_blank"
                      className="text-sm text-primary-300 hover:text-primary-200 transition"
                    >
                      Documentation 
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
