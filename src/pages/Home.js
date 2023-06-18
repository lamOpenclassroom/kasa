import Banner from '../components/Banner'
import beach from '../assets/image/image-home.png'
import Card from '../pages/Card'
import Data from '../assets/data/annonce.json'

function Home() {
   const titleHome = <h1>Chez vous, partout et ailleurs</h1>
    return (
        <div className='banner-card'>
            <Banner beach={beach} titleHome={titleHome} />
            <div className='figure-grid'>
            {Data.map((item) => 
            (<Card key={item.id} title={item.title} image={item.cover} id={item.id} />
            ))}
            </div>
        </div>
    )
}
export default Home