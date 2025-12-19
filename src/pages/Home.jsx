// ./pages/Home.jsx
import { useState } from 'react';
import Card from '../components/Card.jsx';
import data from '../data.json';
import '../App.css';

// Home has the items state so it can toggle isActive and re-render lists.
function Home() {
    const [items, setItems] = useState(data);
    const [currentFilter, setCurrentFilter] = useState('all');

    // Each list button needs a function which filters the state of items to include different vesions of the original list.
    const all = () => setCurrentFilter('all');
    const inactive = () => setCurrentFilter('inactive');
    const active = () => setCurrentFilter('active');

    // Function for remove button.
    const onRemove = (itemId) => {
        // Takes the item id as a prop.
        setItems(prevItems =>
            // We ensure we are working with the current list.
            prevItems.filter(item =>
                // Iterate through list, and filter them.
                item.id !== itemId
                // We will only include items that are not this item.
            ));
    }

        // Toggle the isActive state for a specific item by id.
        const cardToggle = (itemId, newActiveState) => {
            // Take 2 props. itemID and newActiveState so that we know which card we are changing.
            setItems(prevItems =>
                // Makes sure we're working with the latest list.
                prevItems.map(item =>
                    // go through the IDs of each card and if a card has the same id as the one we're looking for, we change the active state. Otherwise the item stays the same.
                    item.id === itemId ? { ...item, isActive: newActiveState } : item
                    // takes the ID of the relevant item then, if it evaluades the comparison as true (matching the correct item) it iterates through the current state and finds the one with the correct ID to mark as toggled and render.
                )
            );
        };

        // Filter items based on current filter. This means that we have taken the original data and sorted out the data that we need for each version of the list.
        const filteredItems = currentFilter === 'all'
            // if the current filter is or isn't 'all'
            ? items
            // if it is, give me back all items as is.
            : currentFilter === 'active'
                // if not look for cards marked 'active'
                ? items.filter(i => i.isActive === true)
                // a card is active if it's marked as true.
                : items.filter(i => i.isActive === false);
        // a card is inactive if it's false

        return (
            <div className="main-box">
                {/* Helps keep the buttons easy to align */}
                <div className="button-box">
                    {/* The title of the page and the filter buttons */}
                    <h1>Extensions</h1>
                    <button onClick={active}>Active</button>
                    <button onClick={inactive}>Inactive</button>
                    <button onClick={all}>all</button>
                </div>
                {/* Helps seperate the main content from the 'nav' */}
                <div className="card-container">
                    {/* Take items from filtered list. Iterate on them and map them their content into a Card */}
                    {filteredItems.map((item) =>
                        <Card
                            key={item.id}
                            // Take key as a prop and have it be the item's ID property.
                            item={item}
                            // Take the current item as a prop for deconstruction.
                            onToggleActive={(newState) => cardToggle(item.id, newState)}
                            // Run through the active/inactive status of the card using cardToggle to return an update to our active/inactive state.
                            onRemove={onRemove}
                        />)}
                </div>
            </div>
        )
    }

export default Home;