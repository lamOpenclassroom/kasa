import Banner from '../components/Banner'
import Imagebanner from '../assets/image/image-home.png'
import Card from '../pages/Card'
import Data from '../assets/data/annonce.json'

function Home() {
    const titleHome = <h1>Chez vous, partout et ailleurs</h1>
    const imgDesc = "La plage avec des rochers";
    return (
        <div className='banner-card'>
            <Banner images={Imagebanner} title={titleHome}  imgDesc={imgDesc} />
            
            <div className='figure-grid'>
                {Data.map((item) => 
                (<Card key={item.id} title={item.title} image={item.cover} id={item.id} />
                ))}
            </div>
        </div>
    )
}
export default Home