import './Resume.css'

function Resume() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Your University',
      period: '2018 – 2022',
      location: 'City, Country'
    }
  ]

  const experience = [
    {
      title: 'Senior Software Developer',
      company: 'Tech Company Inc.',
      period: 'Jan, 2023 – Present',
      duration: '1+ yr',
      location: 'City, Country',
      description: 'Leading development of scalable web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.',
      responsibilities: [
        'Developed and maintained multiple web applications',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines for automated deployments',
        'Optimized application performance and reduced load times'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Startup Solutions',
      period: 'Jun, 2021 – Dec, 2022',
      duration: '1 yr 6 mo',
      location: 'City, Country',
      description: 'Built responsive web applications and RESTful APIs. Worked closely with designers to implement pixel-perfect UIs.',
      responsibilities: [
        'Developed new features and implemented UI designs',
        'Integrated third-party APIs and payment gateways',
        'Collaborated with backend team for seamless data flow',
        'Participated in agile development processes'
      ]
    }
  ]

  return (
    <div className="resume-page">
      <h2 className="page-title">Resume</h2>
      <section className="resume-section">
        <div className="section-header">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="section-header">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                <p className="timeline-period">{exp.period} • {exp.duration}</p>
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
    </div>
  )
}

export default Resume

