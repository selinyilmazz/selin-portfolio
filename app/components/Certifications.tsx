import Reveal from './Reveal';

const CERTIFICATIONS = [
  {
    title: 'Project Management Fundamentals',
    org: 'BTK Akademi / ICT Authority',
    date: 'Nov 2023',
  },
  {
    title: 'Communication & Network Management',
    org: 'BTK Akademi / ICT Authority',
    date: 'Mar 2024',
  },
  {
    title: 'Team Building and Management',
    org: 'BTK Akademi / ICT Authority',
    date: 'Mar 2024',
  },
  {
    title: 'Public Speaking & Effective Presentation',
    org: 'BTK Akademi / ICT Authority',
    date: 'Mar 2024',
  },
  {
    title: 'AI4ResilientYouth Program',
    org: 'Kodluyoruz · Australian Aid / Australian Embassy Ankara',
    date: '51 hours',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-tight bg-cream">
      <div className="container">
        <Reveal>
          <span className="eyebrow text-stone-dark flex items-center gap-3 mb-4">
            Certifications
            <span className="h-px w-10 bg-burgundy inline-block" />
          </span>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="heading-2 text-ink mb-12">Credentials</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.title} delay={100 + i * 90}>
              <div className="hover-lift relative h-full p-7 rounded-sm border border-stone bg-cream-soft/60 overflow-hidden">
                <span className="ghost-text absolute -right-2 -bottom-4 text-[6rem] leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="caption text-burgundy mb-4 block relative">{cert.date}</span>
                <h3 className="heading-3 text-ink mb-2 text-lg leading-snug relative">{cert.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60 relative">{cert.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
