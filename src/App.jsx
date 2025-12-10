import React from 'react';
import '../data.jsx'
import { useState } from 'react';
import Home from './pages/Home.jsx';
import Button from './components/Button.jsx';
import './App.css';

function App() {
  const [isItActive, setActive] = useState(null);

  return (
    <>
      <nav>
          <h1>Extensions List</h1>
        <div className="button-box">
          <Button usrLabel={'Active'} className="nav-link" onClick={setActive(true)} />
          <Button usrLabel={'Inactive'} className="nav-link" onClick={() => setActiveList(false)} />
          <Button usrLabel={'All'} className="nav-link" onClick={() => setActiveList(null)} />
        </div>
      </nav>
      <Home activity={isItActive} />
    </>
    
  )
}

export default App;
