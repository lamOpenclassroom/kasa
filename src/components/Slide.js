import '../assets/style/slide.scss';
import ChevronLeft from '../assets/image/left-chevron.png'
import ChevronRight from '../assets/image/right-chevron.png'
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
                    <img src={ChevronLeft} alt='chevron à gauche' onClick={slideLeft} className='left'></img>
                    <img src={ChevronRight} alt='chevron à droite' onClick={slideRight} className='right'></img>
                    <p className='slide-number'>{isCount + 1}/{arrayOfSlide.length}</p>
                </div>
                <img className="image-apartment" src={arrayOfSlide[isCount]} alt=''></img>
                
            </div>    
            
        </div>      
    )
}

export default Slide