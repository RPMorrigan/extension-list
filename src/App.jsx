import React from 'react';
import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import Button from './components/Button.jsx';
import data from './data.json';
import './App.css';

function App() {
  const [theList, setList] = useState('all');

  const unfiltered = () => {
    return data;
  }

  const activeList = data.filter((item) => item.isActive === true);
  console.log(activeList);

  const inactiveList = data.filter((item) => item.isActive === false);
  console.log(inactiveList);

  useEffect(() => {
    if (showCard === 'all') {
      return unfiltered();

    } else if (setList === 'active') {
      return {
        activeList
        
      };

    } else if (showCard === 'inactive') {
      return {inactiveList};
    }
  }, [theList]
);
  return (
    <>
      <nav>
          <h1>Extensions List</h1>
        <div className="button-box">
          <Button usrLabel={'Active'} className="nav-link" onClick={() => setList('active')} />
          <Button usrLabel={'Inactive'} className="nav-link" onClick={() => setList('inactive')} />
          <Button usrLabel={'All'} className="nav-link" onClick={() => setList('all')} />
        </div>
      </nav>
      <Home data={theList} />
    </>
  )
}

export default App;
