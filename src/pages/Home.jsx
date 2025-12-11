// ./pages/Home.jsx
import Card from '../components/Card.jsx';

function Home({data}) {
    return (
    <>
        {
            data.map((item) => {
                return(
                    <Card key={item.id} item={item} />)
            })
            }
    </>
    )
}

export default Home;