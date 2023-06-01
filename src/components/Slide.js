import '../style/slide.scss';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

function Slide({ slide, arrayOfSlide, index }) {
    const [isSlide, setIsSlide] = useState(slide); 
    const lengthOfSlide = arrayOfSlide.length;
    console.log(lengthOfSlide) // longueur du tableau 
    console.log(slide) // affiche chaque slide
    console.log(index)//affiche l'index de chaque slide
    

    const slideLeft = () => {
        console.log("slide gauche")
    }

    const slideRight = () => {
        console.log("slide droite");
    }
        
    

    return (
        <div> 

            <div className="slide" >
            
                <img className={index} src={isSlide} alt=''></img>
                <FaChevronLeft onClick={slideLeft} className='left'  size="6rem" />
                <FaChevronRight onClick={slideRight} className='right' size="6rem" />
               
            </div>    
            
        </div>      
    )
}

export default Slide