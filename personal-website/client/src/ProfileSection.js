import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './ProfileSection.css';

const adjectives = [
  'creative',
  'passionate',
  'dedicated',
  'problem-solving',
  'innovative',
  'reliable',
  'hardworking',
  'curious',
  'adaptable',
  'communicative',
  'team player',
  'leading',
  'motivated',
  'enthusiastic',
  'self-driven',
  'goal-oriented',
  'focused',
  'detail-oriented',
  'organized',
  'professional',
  'efficient',
  'productive',
  'fun-loving',
];

const ProfileSection = () => {
  const [currentAdjective, setCurrentAdjective] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdjective((prev) => (prev + 1) % adjectives.length);
    }, 2000); // Change adjective every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="main">
      <Helmet>
        <title>Hoskere-verse | Your Tech Guy</title>
        <meta name="description" content="Welcome to Hoskere-verse. I'm your creative, passionate, and dedicated tech guy. Explore my work and learn more about me!" />
      </Helmet>
      <div className="description">
        <h3>Welcome to</h3>
        <h1 className='hoskere-verse'>Hoskere-verse</h1>
        <p>I'm your <span className="adjective-carousel">{adjectives[currentAdjective]}</span> tech guy.</p>
        <p>I'm excited to show you my work and tell you more about myself!</p>
      </div>
    </section>
  );
};

export default ProfileSection;
