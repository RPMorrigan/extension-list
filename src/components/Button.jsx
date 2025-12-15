// Button
import React from 'react';

const Button = ({ usrLabel, ...rest }) => {
    // Do we actually need to keep the on click?
    return (
        <button
            {...rest}>
            {usrLabel}
        </button>
    );
};

export default Button;