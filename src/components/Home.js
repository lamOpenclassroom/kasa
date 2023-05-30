import Banner from './Banner'
import Card from './Card'
import Data from '../data/annonce.json'

function Home({ isData, updateData }) {
    return (
        <div>
            <Banner />
            <div className='figure-grid'>
            {Data.map((item) => 
            (<Card key={item.id} title={item.title} image={item.cover} data={Data} isData={isData} updateData={updateData} />
            ))}
            </div>
        </div>
    )
}
export default Home