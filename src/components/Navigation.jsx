import "./Navigation.css";

function Navigation({ activePage, setActivePage }) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Projects" },
    { id: "certificates", label: "Certificates" },
  ];

  return (
    <nav className="navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`nav-link ${activePage === item.id ? "active" : ""}`}
          onClick={() => {
            setActivePage(item.id);
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
