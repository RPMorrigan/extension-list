import { useState } from 'react';

const Toggle = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked) => {
        setChecked(nextChecked)
    }
    return (
        <>
            <Switch
                onChange={handleChange}
                checked={checked}
                className="react-switch"
            />
        </>
    )
};

export default Toggle;