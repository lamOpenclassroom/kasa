import { Link } from 'react-router-dom'
import '../style/card.scss'

function Card({ title, image, data, isData, updateData}) {
    const displayCard = ()=> {
        const getCard = data.find((item) => (item.title === title))
        updateData(getCard)
    }
    
    return (
        <figure onClick={() => displayCard()}>
            <Link to='/Fiche'  >
                <img  src={image} alt='appartement studio'></img>
                <figcaption>
                    {title}
                </figcaption>
            </Link> 
        </figure>
    ) 
}

export default Card