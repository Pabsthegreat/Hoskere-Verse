import React from 'react';
import './ProfileSection.css';
const ProfileSection = () => (
  <section className="h-screen bg-black text-white flex flex-col justify-center items-center">
    {/* Profile Picture */}
    <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
    
    {/* Description Area */}
    <div className="mt-4 bg-white text-black w-3/4 h-40 p-4">
      <p>
        Welcome to my website! This is a brief introduction to who I am.
        Click below to explore more about my work and experiences.
      </p>
    </div>
  </section>
);

export default ProfileSection;
