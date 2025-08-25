'use client';

import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'upconectionupconection@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-16 text-gray-100 max-w-[98%] sm:max-w-[97%] lg:max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6 mx-auto">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        variants={fadeIn}
      >
        
        <motion.h1 variants={item} className="text-4xl font-bold text-gray-900 dark:text-white">
          Contact
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300"
        >
          Got a proposal, collaboration, or question? I’m open to new challenges — let’s talk.
        </motion.p>

       
        <motion.div
          variants={item}
          className="
            mt-8 rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5
            backdrop-blur px-4 py-3 sm:px-5 sm:py-4
            inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-left
          "
          aria-label="Contact email"
        >
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-gray-800 dark:text-gray-200" />
            <span className="text-sm sm:text-base text-gray-800 dark:text-gray-100 break-all">
              {email}
            </span>
          </div>

          <button
            onClick={copyEmail}
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-1 rounded-md
              px-3 py-2 text-xs sm:text-sm
              border border-blue-500/40 text-blue-600 dark:text-blue-300
              hover:bg-blue-500/10 active:scale-[0.99]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50
              transition
            "
            aria-live="polite"
            aria-label="Copy email"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </motion.div>

        
        <motion.div variants={item} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <Link
            href={`mailto:${email}`}
            className="
              inline-flex items-center justify-center gap-2 rounded-md
              px-6 py-3 bg-blue-600 text-white hover:bg-blue-700
              active:scale-[0.99]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
              transition
            "
            aria-label="Send email"
          >
            <Mail size={18} />
            Send Email
          </Link>

          <Link
            href="https://github.com/javier223222"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2 rounded-md
              px-6 py-3 border border-blue-600 text-blue-600
              hover:bg-blue-50 dark:hover:bg-blue-900/30
              active:scale-[0.99]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40
              transition
            "
            aria-label="Open GitHub"
          >
            <Github size={18} />
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/javier-antonio-cundapi-toledo-22211a195/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2 rounded-md
              px-6 py-3 border border-blue-600 text-blue-600
              hover:bg-blue-50 dark:hover:bg-blue-900/30
              active:scale-[0.99]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40
              transition
            "
            aria-label="Open LinkedIn"
          >
            <Linkedin size={18} />
            LinkedIn
          </Link>
        </motion.div>

     
        <motion.p variants={item} className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          I usually reply within 24 hours.
        </motion.p>
      </motion.div>
    </section>
  );
}
