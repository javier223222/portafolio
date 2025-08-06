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

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-4">
      {/* Imagen emoji */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/emoji.png"
          alt="Javier emoji"
          width={150}
          height={150}
          className="rounded-full"
          priority
        />
      </motion.div>

      {/* Título y descripción */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mt-6 text-gray-900 dark:text-white"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        ¡Hola! Soy Javier Cundapi
      </motion.h1>

      <motion.p
        className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Desarrollador backend enfocado en construir sistemas escalables, APIs limpias y seguras, y arquitecturas eficientes.
        Tengo experiencia profesional con Go, Node.js, Laravel, bases de datos SQL y NoSQL, y servicios Dockerizados.
      </motion.p>

      {/* Botones */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="/cv.pdf"
          target="_blank"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Descargar CV
        </a>
        <a
          href="/projects"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 transition"
        >
          Ver proyectos
        </a>
      </motion.div>

      {/* Tecnologías */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Stack principal:</h2>
        <div className="flex flex-wrap justify-center gap-6 text-3xl text-gray-800 dark:text-gray-100">
          <SiGo title="Go" />
          <SiNodedotjs title="Node.js" />
          <SiPython title="Python" />
          <SiLaravel title="Laravel" />
          <SiMysql title="MySQL" />
          <SiPostgresql title="PostgreSQL" />
          <SiMongodb title="MongoDB" />
          <SiDocker title="Docker" />
          <SiTypescript title="TypeScript" />
        </div>
      </motion.div>
    </section>
  );
}
