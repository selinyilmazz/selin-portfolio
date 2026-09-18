import Reveal from './Reveal';

const SKILL_GROUPS = [
  {
    title: 'Languages & Frameworks',
    items: ['Python', 'JavaScript', 'TypeScript', 'C#', 'Next.js', 'React', 'Unity'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'FastAPI', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'AI & Cloud',
    items: ['AI / ML', 'Microsoft Azure', 'Networking'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Docker', 'Git', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-cream-soft">
      <div className="container">
        <Reveal>
          <span className="eyebrow text-stone-dark flex items-center gap-3 mb-4">
            Skills
            <span className="h-px w-10 bg-burgundy inline-block" />
          </span>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="heading-2 text-ink mb-14">Tools &amp; Technologies</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={80 + gi * 90}>
              <div>
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="font-serif text-2xl text-burgundy/30">
                    {String(gi + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg text-ink font-semibold">{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="group flex items-center justify-between py-2.5 border-b border-stone/70"
                    >
                      <span className="text-sm text-ink/80 group-hover:text-burgundy group-hover:translate-x-1 transition-all duration-300 ease-out">
                        {skill}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-burgundy scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
