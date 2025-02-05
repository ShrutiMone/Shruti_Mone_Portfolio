import React, { useEffect, useRef } from 'react';
import './Scrollskills.css'; // You can adjust the styling here
import cpp from '../assets/c++.svg'
import css3 from '../assets/css3.svg'
import figma from '../assets/figma.svg'
import github from '../assets/github.svg'
import html5 from '../assets/html5.svg'
import java from '../assets/java.svg'
import js from '../assets/js.svg'
import nextjs from '../assets/nextjs2.svg'
import nodejs from '../assets/nodejs.svg'
import postgresql from '../assets/postgresql.svg'
import postman from '../assets/postman.svg'
import python from '../assets/python.svg'
import reactjs from '../assets/reactjs.svg'
import vitejs from '../assets/vitejs.svg'


const Skillsrow = () => {
    const scrollRef = useRef(null); // Ref to the scroll container

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                // Increment the scroll position for automatic scrolling
                scrollRef.current.scrollLeft += 5; // Adjust scroll speed here
                // If we've scrolled to the end, reset to start
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
        }, 20); // You can adjust the interval here for faster/slower scroll speed

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(scrollInterval);
    }, []);

    const cardsData = [
        { id: 1, source: html5 },
        { id: 2, source: css3 },
        { id: 3, source: js },
        { id: 4, source: github },
        { id: 5, source: cpp },
        { id: 6, source: java },
        { id: 7, source: python },
        { id: 8, source: nodejs },
        { id: 9, source: postgresql },
        { id: 10, source: postman },
        { id: 11, source: nextjs },
        { id: 12, source: reactjs },
        { id: 13, source: vitejs },
        { id: 14, source: figma },
    ];

    return (
        <div className="scroll-container">
            <div className="scroll-row">
                {cardsData.map((card) => (
                    <div className="skillcard flex items-center justify-center" key={card.id}>
                        <div className="skillcardinner" key={card.id}>
                            <img src={card.source} alt='skill'></img>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skillsrow;
