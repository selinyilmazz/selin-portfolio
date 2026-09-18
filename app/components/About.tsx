import Image from 'next/image';
import Reveal from './Reveal';

const FOCUS_AREAS = ['Web Development', 'Artificial Intelligence', 'Creative Coding', 'Technical Problem Solving'];

export default function About() {
  return (
    <section id="about" className="section bg-cream">
      <div className="container">
        <Reveal>
          <span className="eyebrow text-stone-dark flex items-center gap-3 mb-4">
            About Me
            <span className="h-px w-10 bg-burgundy inline-block" />
          </span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <Reveal delay={80} className="relative mx-auto lg:mx-0 w-full max-w-xs">
            <div className="relative aspect-[3/4] w-full">
              <div className="absolute -inset-4 border border-stone -z-10" />
              <div className="relative h-full w-full overflow-hidden rounded-sm photo-reveal">
                <Image
                  src="/images/selin-fullbody.jpg"
                  alt="Selin Yılmaz portrait"
                  fill
                  sizes="(min-width: 1024px) 340px, 70vw"
                  className="object-cover object-top hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={140}>
              <h2 className="heading-2 text-ink mb-8">
                Curious Mind,
                <br />
                Creative Builder
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="body-text text-ink/80 mb-4 max-w-xl">
                I&apos;m a Computer Engineering student who enjoys turning ideas into real
                projects. I&apos;m especially interested in web development, artificial
                intelligence, and building products that make life easier for people.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p className="body-text text-ink/80 mb-10 max-w-xl">
                Outside of coding, I love learning new things, traveling, and exploring
                different cultures.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mb-8">
                <h3 className="heading-3 text-ink mb-5 text-xl">Technical Focus</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {FOCUS_AREAS.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-burgundy rounded-full shrink-0" />
                      <span className="body-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <blockquote className="border-l-2 border-burgundy pl-6 py-1">
                <p className="quote-text text-xl text-ink">
                  &ldquo;A little progress every day adds up to big results.&rdquo;
                </p>
                <span className="caption mt-3 block">— Selin Yılmaz</span>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
