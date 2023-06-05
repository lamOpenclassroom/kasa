import '../style/slide.scss';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

function Slide({arrayOfSlide}) {
    const [isCount, setIsCount] = useState(0);
    
    const slideRight = () => {
        isCount !== arrayOfSlide.length - 1 ? setIsCount(isCount + 1) : setIsCount(0);
    }
    
    const slideLeft = () => {
        setIsCount(isCount - 1);
        isCount !== 0 ? setIsCount(isCount - 1) : setIsCount(arrayOfSlide.length - 1);
    }

    return (
        
        <div> 
            <div className="slide">
                <div className={arrayOfSlide.length === 1 ? 'remove-arrow' : null}>
                    <FaChevronLeft onClick={slideLeft} className='left' size="6rem"/>
                    <FaChevronRight onClick={slideRight} className='right' size="6rem" /> 
                    <p className='slide-number'>{isCount + 1}/{arrayOfSlide.length}</p>
                </div>
                <img src={arrayOfSlide[isCount]} alt=''></img>
                
            </div>    
            
        </div>      
    )
}

export default Slide