import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-ivory bg-opacity-90 backdrop-blur-sm z-50 border-b border-warm-gray">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-serif font-bold text-warm-black">
          SY. <span className="hidden md:inline">Selin Yılmaz</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="#projects" className="text-warm-black hover:text-deep-burgundy transition-colors">
            Projects
          </Link>
          <Link href="#about" className="text-warm-black hover:text-deep-burgundy transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-warm-black hover:text-deep-burgundy transition-colors">
            Skills
          </Link>
          <Link href="#experience" className="text-warm-black hover:text-deep-burgundy transition-colors">
            Experience
          </Link>
          <Link href="#education" className="text-warm-black hover:text-deep-burgundy transition-colors">
            Education
          </Link>
          <Link href="#contact" className="text-warm-black hover:text-deep-burgundy transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-warm-black rounded-md text-warm-black hover:bg-warm-black hover:text-ivory transition-colors">
            Resume
          </button>
          <button className="p-2 text-warm-black hover:text-deep-burgundy transition-colors">
            {/* Theme toggle icon placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
