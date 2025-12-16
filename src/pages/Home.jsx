// ./pages/Home.jsx
import { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import data from '../data.json';

// Home owns the items state so we can toggle isActive and re-render lists
function Home({ list }) {
    const [items, setItems] = useState(data);

    // Local storage for persisting data
    const STORAGE_KEY = 'extension-removed-ids';

    // Creates a type of black list for items which we have pressed removed on. It will make the removal persist until we say otherwise.
    const [removedIDs, setRemovedIDs] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                return JSON.parse(saved);
                // This catch was a suggestion by the AI assistant I used. it accounts for the possibility of an invalid JSON.
        } catch {
            return [];
        }
    }
    return [];
});

    // The list of items which are currently allowed to render(not on the removal list)
    const visibleItems = items.filter((item) => !removedIDs.includes(item.id));

    // Updates no change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(removedIDs));
    }, [removedIDs]);

    function updateItem(id, patch) {
        setItems(prev => prev.map(it => it.id === id ? { ...it, ...patch } : it));
    }

    // This takes the id from each entry and logs it into our array of items tagged for removal.
    function removeItem(id) {
        // We also use this method to add in the new ID because we aren't able to add digits/numbers to an array.
        setRemovedIDs([...removedIDs, id]);
    }

    // sorts active(enabled) and inactive(disabled) extensions so that the toggle will reflect it as well.
    const cList = list === 'active'
        ? visibleItems.filter(item => item.isActive === true)
        : list === 'inactive'
            ? visibleItems.filter(item => item.isActive === false)
            : visibleItems;

    function extensionReset() {
        setRemovedIDs([]);
    }
    
    return (
        <div className="main-box">
        <div className="card-container">
            {/* Maps out the current list to Card components */}
            {/* Ensures that we are working with an array */}
            {Array.isArray(cList) && cList.map(item => (
                <Card
                    key={item.id}
                    item={item}
                    onRemove={() => removeItem(item.id)}
                    onToggleActive={(value) => updateItem(item.id, { isActive: value })}
                />
            ))}
        </div>
            <div className="reset-box">
                <button className="reset-button" id="dataReset" onClick={extensionReset}>RESET</button>
            </div>
            </div>
    )
}

export default Home;