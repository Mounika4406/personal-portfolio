function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0b1120]/90 backdrop-blur-lg border-b border-white/10">
      <div className="relative w-full h-24 px-8 md:px-16 lg:px-24 flex items-center">
        {/* CENTER NAVIGATION — desktop only */}
        <div className="hidden md:flex w-full items-center justify-center">
          <ul className="flex items-center gap-16">
            <li>
              <a
                href="#hero"
                className="text-gray-300 text-xl font-medium hover:text-cyan-400 transition duration-300 relative group"
              >
                Home
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-300 text-xl font-medium hover:text-cyan-400 transition duration-300 relative group"
              >
                About
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-300 text-xl font-medium hover:text-cyan-400 transition duration-300 relative group"
              >
                Skills
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 text-xl font-medium hover:text-cyan-400 transition duration-300 relative group"
              >
                Projects
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 text-xl font-medium hover:text-cyan-400 transition duration-300 relative group"
              >
                Contact
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          </ul>
        </div>

        {/* LOGO — right-ish, not flush to the edge */}
        <div className="absolute top-1/2 -translate-y-1/2 right-16 sm:right-24 md:right-36 lg:right-48">
          <h1 className="text-4xl md:text-[2.75rem] font-medium tracking-[0.08em] cursor-pointer leading-none">
            <span className="text-white font-light italic">Mounika</span>
            <span className="text-cyan-400 font-semibold not-italic">.</span>
          </h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;