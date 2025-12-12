// components/Card.jsx
import { useState } from 'react';
import Toggle from './Toggle.jsx';
import Button from './Button.jsx';

// descructure item prop
function Card({ item }) {
    const { id, logo, name, description } = item;
    // state for managing visibility
    const [hidden, setHidden] = useState(false);

    return (
        // Adds a card class combined with it's id.
        // Then toggles our hidden class in order to remove it.
        // The hidden class changes sets display to 'none'.
        <div className={`card ${id} ${hidden ? 'hidden' : ''}`}>

            {/* groups the top elements for easier formatting */}
            <div className='card-top'>
                <img src={logo} alt="card logo" />
                <h2>{ name }</h2>
                <p>{ description }</p>
            </div>
            {/* Groups elements */}
            <div className="card-bottom">
                {/* Adds text to the button and sets 'onRemove' as an arrow function */}
                {/* The arrow function changes our hidden state to true */}
                <Button usrLabel={'Remove'} onClick={() => setHidden(true)} />
                <Toggle />
            </div>
        </div>
    );
}

export default Card;