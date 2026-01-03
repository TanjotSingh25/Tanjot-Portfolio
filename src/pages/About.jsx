import './About.css'
import BackendIcon from '../assets/BackendIcon.png'
import WebDevIcon from '../assets/WebDevIcon.png'
import AIIcon from '../assets/AIIcon.png'
import TestingIcon from '../assets/TestingIcon.png'

function About() {
  const services = [
    {
      icon: BackendIcon,
      title: 'Backend Development',
      description: 'Scalable APIs and services in Go/Python with clean architecture, JWT auth, and reliable database integrations.'
    },
    {
      icon: WebDevIcon,
      title: 'Web Development',
      description: 'Modern web apps with React and REST backends, clean UI, maintainable components, and responsive layouts.'
    },
    {
      icon: AIIcon,
      title: 'AI Integration',
      description: 'Integrating LLMs into workflows for extraction, summarization, and automation, built with guardrails for accuracy and reliability.'
    },
    {
      icon: TestingIcon,
      title: 'Test Automation',
      description: 'UI and API automation frameworks plus tooling that improves coverage, speeds up regressions, and ships with confidence.'
    }
  ]

  const skillCategories = {
    'Programming Languages': ['Python', 'Golang', 'Java', 'C', 'JavaScript'],
    'Web & Backend': ['Django', 'Flask', 'React', 'Node.js', 'Express.js', 'REST APIs', 'JWT'],
    'Databases': ['Oracle PL/SQL', 'PostgreSQL', 'MongoDB', 'MySQL'],
    'Automation & Testing': ['TestComplete', 'TestExecute', 'SessionCreator', 'Selenium', 'API testing', 'JMeter'],
    'Data & Analysis': ['Pandas', 'NumPy', 'Matplotlib', 'OpenPyXL'],
    'DevOps & Tools': ['Docker', 'Nginx', 'RabbitMQ', 'Git/GitHub', 'Linux']
  }

  return (
    <div className="about-page">
      <h2 className="page-title">About Me</h2>
      <section className="section">
        <div className="section-content">
          <p>
            I'm Tanjot Singh, a Computer Science graduate from the University of Victoria with 16 months 
            of industry experience at BC Pension Corporation. I built and maintained UI/API automation in Python, 
            validated complex backend behavior with SQL/PL/SQL, and took ownership of tooling and documentation 
            that helped teams run tests faster and more reliably.
          </p>
          <p>
            On the build side, I like production-minded backend work: microservices, APIs, Docker, databases, and performance. 
            My projects include a Golang-based day-trading platform with containerized services and load balancing, a concurrent 
            Golang Discord music bot, and Django apps with clean data models and REST APIs. I'm looking for roles where strong 
            fundamentals and a quality mindset translate into systems people can trust.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">What I'm Doing</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category}</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About

