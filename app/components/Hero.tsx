'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import useReducedMotion from './useReducedMotion';

export default function Hero() {
  const circleARef = useRef<HTMLDivElement>(null);
  const circleBRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    let ticking = false;

    const applyParallax = () => {
      const y = window.scrollY;
      if (circleARef.current) {
        circleARef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
      }
      if (circleBRef.current) {
        circleBRef.current.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(applyParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reducedMotion]);

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
      {/* faint corner accents instead of busy stock imagery */}
      <div ref={circleARef} className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full border border-stone/60" />
      <div ref={circleBRef} className="pointer-events-none absolute top-1/3 -left-16 h-40 w-40 rounded-full border border-burgundy/20" />

      {/* quiet recurring initials motif, echoed in the nav logo */}
      <span
        aria-hidden
        className="ghost-text absolute -left-4 top-16 text-[13rem] md:text-[19rem] leading-none select-none hidden sm:block"
      >
        S
      </span>

      {/* editorial spine label along the right edge */}
      <div
        aria-hidden
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 items-center gap-3 [writing-mode:vertical-rl] text-stone-dark"
      >
        <span className="caption tracking-[0.3em]">Selin Yılmaz — Portfolio</span>
        <span className="h-10 w-px bg-stone-dark/40" />
      </div>

      <div className="container relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <span className="eyebrow text-stone-dark flex items-center gap-3">
              Software Developer in Progress
              <span className="h-px w-10 bg-burgundy inline-block" />
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="heading-1 text-ink mt-5 mb-5">
              <span className="block">Selin</span>
              <span className="block text-burgundy">Yılmaz</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="body-text text-ink/80 max-w-md mb-8">
              Computer Engineering student passionate about building meaningful,
              user-focused solutions with modern technologies.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#projects" className="button-primary">
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/cv.pdf" download className="button-secondary">
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex items-center gap-6">
              <a href="https://github.com/selinyilmazz" className="link" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/selin-yilmaz-589461209/" className="link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="mailto:sselinyilmazz01@gmail.com" className="link flex items-center gap-2 text-sm" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline text-ink/70">sselinyilmazz01@gmail.com</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-md">
            <div className="absolute -inset-4 border border-burgundy/25 rounded-sm -z-10" />
            <div className="absolute -inset-4 translate-x-3 translate-y-3 border border-stone -z-20 hidden sm:block" />
            <div className="relative h-full w-full overflow-hidden rounded-sm photo-reveal">
              <Image
                src="/images/selin-headshot.jpg"
                alt="Selin Yılmaz"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-ink text-cream px-6 py-5 rounded-sm shadow-xl max-w-[220px] hidden sm:block border-t-2 border-burgundy">
              <p className="quote-text text-base leading-snug">
                &ldquo;Turning ideas into meaningful solutions.&rdquo;
              </p>
              <span className="caption text-stone mt-3 block">— S.Y.</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={420}>
        <div className="hidden md:flex flex-col items-center gap-3 mt-14 mx-auto w-fit text-stone-dark">
          <span className="caption">Scroll to explore</span>
          <span className="h-8 w-px bg-stone-dark/60 relative overflow-hidden">
            <span className="absolute top-0 left-0 h-2 w-px bg-burgundy scroll-dot" />
          </span>
        </div>
      </Reveal>
    </section>
  );
}
