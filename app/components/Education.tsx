export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="heading-2 text-warm-black mb-8">Education</h2>
        <div className="space-y-8">
          <div className="bg-ivory p-6 rounded-md shadow-sm border border-warm-gray">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="heading-3 text-warm-black">Computer Engineering</h3>
              <span className="caption text-deep-burgundy">2020 - Present</span>
            </div>
            <p className="body-text text-warm-black mb-4">
              Bachelor&apos;s degree in Computer Engineering, currently in 4th year.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">Web Development</span>
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">AI/ML</span>
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">Software Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}