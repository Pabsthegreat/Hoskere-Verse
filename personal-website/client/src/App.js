import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import ProfileSection from './ProfileSection.js';
import Section from './Section.js';
import Profile from './pages/Profile.js';
import Resume from './pages/Resume.js';
import Projects from './pages/Projects.js';
import Certifications from './pages/Certifications.js';
import BlogPosts from './pages/BlogPosts.js';
import QuickLinks from './pages/QuickLinks.js';
import './App.css';
import Footer from './Footer.js';


const App = () => {
  const sections = [
    { title: 'Profile', description: 'Learn more about me.', link: '/profile' },
    { title: 'Resume', description: 'Check out my professional experience.', link: '/resume' },
    { title: 'Projects', description: 'Explore my projects.', link: '/projects' },
    { title: 'Certifications', description: 'View my certifications.', link: '/certifications' },
    { title: 'BlogPosts', description: 'Read my thoughts and articles.', link: '/blogposts' },
    { title: 'QuickLinks', description: 'Find useful links here.', link: '/quicklinks' },
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            <ProfileSection />
            {sections.map((section, index) => (
              <Section id={Section} key={index} {...section} />
            ))}
          </div>
        } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blogposts" element={<BlogPosts />} />
        <Route path="/quicklinks" element={<QuickLinks />} />
      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;
