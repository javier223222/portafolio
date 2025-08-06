'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // usa íconos pequeños, o instala heroicons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Cundapi.dev
        </Link>

        {/* Menú para desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-600 hover:text-black">Sobre mí</Link>
          <Link href="/projects" className="text-gray-600 hover:text-black">Proyectos</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black">Contacto</Link>
        </div>

        {/* Botón hamburguesa para móvil */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú colapsable para móvil */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
          <Link href="/about" className="block text-gray-600 hover:text-black">Sobre mí</Link>
          <Link href="/projects" className="block text-gray-600 hover:text-black">Proyectos</Link>
          <Link href="/contact" className="block text-gray-600 hover:text-black">Contacto</Link>
        </div>
      )}
    </nav>
  );
}
