// components/Card.jsx
import { useState, useEffect, useRef } from 'react';
import Toggle from './Toggle.jsx';
import Button from './Button.jsx';

// descructure item prop
function Card({ item, onToggleActive }) {
    const { id, logo, name, description, isActive } = item;
    const [hidden, setHidden] = useState(false);
    
    // local visual state so the switch can animate before the parent list updates
    const [localChecked, setLocalChecked] = useState(isActive);
    const timerRef = useRef(null);

    useEffect(() => {
        setLocalChecked(isActive);
    }, [isActive]);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    if (hidden) return null;

    return (

        // Adds a card class combined with it's id.
        <div className={`card ${id}`}>

            {/* groups the top elements for easier formatting */}
            <div className='card-top'>
                <img src={logo} alt="card logo" />
                <div className="card-text">
                <h2>{ name }</h2>
                    <p>{description}</p>
                    </div>
            </div>

            {/* Groups elements */}
            <div className="card-bottom">

                {/* Adds text to the button and hides locally until refresh */}
                <Button usrLabel={'Remove'} onClick={() => setHidden(true)} />
                <Toggle
                    checked={localChecked}
                    onChange={(next) => {

                        // update local visual state immediately so the switch animates
                        setLocalChecked(next);

                        // Waits for the actual list update to happen (~300ms)
                        if (timerRef.current) clearTimeout(timerRef.current);
                        timerRef.current = setTimeout(() => {
                            onToggleActive && onToggleActive(next);
                            timerRef.current = null;
                        }, 300);
                    }}
                />
            </div>
        </div>
    );
}

export default Card;