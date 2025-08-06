'use client';

import { motion } from 'framer-motion';
import { Award, ServerCog, Cloud, Zap } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        👨‍💻 Sobre mí
      </motion.h1>

      <div className="space-y-10">
        <motion.div
          className="flex gap-4 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <ServerCog size={32} className="text-blue-500 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
              Backend Developer con visión arquitectónica
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Soy Javier Cundapi, ingeniero de software apasionado por construir APIs escalables,
              limpias y eficientes. Trabajo con <strong>Node.js, Go, FastAPI y Laravel</strong>, aplicando principios de arquitectura limpia y buenas prácticas.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Cloud size={32} className="text-purple-500 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
              Experiencia con sistemas reales en producción
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              He trabajado en ERPs, sistemas de autenticación, plataformas educativas y soluciones IoT para monitoreo de energía,
              integrando tecnologías como <strong>Docker, WebSockets, JWT, PostgreSQL y MongoDB</strong>.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Award size={32} className="text-yellow-500 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
              Premios y logros destacados
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-base">
              <li>🥇 1er lugar – Talent Land Hackathon 2025</li>
              <li>🥇 1er lugar – MegaHackathon Internacional Blockchain & Web3</li>
              <li>🥉 3er lugar – VaraNetwork Hackathon 2024</li>
              <li>📰 Publicación científica indexada por el proyecto Solary</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Zap size={32} className="text-green-500 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
              Siempre aprendiendo y compartiendo
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Me sigo capacitando en <strong>AWS, Azure, seguridad y rendimiento</strong>.
              Disfruto participar en hackathons, escribir sobre mis proyectos y aprender en comunidad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
