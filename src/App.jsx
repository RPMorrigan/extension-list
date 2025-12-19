// src/App.jsx

// (imports in order of appearance)
// useState hook
// nav buttons
// Home element
// BrowserRouter
// Styles

import Home from './pages/Home.jsx';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<Home list={theList} />} />
        </Routes>
    </div>
  )
}

export default App;
