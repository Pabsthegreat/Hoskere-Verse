import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
    { title: 'Curiosity', description: 'Who am I? Check out my story', seemore:'View Profile',link: '/profile' },
    { title: 'Professional', description: 'My professional highlights and more', seemore:'View Resume',link: '/resume' },
    { title: 'Dedicated', description: 'Explore how I have applied my knowledge in exciting applications', seemore:'Explore Projects',link: '/projects' },
    { title: 'Hardworking', description: 'I love learning about new things', seemore:'View Certifications',link: '/certifications' },
    { title: 'Creative', description: "What ticks this tech guy's brain?", seemore:'View BlogPosts',link: '/blogposts' },
  ];

  return (
    <div className="app-container">
      <Helmet>
        <title>Personal Website</title>
        <meta name="description" content="Welcome to my personal website. Learn more about my professional journey, projects, certifications, and blog posts." />
        <meta name="keywords" content="personal website, profile, resume, projects, certifications, blog posts" />
      </Helmet>
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
