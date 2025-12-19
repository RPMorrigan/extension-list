// ./pages/Home.jsx
import { useState } from 'react';
import Card from '../components/Card.jsx';
import data from '../data.json';
import '../App.css';

// Home owns the items state so we can toggle isActive and re-render lists
function Home() {
    const [items, setItems] = useState(data);

    // Each list button needs a function which filters the state of items to include different vesions of the original list.
    const all = () => setItems(data);
    const inactive = () => setItems(items.filter((i) => i.isActive === false));
    const active = () => setItems(items.filter((i) => i.isActive === true));

    const cardToggle = () => !items.isActive;

    return (
        <div className="main-box">
            <div className="button-box">
            <h1>Extensions</h1>
                <button onClick={active}>Active</button>
                <button onClick={inactive}>Inactive</button>
                <button onClick={all}>all</button>
            </div>
            <div className="card-container">
                {items.map((item) =>
                    <Card
                        item={item}
                        onToggleActive={cardToggle}
                    />)}
        </div>
    </div>
    )
}

export default Home;