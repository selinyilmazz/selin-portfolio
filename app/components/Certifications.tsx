export default function Certifications() {
  return (
    <section id="certifications" className="section bg-gray-100">
      <div className="container">
        <h2 className="heading-2 text-warm-black mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-ivory p-6 rounded-md shadow-sm border border-warm-gray hover:shadow-md transition-shadow">
            <h3 className="heading-3 text-warm-black mb-2">Web Development</h3>
            <p className="body-text text-warm-black mb-4">
              Advanced certification in modern web technologies.
            </p>
            <span className="caption text-deep-burgundy">2023</span>
          </div>
          
          <div className="bg-ivory p-6 rounded-md shadow-sm border border-warm-gray hover:shadow-md transition-shadow">
            <h3 className="heading-3 text-warm-black mb-2">AI Fundamentals</h3>
            <p className="body-text text-warm-black mb-4">
              Certification in artificial intelligence and machine learning basics.
            </p>
            <span className="caption text-deep-burgundy">2022</span>
          </div>
          
          <div className="bg-ivory p-6 rounded-md shadow-sm border border-warm-gray hover:shadow-md transition-shadow">
            <h3 className="heading-3 text-warm-black mb-2">Unity Developer</h3>
            <p className="body-text text-warm-black mb-4">
              Certification for Unity game and application development.
            </p>
            <span className="caption text-deep-burgundy">2021</span>
          </div>
        </div>
      </div>
    </section>
  );
}