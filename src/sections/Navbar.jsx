import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0b1120]/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div>
          <a
            href="#hero"
            className="text-3xl font-medium tracking-[0.08em] leading-none"
          >
            <span className="text-white font-light italic">Mounika</span>
            <span className="text-cyan-400 font-semibold not-italic">.</span>
          </a>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 text-lg font-medium hover:text-cyan-400 transition duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* MOBILE NAVIGATION DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-[#0b1120]/95 border-b border-white/10 px-6 py-6 absolute w-full left-0 z-40 transition-all duration-300">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 text-lg font-medium hover:text-cyan-400 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;