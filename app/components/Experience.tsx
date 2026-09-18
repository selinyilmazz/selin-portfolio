export default function Experience() {
  return (
    <section id="experience" className="section bg-gray-100">
      <div className="container">
        <h2 className="heading-2 text-warm-black mb-8">Experience</h2>
        <div className="space-y-8">
          <div className="bg-ivory p-6 rounded-md shadow-sm border border-warm-gray">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="heading-3 text-warm-black">Software Developer Intern</h3>
              <span className="caption text-deep-burgundy">2023 - Present</span>
            </div>
            <p className="body-text text-warm-black mb-4">
              Developed web applications and contributed to AI projects.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">Python</span>
            </div>
          </div>
          
          <div className="bg-ivory p-6 rounded-md shadow-sm border border-warm-gray">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="heading-3 text-warm-black">Unity Developer</h3>
              <span className="caption text-deep-burgundy">2022 - 2023</span>
            </div>
            <p className="body-text text-warm-black mb-4">
              Created interactive playable ads and game prototypes.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">Unity</span>
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">C#</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}