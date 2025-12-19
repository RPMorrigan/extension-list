// ./pages/Home.jsx
import { useState } from 'react';
import Card from '../components/Card.jsx';
import data from '../data.json';
import '../App.css';

// Home owns the items state so we can toggle isActive and re-render lists
function Home() {
    const [items, setItems] = useState(data);
    const [currentFilter, setCurrentFilter] = useState('all');

    // Each list button needs a function which filters the state of items to include different vesions of the original list.
    const all = () => setCurrentFilter('all');
    const inactive = () => setCurrentFilter('inactive');
    const active = () => setCurrentFilter('active');

    // Toggle the isActive state for a specific item by id
    const cardToggle = (itemId, newActiveState) => {
        setItems(prevItems => 
            prevItems.map(item => 
                item.id === itemId ? { ...item, isActive: newActiveState } : item
            )
        );
    };

    // Filter items based on current filter
    const filteredItems = currentFilter === 'all' 
        ? items 
        : currentFilter === 'active' 
            ? items.filter(i => i.isActive === true)
            : items.filter(i => i.isActive === false);

    return (
        <div className="main-box">
            <div className="button-box">
            <h1>Extensions</h1>
                <button onClick={active}>Active</button>
                <button onClick={inactive}>Inactive</button>
                <button onClick={all}>all</button>
            </div>
            <div className="card-container">
                {filteredItems.map((item) =>
                    <Card
                        key={item.id}
                        item={item}
                        onToggleActive={(newState) => cardToggle(item.id, newState)}
                    />)}
        </div>
    </div>
    )
}

export default Home;