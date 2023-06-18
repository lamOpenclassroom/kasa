import { Link } from 'react-router-dom'
import '../assets/style/card.scss'

function Card({ title, image, id }) {

    return (         
        
        <figure>
            <Link to={`/Fiche/`+ id } >
                <img  src={image} alt='appartement studio'></img>
                <figcaption>
                    {title}
                </figcaption>
            </Link> 
        </figure>
        
    ) 
    
}

export default Card