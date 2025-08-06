'use client';

import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ContactPage() {
  return (
    <section className="py-20 max-w-3xl mx-auto px-6 text-center">
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        📬 Contáctame
      </motion.h1>

      <motion.p
        className="text-gray-600 dark:text-gray-300 text-lg mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        ¿Te interesa colaborar conmigo, tienes una propuesta o solo quieres saludar?  
        ¡Estoy disponible para nuevos retos y proyectos interesantes!
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Link
          href="mailto:upconectionupconection@gmail.com"
          target="_blank"
          className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-5 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Mail size={20} />
          Correo
        </Link>

        <Link
          href="https://github.com/javier223222"
          target="_blank"
          className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-5 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Github size={20} />
          GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/javier-antonio-cundapi-toledo-22211a195/"
          target="_blank"
          className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-5 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Linkedin size={20} />
          LinkedIn
        </Link>
      </motion.div>
    </section>
  );
}
