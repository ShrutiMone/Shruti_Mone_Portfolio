import React, { useState, useRef } from "react";
import Projectcard from "./Projectcard";
import pictoreal from '../assets/pictorealwebsite.jpg';
import datagen from '../assets/datagen.jpg';
import p2p from '../assets/Past2Present.jpg';
import "./Projects.css";

function Projectrow() {
  const scrollRef = useRef(null); // Reference to the scrollable row container
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position

  const cardSize = 350; // Size of each project card (square size)

  const scrollAmount = cardSize + 20; // Amount of pixels to scroll each time (card size + gap between cards)

  // Scroll left function
  const scrollLeft = () => {
    if (scrollRef.current) {
      const newScrollPosition = Math.max(scrollPosition - scrollAmount, 0); // Prevent going before the first project
      setScrollPosition(newScrollPosition);
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollRef.current) {
      const newScrollPosition = scrollPosition + scrollAmount;
      setScrollPosition(newScrollPosition);
      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const projects = [
    { id: 1, source: p2p, title: "Past2Present", desc: "Platform to exchange goods within college campus" },
    { id: 2, source: datagen, title: "DataGEN", desc: "AI Powered system to generate safe, secure, compliant and usable datasets by eliminating PII and PHI information" },
    { id: 3, source: pictoreal, title: "Pictoreal website", desc: "Pictoreal club website" }
  ];

  return (
    <div className="flex gap-6 items-center justify-center relative">
      {/* Left Arrow */}
      <button className="arrow left-arrow text-white" onClick={scrollLeft}>
        &lt;
      </button>

      {/* Projects Row */}
      <div className="projects-row w-[350px] sm:w-[380px] lg:w-[730px] xl:w-[1080px] flex gap-5" ref={scrollRef}>
        {projects.map((project) => (
          <Projectcard key={project.id} title={project.title} source={project.source} desc={project.desc} />
        ))}
      </div>

      {/* Right Arrow */}
      <button className="arrow right-arrow text-white" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}

export default Projectrow;
