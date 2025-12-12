// Button
import React from 'react';

const Button = ({ usrLabel = 'Remove', onClick, ...rest }) => {
    return (
        <button onClick={onClick}
            {...rest}>
            {usrLabel}
        </button>
    );
};

export default Button;