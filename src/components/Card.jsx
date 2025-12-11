// components/Card.jsx
import Toggle from './Toggle.jsx';
import Button from './Button.jsx';

function Card({ item }) {
    const { id, logo, name, description } = item;

    return (
        <div className={`card + ${id}}`}>
            <div className='card-top'>
                <img src={logo} alt="card logo" />
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