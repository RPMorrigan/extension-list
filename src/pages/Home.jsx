// ./pages/Home.jsx

import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import '../data.json';
import Card from '../components/Card.jsx';

function Home({data}) {

    const activeList = data.filter((item) => item.isActive === true);
    console.log(activeList);
    return (
        <>
            <Card item={activeList.} />
        </>
    )
}

export default Home;