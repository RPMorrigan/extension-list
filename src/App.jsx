// src/App.jsx

// (imports in order of appearance)
// useState hook
// nav buttons
// Home element
// BrowserRouter
// Styles

import Button from './components/Button.jsx';
import Home from './pages/Home.jsx';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import './App.css';

// App component is going to hold our nav and router.
function App() {
  const [lamp, setLamp] = useState(false);

  // Holds current value of desired list.
  const theList = 'all';
    
  // Toggles lamp useState (boolean)
    const lightToggle = () => {
        setLamp(!lamp);
    }

  // Turning lamp on adds light-mode as a class name to relevant components.
  const mode = lamp ? 'light-mode' : '';
  // Toggles the button icon.
  const modeIcon = lamp ? 'images/icon-moon.svg' : 'images/icon-sun.svg';
  
  return (
    <div className={`wrapper ${mode}`}>
      {/* Contains the logo, page header, and light/dark mode button */}
      {/* 'mode' represents our on/off boolean */}
      <div className={`banner ${mode}`}>
        <img src="/images/logo.svg" />

        {/* Title */}
        <h2>Extensions</h2>

        {/* mode toggle */}
        <button className={`${mode} lModeButton`} onClick={lightToggle}>
            <img src={modeIcon} />
        </button>
      </div>
      <nav>
          <h1>Extensions List</h1>
          {/* Box makes it easier to style. */}
        <div className="button-box">
          {/* These change 'theList' value so that the 'Home' element will know which list to render */}
          <Link to="/active"><Button usrLabel={'Active'} className="nav-link" /></Link>
          <Link to="/inactive"><Button usrLabel={'Inactive'} className="nav-link" /></Link>
          <Link to="/"><Button usrLabel={'All'} className="nav-link" /></Link>
        </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home list={theList} />} />
          <Route path="/active" element={<Home list={'active'} />} />
          <Route path="/inactive" element={<Home list={'inactive'} />} />
        </Routes>
    </div>
  )
}

export default App;
