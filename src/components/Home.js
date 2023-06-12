import Banner from './Banner'
import Card from './Card'
import Data from '../data/annonce.json'
import '../style/home.scss'

function Home() {
   
    return (
        <div className='banner-card'>
            <Banner />
            <div className='figure-grid'>
            {Data.map((item) => 
            (<Card key={item.id} title={item.title} image={item.cover} id={item.id} />
            ))}
            </div>
        </div>
    )
}
export default Home