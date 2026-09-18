export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="heading-2 text-warm-black mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="body-text text-warm-black mb-4">
              I&apos;m a passionate Computer Engineering student with expertise in web development, AI, and creative technical projects.
            </p>
            <p className="body-text text-warm-black mb-4">
              Currently in my 4th year of studies, I combine technical skills with creative problem-solving to build innovative solutions.
            </p>
          </div>
          <div className="border-l border-warm-gray pl-8">
            <h3 className="heading-3 text-warm-black mb-4">Technical Focus</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-deep-burgundy rounded-full mr-2"></span>
                <span className="body-text text-warm-black">Web Development</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-deep-burgundy rounded-full mr-2"></span>
                <span className="body-text text-warm-black">Artificial Intelligence</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-deep-burgundy rounded-full mr-2"></span>
                <span className="body-text text-warm-black">Creative Coding</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-deep-burgundy rounded-full mr-2"></span>
                <span className="body-text text-warm-black">Technical Problem Solving</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}