import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <h1 className="resume-heading">My Resume</h1>
            <div className="resume-section">
                <h2>Education</h2>
                <p><strong>PES University, Bengaluru</strong> - Bachelor of Technology in Computer Science (2023-2027)</p>
                <p><strong>CGPA:</strong> 8.5 (till now)</p>
            </div>

            <div className="resume-section">
                <h2>Work Experience</h2>
                <p><strong>RAPID Centre, PES University</strong> - AI/ML Intern (Summer 2024)</p>
                <ul>
                    <li>Developed a diabetes management system using regression models and data analytics.</li>
                    <li>Wrote a research paper on generating diabetes-friendly daily meal and exercise plans.</li>
                </ul>
            </div>

            <div className="resume-section">
                <h2>Skills</h2>
                <ul>
                    <li><strong>Programming:</strong> C, Python, JavaScript</li>
                    <li><strong>Frameworks:</strong> React, Django, Flutter</li>
                    <li><strong>Databases:</strong> MySQL, MongoDB</li>
                    <li><strong>Other Tools:</strong> Git, VS Code, Homebrew</li>
                </ul>
            </div>

            <div className="resume-section">
                <h2>Certifications</h2>
                <ul>
                    <li>Google Data Analytics Professional Certificate</li>
                    <li>Meta Front-End Developer Specialization</li>
                    <li>Linux Foundation Open Source Development Specialization</li>
                </ul>
            </div>

            <div className="resume-section">
                <h2>Achievements</h2>
                <ul>
                    <li>Tech Head of Quotient Quiz Club, PESU</li>
                    <li>Organized Conquiztador, a large quiz event.</li>
                    <li>Developed an arcade-style game using Pygame and MySQL.</li>
                </ul>
            </div>
        </div>
    );
};

export default Resume;
