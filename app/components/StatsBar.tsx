import Reveal from './Reveal';

const STATS = [
  { value: '5+', label: 'Projects' },
  { value: 'CE', label: 'Computer Engineering Student' },
  { value: 'Web · AI · Data', label: 'Focus Areas' },
  { value: 'Always', label: 'Learning, Always Building' },
];

export default function StatsBar() {
  return (
    <div className="bg-ink text-cream">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 py-9">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div
                className={`text-center md:text-left px-4 md:px-6 first:pl-0 ${
                  i > 0 ? 'md:border-l md:border-cream/10' : ''
                }`}
              >
                <p className="font-serif text-2xl md:text-3xl text-cream mb-1">{stat.value}</p>
                <p className="text-xs uppercase tracking-wider text-cream/50">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
