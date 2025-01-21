import React, { useState, useEffect } from "react";
import "./Certifications.css";

const Certifications = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch("/data/Certificates.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.certificates && Array.isArray(data.certificates)) {
          setCertificates(data.certificates);
        } else {
          console.error("Fetched data does not contain 'certificates' array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching certificates:", error);
      });
  }, []);

  return (
    <div className="certifications-page">
      <h1 className="certifications-heading">Certifications</h1>
      {certificates.length === 0 ? (
        <p>Loading certifications or no certificates available...</p>
      ) : (
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="certificate-tile">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-image"
              />
              <div className="certificate-content">
                <h2 className="certificate-title">{certificate.title}</h2>
                <p className="certificate-description">{certificate.description}</p>
                <div className="certificate-tags">
                  {certificate.tags.map((tag, index) => (
                    <span key={index} className="certificate-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-button"
                >
                  View Certification
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Certifications;
