'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#inicio');
  const [progress, setProgress] = useState(0);

 
  useEffect(() => {
    const sections = LINKS.map(l => document.querySelector(l.href) as HTMLElement).filter(Boolean);

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    );
    sections.forEach(s => obs.observe(s));

    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(scrolled * 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <nav className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
      {LINKS.map(link => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => onClick?.()}
          className={clsx(
            'px-2 py-1 text-sm md:text-base text-gray-700 dark:text-gray-200 hover:opacity-100 opacity-90 transition relative',
            active === link.href && 'font-semibold'
          )}
        >
          {link.label}
          {/* Active underline */}
          <span
            className={clsx(
              'absolute left-1/2 -bottom-1 h-[2px] w-0 -translate-x-1/2 rounded bg-gradient-to-r from-blue-500 to-purple-500 transition-all',
              active === link.href ? 'w-6' : 'w-0'
            )}
          />
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Progress bar */}
      <div
        className="h-[3px] bg-gradient-to-r from-blue-500 to-purple-500"
        style={{ width: `${progress}%` }}
      />
      {/* Bar */}
      <div className="backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/40 bg-white/85 dark:bg-black/60 border-b border-black/5 dark:border-white/5">
        <div className="w-full px-4 md:px-6 lg:px-8 h-14 flex items-center justify-between">
         
          <Link href="#" className="flex items-center gap-2">
            {/* <Image src="/emoji.png" alt="logo" width={28} height={28} className="rounded-full" /> */}
            <span className="font-semibold tracking-tight text-gray-900 dark:text-white">
              Cundapi
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen(v => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden px-4 pb-4">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}
