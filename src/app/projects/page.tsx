'use client';

import Link from 'next/link';
import { Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  techStack: string[];
  company: string;
  period: string;
  github?: string;
  docs?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: 'ERP para Restaurantes',
    company: 'Hubbie Platform',
    period: 'Abr 2024 – Nov 2024',
    github:"https://github.com/javier223222",
    description:
      'Desarrollo del backend de un sistema ERP para restaurantes utilizando Go y el framework Gin. Incluye gestión de inventario, usuarios, menús y pedidos. Se aplicó arquitectura REST modular, despliegue continuo y colaboración directa con frontend y devops.',
    techStack: ['Go', 'Gin', 'REST API', 'Docker', 'CI/CD'],
  },
  {
    title: 'Sistema de Gestión de Clientes y Mantenimientos',
    company: 'HIGHTECH Process Counselours',
    period: 'May 2023 – Abr 2024',
    github:"https://github.com/javier223222",
    description:
      'Sistema web fullstack con Laravel, MySQL y PostgreSQL. Se desarrollaron módulos de clientes, catálogos, mantenimiento, autenticación por roles y chat en tiempo real con WebSockets.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'PostgreSQL', 'WebSockets', 'Blade'],
  },
  {
    title: 'Monitoreo IoT de Paneles Solares',
    company: 'Freelance',
    period: 'Ene 2023 – May 2023',
    github:"https://github.com/javier223222/solary-backend.git",
    description:
      'Backend para sistema IoT de monitoreo en tiempo real de paneles solares. Incluye APIs REST, WebSockets para visualización en dashboard, autenticación JWT y almacenamiento en MySQL.',
    techStack: ['Node.js', 'Express', 'JWT', 'MySQL', 'WebSockets'],
  },
  {
    title: 'Gestión Universitaria',
    company: 'Platinum México',
    period: 'Sep 2022 – Mar 2023',
    github:"https://github.com/javier223222",
    description:
      'Servicios backend en Go y Gin para una plataforma universitaria. Se desarrollaron APIs de autenticación, horarios, calificaciones y gestión académica con base de datos relacional. Se aplicó arquitectura limpia y revisión de código.',
    techStack: ['Go', 'Gin', 'REST API', 'Clean Architecture', 'PostgreSQL'],
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-16 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-10 text-center">🚀 Proyectos Destacados</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all duration-300 bg-white/80 dark:bg-white/5 backdrop-blur"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-xl h-48 w-full object-cover"
              />
            )}

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center">
                {
                    project.github &&(
                         <Link
                  href={project.github }
                  target="_blank"
                  className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Github size={16} className="mr-1" />
                  GitHub
                </Link>

                    )
                }
               

                {project.docs && (
                  <Link
                    href={project.docs}
                    target="_blank"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Docs →
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
