// ./pages/Home.jsx
import { useState } from 'react';
import Card from '../components/Card.jsx';
import data from '../data.json';

// Home owns the items state so we can toggle isActive and re-render lists
function Home({ list }) {
    const [items, setItems] = useState(data);

    function updateItem(id, patch) {
        setItems(prev => prev.map(it => it.id === id ? { ...it, ...patch } : it));
    }

    const cList =
        list === 'active' ? items.filter(item => item.isActive === true)
            : list === 'inactive' ? items.filter(item => item.isActive === false)
                : items;

    return (
        <div className="card-container">
            {/* Maps out the current list to Card components */}
            {Array.isArray(cList) && cList.map(item => (
                <Card
                    key={item.id}
                    item={item}
                    onToggleActive={(value) => updateItem(item.id, { isActive: value })}
                />
            ))}
        </div>
    )
}

export default Home;