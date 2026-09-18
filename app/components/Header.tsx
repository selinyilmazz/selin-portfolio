'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#hero', label: 'Home', id: 'hero' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = NAV_LINKS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-stone shadow-[0_1px_0_0_rgba(27,22,17,0.04)]' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-5">
        <Link href="#hero" className="font-serif text-xl font-semibold tracking-tight text-ink">
          SY.
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${activeId === item.id ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="/cv.pdf"
            download
            className="button-primary !py-2.5 !px-5 text-sm"
          >
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden relative z-50 h-9 w-9 flex flex-col items-center justify-center gap-[5px]"
        >
          <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-ink transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-0 bg-cream transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
              }}
              className={`font-serif text-3xl text-ink hover:text-burgundy transition-all duration-300 ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="mt-4 button-primary"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
