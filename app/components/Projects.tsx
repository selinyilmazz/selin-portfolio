export default function Projects() {
  return (
    <section id="projects" className="section bg-gray-100">
      <div className="container">
        <h2 className="heading-2 text-warm-black mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will go here */}
          <div className="bg-ivory p-6 rounded-md shadow-sm border border-warm-gray hover:shadow-md transition-shadow">
            <h3 className="heading-3 text-warm-black mb-2">Virexa</h3>
            <p className="body-text text-warm-black mb-4">
              A web application for visualizing and analyzing data.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">MongoDB</span>
            </div>
          </div>
          
          <div className="bg-ivory p-6 rounded-md shadow-sm border border-warm-gray hover:shadow-md transition-shadow">
            <h3 className="heading-3 text-warm-black mb-2">Unity Projects</h3>
            <p className="body-text text-warm-black mb-4">
              Interactive playable ads and creative technical experiments.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">Unity</span>
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">C#</span>
            </div>
          </div>
          
          <div className="bg-ivory p-6 rounded-md shadow-sm border border-warm-gray hover:shadow-md transition-shadow">
            <h3 className="heading-3 text-warm-black mb-2">Market Price Comparison</h3>
            <p className="body-text text-warm-black mb-4">
              A tool for comparing product prices across different markets.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">Flask</span>
              <span className="px-3 py-1 bg-warm-gray text-warm-black rounded-full text-sm">Web Scraping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}