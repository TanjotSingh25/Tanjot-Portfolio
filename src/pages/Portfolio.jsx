import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Day Trading App - FullStack",
      icon: "📈",
      link: "https://github.com/TanjotSingh25/DayTradingApp-FullStack",
    },
    {
      id: 2,
      title: "Portfolio Website - React",
      icon: "👨‍💻",
      link: "https://github.com/TanjotSingh25/Tanjot-Portfolio",
    },
    {
      id: 3,
      title: "Discord Bot - Golang",
      icon: "🤖",
      link: "https://github.com/TanjotSingh25/Golang-Discord-Bot",
    },
    {
      id: 4,
      title: "Auction Portal - Django",
      icon: "🔨",
      link: "https://github.com/TanjotSingh25/Auction_Portal",
    },
    {
      id: 5,
      title: "Knowledgepedia - Django",
      icon: "📚",
      link: "https://github.com/TanjotSingh25/Knowledgepedia",
    },
    {
      id: 6,
      title: "Todo List - React",
      icon: "✅",
      link: "https://github.com/TanjotSingh25/React-Todo_List",
    },
    {
      id: 7,
      title: "AI Practicals - Python",
      icon: "🧠",
      link: "https://github.com/TanjotSingh25/Minesweeper-AI",
    },
    {
      id: 8,
      title: "Solar System Website - HTML/CSS/JS",
      icon: "🪐",
      link: "https://github.com/TanjotSingh25/Our-Solar-System",
    },
    {
      id: 9,
      title: "IMDB Clone - HTML/CSS/JS",
      icon: "🎬",
      link: "https://github.com/TanjotSingh25/Internet-Movie-Database",
    },
  ];

  return (
    <div className="portfolio-page">
      <h2 className="page-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <a 
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
