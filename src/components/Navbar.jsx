import { useState, useEffect } from 'react';

function Navbar(){

  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the page is scrolled more than 50px, set the navbar as opaque
      if (window.scrollY > 200) {
        setIsOpaque(true);
      } else {
        setIsOpaque(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
      <div className="scroll-smooth">
        {/* <nav className="bg-[#706563]/40 backdrop-blur-none fixed top-0 z-50 
        text-black w-full h-[80px] flex items-center justify-evenly px-6 shadow-md">
         */}
        <nav
      className={`transition-all duration-300 py-4 fixed w-full h-[80px] top-0 z-50 flex items-center justify-evenly px-6 shadow-md ${
        isOpaque ? 'bg-[#6e1a24] backdrop-blur-none' : `bg-[#706563]/40 backdrop-blur-none fixed top-0 z-50 
        text-black w-full h-[80px] flex items-center justify-evenly px-6 shadow-md`
      }`}
    >

      {/* Navigation Links */}
      <ul className="flex space-x-16">
        <li>
          <a href="#projects" className="hover:text-white text-white/70 font-corinthia text-5xl">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-white text-white/70 font-corinthia text-5xl">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-white text-white/70 font-corinthia text-5xl">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    </div>
    );
}

export default Navbar;