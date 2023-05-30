import '../style/slide.scss';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

function Slide({ slide, lengthSlide }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(slide)
    const slideLeft = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? lengthSlide - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
        console.log("slide gauche")
    }
    const slideRight = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? lengthSlide + 1 : currentIndex + 1;
        setCurrentIndex(newIndex)
        console.log("slide right")
    }
    return (
        <div> 
            
            <div className="slide">
                <img src={slide} alt=""></img>
                <FaChevronLeft onClick={slideLeft} className='left'  size="6rem" />
                <FaChevronRight onClick={slideRight} className='right' size="6rem" />
            </div>    
            
        </div>      
    )
}

export default Slide