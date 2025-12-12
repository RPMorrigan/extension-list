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
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// App component is going to hold our nav and router.
function App() {
  // Holds current value of desired list.
  const [theList, setList] = useState('all');

  return (
    <>
      {/* Our Router */}
          <BrowserRouter>
      <nav>
          <h1>Extensions List</h1>
          {/* Box makes it easier to style. */}
        <div className="button-box">
          {/* These change 'theList' value so that the 'Home' element will know which list to render */}
          <Link to="/"><Button usrLabel={'Active'} className="nav-link" onClick={() => setList('active')} /></Link>
          <Link to="/"><Button usrLabel={'Inactive'} className="nav-link" onClick={() => setList('inactive')} /></Link>
          <Link to="/"><Button usrLabel={'All'} className="nav-link" onClick={() => setList('all')} /></Link>
        </div>
        </nav>
        {/* TODO: Figure out what this does on the inside */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
          </BrowserRouter>
      <Home list={theList} />
    </>
  )
}

export default App;
