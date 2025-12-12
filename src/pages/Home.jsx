// ./pages/Home.jsx
import Card from '../components/Card.jsx';
import data from '../data.json';

// Filter data based on the 'list' prop value
function Home({ list }) {
    function currentList() {
        if (list === 'active') {
            return data.filter(item => item.isActive === true);
        }
        else if (list === 'inactive') {
            return data.filter(item => item.isActive === false)
        }
        else {
            return data;
        }
    }

        const cList = currentList();

    return (
        <>
            {/* Maps out the current list to Card components */}
            {/* The agent suggested this, 'Guarding' the map. */}
            {/* TODO: Learn guarding. May be relevant to CyberSec */}
            {Array.isArray(cList) && cList.map(item =>
                (<Card
                    key={item.id}
                    item={item}
                />))
            }
    </>
    )
}

export default Home;