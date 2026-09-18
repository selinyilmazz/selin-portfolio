import Reveal from './Reveal';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'sselinyilmazz01@gmail.com',
    href: 'mailto:sselinyilmazz01@gmail.com',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/selin-yilmaz',
    href: 'https://www.linkedin.com/in/selin-yilmaz-589461209/',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h4v-9a4 4 0 00-8 0M17 20v-6a4 4 0 00-8 0v6M9 20H5V9h4v11zm-2-13a2 2 0 100-4 2 2 0 000 4z" />
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/selinyilmazz',
    href: 'https://github.com/selinyilmazz',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section bg-cream-soft">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-14 items-center">
          <div>
            <Reveal>
              <span className="eyebrow text-stone-dark flex items-center gap-3 mb-4">
                Get In Touch
                <span className="h-px w-10 bg-burgundy inline-block" />
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="heading-2 text-ink mb-6">
                Let&apos;s Build
                <br />
                Something Great
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="body-text text-ink/75 max-w-md mb-10">
                I&apos;m always open to new opportunities, interesting projects or just a
                friendly chat.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a href="mailto:sselinyilmazz01@gmail.com" className="button-primary">
                Say Hello
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            {CONTACT_LINKS.map((item, i) => (
              <Reveal key={item.label} delay={120 + i * 90}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="hover-lift group flex items-center gap-5 bg-cream border border-stone rounded-sm px-6 py-5 transition-colors duration-300 hover:border-burgundy"
                >
                  <span className="h-11 w-11 shrink-0 rounded-full bg-burgundy/10 flex items-center justify-center group-hover:bg-burgundy group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-burgundy group-hover:text-cream transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.icon}
                    </svg>
                  </span>
                  <span>
                    <span className="caption block mb-1">{item.label}</span>
                    <span className="body-text text-sm text-ink">{item.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
