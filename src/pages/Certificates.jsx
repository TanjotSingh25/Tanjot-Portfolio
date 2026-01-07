import "./Certificates.css";

function Certificates() {
  const certificates = [
    {
      title: "CS50x2023",
      issuer: "Harvard University",
      date: "2023",
      description:
        "A rigorous introduction to computer science and programming, covering algorithms, data structures, and languages including C, Python, and SQL.",
    },
    {
      title: "CS50x2023 Web Dev",
      issuer: "Harvard University",
      date: "2023",
      description:
        "Focuses on the design and implementation of scalable web applications using Python, JavaScript, and SQL, utilizing frameworks like Django and React.",
    },
    {
      title: "React Essentials + Advanced",
      issuer: "Linkedin Learning",
      date: "2023",
      description:
        "A comprehensive guide to building modern user interfaces, mastering core concepts like hooks and state management alongside advanced component patterns.",
    },
  ];

  return (
    <div className="certificates-page">
      <h2 className="page-title">Certificates & Extracurriculars</h2>
      <section className="certificates-section">
        <div className="section-header">
          <svg
            className="section-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <h3 className="section-title">Certificates</h3>
        </div>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-icon">🏆</div>
              <h4 className="certificate-title">{cert.title}</h4>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">{cert.date}</p>
              <p className="certificate-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Certificates;
