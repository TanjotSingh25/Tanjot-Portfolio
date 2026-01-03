import { useState } from 'react'
import './Portfolio.css'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = ['All', 'Applications', 'Web development', 'UI/UX']

  const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'Web development', icon: '🛒' },
    { id: 2, title: 'Task Management App', category: 'Applications', icon: '✅' },
    { id: 3, title: 'Social Media Dashboard', category: 'UI/UX', icon: '📊' },
    { id: 4, title: 'Weather App', category: 'Applications', icon: '🌤️' },
    { id: 5, title: 'Music Player', category: 'Applications', icon: '🎵' },
    { id: 6, title: 'Blog Website', category: 'Web development', icon: '📝' },
    { id: 7, title: 'Fitness Tracker', category: 'Applications', icon: '💪' },
    { id: 8, title: 'Restaurant App', category: 'Applications', icon: '🍽️' },
    { id: 9, title: 'Portfolio Website', category: 'Web development', icon: '🎨' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category.toLowerCase() === activeFilter.toLowerCase()
      )

  return (
    <div className="portfolio-page">
      <h2 className="page-title">Portfolio</h2>
      <div className="portfolio-filters">
        {filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter.toLowerCase() ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.toLowerCase())}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3 className="project-title">{project.title}</h3>
            <span className="project-category">{project.category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio

