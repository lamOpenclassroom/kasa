import '../style/slide.scss';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

function Slide({arrayOfSlide }) {
    let [isCount, setIsCount] = useState(0);

    
    const lengthOfSlide = arrayOfSlide.length;
    console.log(lengthOfSlide) // longueur du tableau 
    //console.log(slide) // affiche chaque slide
    console.log(arrayOfSlide)//affiche l'index de chaque slide
    console.log(isCount)
    
    const slideRight = () => {
        setIsCount(isCount++);
        //setIsSlide(arrayOfSlide.filter((item, index) => (index === count)))
        console.log(isCount);
    }
    
    const slideLeft = () => {
        setIsCount(isCount--);
        //setIsSlide(arrayOfSlide.filter((item, index) => (index === count)))
        console.log(isCount)
     }
   

    return (
        
        <div> 

            <div className="slide" >
                <h1>fiche</h1>
                 <img src={arrayOfSlide[isCount]} alt=''></img>
                <FaChevronLeft onClick={slideLeft} className='left'  size="6rem" />
                <FaChevronRight onClick={slideRight} className='right' size="6rem" /> 
               
            </div>    
            
        </div>      
    )
}

export default Slide