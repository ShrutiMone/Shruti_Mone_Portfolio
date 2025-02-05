
import React from 'react';
import myphoto from '../assets/myphoto.JPG'

function Header() {
  const backgroundImage = myphoto; // Path to your image

  return (
    <div className="">
    <header
      className="relative h-[700px] bg-cover bg-center" // Adjust height as needed
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div
        className="absolute inset-y-0 left-0 w-3/5 backdrop-blur-[6px] flex items-center justify-center" // Blur and text positioning
        style={{ zIndex: 1 }} // Ensure text is on top
      >
        {/* <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-green-950 to-transparent"></div> Gradient Adjusted width for gradient */}
        <div className='flex flex-col items-start'>
        <h2 className="text-3xl font-semibold font-bold text-white/80 py-6" >Hi, I am</h2>
        <h1 className="text-8xl font-bold text-white font-corinthia">Shruti Mone</h1>
        <h2 className="text-2xl font-bold text-white/80" >A full stack web developer</h2>
        </div>
      </div>
    </header>
    </div>
  );
}

export default Header;