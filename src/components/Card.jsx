// components/Card.jsx
import React from 'react';
import Toggle from '../components/Toggle.jsx';
import Button from '../components/Button.jsx';

function Card({ item }) {
    const { id, logo, name, description, isActive } = item;

    return (
        <div className={"card" + id (isActive ? 'active' : 'inactive')} >
            <div className='card-top'>
                <img src={ logo } />
                <h2>{ name }</h2>
                <p>{ description }</p>
            </div>
            <div className="card-bottom">
                <Button usrLabel={'Remove'} />
                <Toggle />
            </div>
        </div>
    );
}

export default Card;