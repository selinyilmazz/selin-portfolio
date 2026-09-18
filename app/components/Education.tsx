import Reveal from './Reveal';

const ADDITIONAL_EDUCATION = [
  {
    title: 'Child Development',
    org: 'Istanbul University – AUZEF (Open and Distance Education Faculty)',
    period: 'Graduated Dec 2022',
    description: '2-year degree · GPA 3.41 / 4.00',
  },
  {
    title: "We'R HERE — Voorbereiding IT Programme",
    org: 'Netherlands',
    period: 'Completed Jul 2025',
    description: 'Python, SQL Databases, Networking, Azure Fundamentals, Capstone Project',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-tight bg-cream-soft">
      <div className="container">
        <Reveal>
          <span className="eyebrow text-stone-dark flex items-center gap-3 mb-4">
            Education
            <span className="h-px w-10 bg-burgundy inline-block" />
          </span>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="heading-2 text-ink mb-12">Academic Background</h2>
        </Reveal>

        <div className="relative max-w-3xl">
          <span className="hidden sm:block absolute left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-burgundy ring-4 ring-cream-soft" />
          <Reveal delay={120}>
            <div className="sm:pl-12 pb-10">
              <span className="caption text-burgundy block mb-3">2020 — Present</span>
              <h3 className="heading-3 text-ink mb-3 text-xl">Computer Engineering</h3>
              <p className="body-text text-ink/75 mb-4 max-w-xl">
                Kahramanmaraş Sütçü İmam University — Faculty of Engineering and
                Architecture, Turkey. Currently in my 4th year.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'AI / ML', 'Software Engineering'].map((tag) => (
                  <span key={tag} className="tag-pill text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h3 className="caption text-stone-dark sm:pl-12 mb-5">
              Additional Education &amp; Training
            </h3>
          </Reveal>

          <div className="sm:pl-12 divide-y divide-stone/70">
            {ADDITIONAL_EDUCATION.map((item, i) => (
              <Reveal key={item.title} delay={240 + i * 90}>
                <div className="py-5 first:pt-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                    <h4 className="font-serif text-lg text-ink">{item.title}</h4>
                    <span className="text-xs uppercase tracking-wider text-stone-dark">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-ink/60 mb-1">{item.org}</p>
                  <p className="text-sm text-ink/60">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
