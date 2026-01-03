import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import About from './pages/About'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Certificates from './pages/Certificates'

function App() {
  const [activePage, setActivePage] = useState('about')

  const renderPage = () => {
    switch(activePage) {
      case 'about':
        return <About />
      case 'resume':
        return <Resume />
      case 'portfolio':
        return <Portfolio />
      case 'certificates':
        return <Certificates />
      default:
        return <About />
    }
  }

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          <Navigation activePage={activePage} setActivePage={setActivePage} />
          {renderPage()}
        </div>
      </div>
    </div>
  )
}

export default App
