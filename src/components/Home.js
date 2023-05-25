import Banner from './Banner'
import Card from './Card'
import Data from "../data/annonce" 

function Home(){
    return(
        <div>
            <Banner />
            <div className='figure-grid'>
            {Data.map((item, key) => 
                (<Card key={key} title={item.title} image={item.cover} />))}
            </div>
        </div>
    )
}
export default Home