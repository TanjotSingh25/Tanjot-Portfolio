import "./Resume.css";

function Resume() {
  const education = [
    {
      degree:
        "Bachelor of Science in Computer Science with Software System Options",
      institution: "University of Victoria",
      period: "2021 - 2025",
      location: "Victoria, BC, Canada",
      gpa: "3.86 / 4.0",
    },
  ];

  const experience = [
    {
      title: "Software Developer",
      company: "BC Pensions",
      period: "May, 2023 – Aug, 2024",
      duration: "16 months",
      location: "Victoria, BC",
      description:
        "Worked on quality engineering and internal tooling to improve release confidence across UI and API layers. \
        Built reusable Python-based automation in TestComplete, validated REST APIs with Postman, and verified system behavior using Oracle SQL/PL/SQL. \
        Also analyzed performance results from JMeter runs by building Python pipelines and reporting metrics for investigations.",
      responsibilities: [
        "Built and maintained UI regression automation in TestComplete using reusable Python utilities.",
        "Created stable end-to-end workflows to improve repeatability and reduce flaky failures.",
        "Validated REST APIs using Postman and Python scripts; cross-checked responses with Oracle SQL queries.",
        "Wrote complex SQL/PL/SQL queries on large Oracle schemas to validate behavior and debug defects.",
        "Built Python data pipelines (Pandas/NumPy) to parse large CSV and JMeter logs.",
        "Produced performance metrics and charts to support bottleneck and anomaly investigations.",
        "Designed and implemented a click-and-record test authoring tool for non-technical QA users.",
        "Implemented SessionCreator-based remote execution to enable distributed multi-node test runs.",
        "Reduced manual QA effort by ~30% through tooling and workflow automation.",
        "Collaborated with developers, BAs, and QA via Git/GitHub, documentation, and onboarding support.",
      ],
    },
    {
      title: "Teaching Assistant, CSC 361 (Networks & Communications)",
      company: "University of Victoria",
      period: "Sept, 2025 – Dec, 2025",
      duration: "4 months",
      location: "Victoria, BC",
      description:
        "Led weekly networking labs and supported students as they applied theory through hands-on exercises. \
        Explained core concepts clearly, helped troubleshoot lab issues, and kept sessions organized so students could progress efficiently and confidently.",
      responsibilities: [
        "Led weekly lab sessions and guided students through networking exercises and deliverables.",
        "Explained core networking concepts in clear steps and adapted explanations to different learning styles.",
        "Helped students troubleshoot and debug lab work in real time during sessions.",
        "Answered technical questions and reinforced practical problem-solving habits.",
        "Coordinated with the course team to keep labs aligned with learning outcomes and pacing.",
        "Provided feedback and guidance to help students improve understanding and submissions.",
      ],
    },
  ];

  return (
    <div className="resume-page">
      <h2 className="page-title">Resume</h2>
      <section className="resume-section">
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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h3 className="section-title">Education</h3>
        </div>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-title">{edu.degree}</h4>
                <p className="timeline-institution">{edu.institution}</p>
                <p className="timeline-period">{edu.period}</p>
                <p className="timeline-location">{edu.location}</p>
                <p className="timeline-location">GPA : {edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
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
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h3 className="section-title">Experience</h3>
        </div>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="timeline-title">{exp.title}</h4>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-period">
                  {exp.period} • {exp.duration}
                </p>
                <p className="timeline-location">{exp.location}</p>
                <p className="timeline-description">{exp.description}</p>
                {exp.responsibilities && (
                  <ul className="timeline-responsibilities">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="download-resume-container">
        <a 
          href="/Tanjot_Singh_Resume.pdf" 
          download="Tanjot_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-resume-btn"
        >
          <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
