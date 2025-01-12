import React from 'react';
import './Section.css';

const Section = ({ title, description, link }) => (
  <section className="h-screen flex flex-col justify-center items-center">
    {/* Title */}
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    
    {/* Description */}
    <p className="text-center mb-4">{description}</p>
    
    {/* See More Button */}
    <a href={link} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
      See More
    </a>
  </section>
);

export default Section;
