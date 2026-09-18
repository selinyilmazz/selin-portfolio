'use client';

import { useEffect, useRef, useState } from 'react';
import type { MouseEvent as ReactMouseEvent, PointerEvent as ReactPointerEvent } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import useReducedMotion from './useReducedMotion';

type Project = {
  image: string;
  imagePosition: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    image: '/images/projects/virexa.jpg',
    imagePosition: 'center top',
    name: 'Virexa',
    category: 'AI-Powered News Platform',
    description:
      'A modern news platform with AI summaries, real-time information and a clean, minimal interface.',
    tags: ['Next.js', 'Supabase', 'AI'],
  },
  {
    image: '/images/projects/aventra.jpg',
    imagePosition: 'center 62%',
    name: 'Aventra',
    category: 'AI Travel Companion',
    description:
      'An AI-powered travel guide and companion — combining AI travel assistance, maps, digital tour guides and a personal travel memory notebook.',
    tags: ['AI-Powered', 'Travel Tech', 'Maps & Location'],
  },
  {
    image: '/images/projects/market-price-comparison.jpg',
    imagePosition: 'center top',
    name: 'Market Price Comparison',
    category: 'Web Application',
    description:
      'Compare market prices across different platforms with a fast and user-friendly interface.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    image: '/images/projects/playable-ad-generator.jpg',
    imagePosition: 'center top',
    name: 'Playable Ad Generator',
    category: 'Game Development Tool',
    description:
      'Automation tool for generating playable ads in casual puzzle games.',
    tags: ['Unity', 'C#', 'Game Dev'],
  },
  {
    image: '/images/projects/unity-auto-playbot.jpg',
    imagePosition: 'center top',
    name: 'Unity Auto-Playbot',
    category: 'QA Automation Tool',
    description:
      'An automated bot built in Unity that plays through generated playable-ad builds to catch issues early, developed during my internship at Unico.',
    tags: ['Unity', 'C#', 'Automation'],
  },
];

function ProjectCard({
  project,
  index,
  reducedMotion,
}: {
  project: Project;
  index: number;
  reducedMotion: boolean;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 7;
    const rotateX = (0.5 - py) * 5;
    cardRef.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = reducedMotion
      ? ''
      : 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <a
      ref={cardRef}
      href="https://github.com/selinyilmazz"
      target="_blank"
      rel="noopener noreferrer"
      data-card
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="tilt-card group relative shrink-0 snap-start w-[80vw] sm:w-[360px] rounded-sm border border-cream/10 bg-ink-soft overflow-hidden flex flex-col"
    >
      <div className="relative h-48 sm:h-52 overflow-hidden border-b border-cream/10 bg-ink">
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="(min-width: 1024px) 360px, 80vw"
          style={{ objectPosition: project.imagePosition }}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />
        <span className="absolute top-4 left-4 caption text-cream bg-ink/70 px-2.5 py-1 rounded-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="absolute top-4 right-4 h-8 w-8 rounded-full border border-cream/30 bg-ink/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-burgundy group-hover:bg-burgundy transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
          </svg>
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="caption text-burgundy-light mb-2">{project.category}</span>
        <h3 className="heading-3 text-cream mb-3 text-xl group-hover:text-burgundy-light transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-cream/65 mb-6 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill tag-pill-dark text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 pt-4 border-t border-cream/10 text-sm text-cream/80 group-hover:text-burgundy-light transition-colors duration-300">
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const railRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  const scrollBy = (dir: 1 | -1) => {
    const node = railRef.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>('[data-card]');
    const distance = card ? card.offsetWidth + 24 : 360;
    node.scrollBy({ left: dir * distance, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    const node = railRef.current;
    if (!node) return;
    const cards = node.querySelectorAll<HTMLElement>('[data-card]');
    const target = cards[index];
    if (target) {
      node.scrollTo({ left: target.offsetLeft - 4, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const node = railRef.current;
    if (!node) return;

    let ticking = false;
    const updateActive = () => {
      const cards = Array.from(node.querySelectorAll<HTMLElement>('[data-card]'));
      const center = node.scrollLeft + node.clientWidth / 2;
      let closest = 0;
      let minDistance = Infinity;
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - center);
        if (distance < minDistance) {
          minDistance = distance;
          closest = i;
        }
      });
      setActiveIndex(closest);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    node.addEventListener('scroll', onScroll, { passive: true });
    updateActive();
    return () => node.removeEventListener('scroll', onScroll);
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !railRef.current) return;
    dragState.current = { isDown: true, startX: event.clientX, scrollLeft: railRef.current.scrollLeft };
    railRef.current.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragState.current.isDown || !railRef.current) return;
    const dx = event.clientX - dragState.current.startX;
    railRef.current.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const endDrag = () => {
    dragState.current.isDown = false;
  };

  return (
    <section id="projects" className="section bg-ink text-cream">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <Reveal>
              <span className="eyebrow text-stone flex items-center gap-3 mb-4">
                Featured Work
                <span className="h-px w-10 bg-burgundy inline-block" />
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="heading-2 text-cream mb-5">
                Projects
                <br />
                That Matter
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="body-text text-cream/70 max-w-md">
                A collection of projects that reflect my curiosity, technical skills and
                passion for solving real problems.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180} className="flex items-center gap-3 md:mb-1">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => scrollBy(-1)}
              className="h-11 w-11 rounded-full border border-cream/25 flex items-center justify-center hover:border-burgundy hover:bg-burgundy transition-all duration-300 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => scrollBy(1)}
              className="h-11 w-11 rounded-full border border-cream/25 flex items-center justify-center hover:border-burgundy hover:bg-burgundy transition-all duration-300 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div
            ref={railRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            className="rail-grab flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory scroll-pl-1"
          >
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} reducedMotion={reducedMotion} />
            ))}
          </div>
        </Reveal>

        <div className="flex items-center justify-center gap-2 mt-9">
          {PROJECTS.map((project, i) => (
            <button
              key={project.name}
              type="button"
              aria-label={`Go to ${project.name}`}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-7 bg-burgundy' : 'w-1.5 bg-cream/25 hover:bg-cream/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
