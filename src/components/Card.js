import '../style/card.scss'

function Card({ title,image }) {
    
    return (
      
        <figure>
            <img src={image} alt='appartement studio'></img>
            <figcaption>
                {title}
            </figcaption>  
        </figure>
       
    )
}

export default Card