// src/App.jsx

// (imports in order of appearance)
// useState hook
// nav buttons
// Home element
// BrowserRouter
// Styles

import { useState } from 'react';
import Button from './components/Button.jsx';
import Home from './pages/Home.jsx';
import { Link, Routes, Route } from 'react-router-dom';

import './App.css';

// App component is going to hold our nav and router.
function App() {
  // Holds current value of desired list.
  const [theList, setList] = useState('all');

  return (
    <>
      <div className="banner">
        <img src="/images/logo.svg" />
        <h2>Extensions</h2>
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
    </>
  )
}

export default App;
