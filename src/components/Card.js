import { Link } from 'react-router-dom'
import '../style/card.scss'

function Card({ title, image, data}) {
   
    return (
        <figure>
            <Link to={`/Fiche/`+ data.id} >
                <img  src={image} alt='appartement studio'></img>
                <figcaption>
                    {title}
                </figcaption>
            </Link> 
        </figure>
    ) 
}

export default Card