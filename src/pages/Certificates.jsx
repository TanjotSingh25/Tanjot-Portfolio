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

  const extracurriculars = [];
  //   {
  //     title: "Open Source Contributor",
  //     organization: "GitHub",
  //     period: "2021 – Present",
  //     description:
  //       "Contributed to various open-source projects, including React libraries and developer tools.",
  //   },
  //   {
  //     title: "Tech Blog Writer",
  //     organization: "Personal Blog",
  //     period: "2020 – Present",
  //     description:
  //       "Writing technical articles about web development, best practices, and tutorials.",
  //   },
  //   {
  //     title: "Hackathon Winner",
  //     organization: "Local Tech Community",
  //     period: "2022",
  //     description:
  //       "Won first place in a 48-hour hackathon with a innovative mobile application.",
  //   },
  //   {
  //     title: "Mentor",
  //     organization: "Coding Bootcamp",
  //     period: "2023 – Present",
  //     description:
  //       "Mentoring aspiring developers and helping them build their first projects.",
  //   },
  // ];

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

      <section className="extracurriculars-section">
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h3 className="section-title">Extracurriculars</h3>
        </div>
        <div className="extracurriculars-list">
          {extracurriculars.map((item, index) => (
            <div key={index} className="extracurricular-item">
              <div className="extracurricular-dot"></div>
              <div className="extracurricular-content">
                <h4 className="extracurricular-title">{item.title}</h4>
                <p className="extracurricular-organization">
                  {item.organization}
                </p>
                <p className="extracurricular-period">{item.period}</p>
                <p className="extracurricular-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Certificates;
