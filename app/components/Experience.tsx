import Reveal from './Reveal';

const EXPERIENCE = [
  {
    role: 'Hardware Team Intern',
    org: 'Unico',
    period: '2026 — Present',
    description:
      'Interning on the hardware team, working remotely from the Netherlands. Ramping up on Proxmox VE and self-hosted GitHub Actions runners while following project work led by the team lead.',
    tags: ['Proxmox VE', 'GitHub Actions', 'Linux'],
  },
  {
    role: 'Unity Developer',
    org: 'Independent Projects',
    period: '2022 — 2023',
    description: 'Created interactive playable ads and game prototypes.',
    tags: ['Unity', 'C#'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-cream">
      <div className="container">
        <Reveal>
          <span className="eyebrow text-stone-dark flex items-center gap-3 mb-4">
            Experience
            <span className="h-px w-10 bg-burgundy inline-block" />
          </span>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="heading-2 text-ink mb-12">Where I&apos;ve Worked</h2>
        </Reveal>

        <div className="relative max-w-3xl">
          <span className="hidden sm:block absolute left-[5px] top-2 bottom-2 w-px bg-stone" />
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.role} delay={100 + i * 120}>
              <div className="relative sm:pl-12 pb-12 last:pb-0">
                <span className="hidden sm:block absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-burgundy ring-4 ring-cream" />
                <span className="caption text-burgundy block mb-3">{item.period}</span>
                <div className="flex flex-wrap items-baseline gap-x-3 mb-3">
                  <h3 className="heading-3 text-ink text-xl">{item.role}</h3>
                  <span className="text-sm text-stone-dark">— {item.org}</span>
                </div>
                <p className="body-text text-ink/75 mb-4 max-w-xl">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
