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
import Footer from './Footer.js';
import './App.css';

const App = () => {
  const sections = [
    { title: 'Profile', description: 'Learn more about me.', link: '/profile' },
    { title: 'Resume', description: 'Check out my professional experience.', link: '/resume' },
    { title: 'Projects', description: 'Explore my projects.', link: '/projects' },
    { title: 'Certifications', description: 'View my certifications.', link: '/certifications' },
    { title: 'BlogPosts', description: 'Read my thoughts and articles.', link: '/blogposts' },
  ];

  return (
    <div className="app-container">
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <ProfileSection />
                  {sections.map((section, index) => (
                    <Section key={index} {...section} />
                  ))}
                </div>
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/blogposts" element={<BlogPosts />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
