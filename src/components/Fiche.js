import Slide from './Slide'
import '../style/fiche.scss'

function Fiche({ isData, updateData }) {  
        let FicheTitle = isData.title;
        let ArrayOfSlide = isData.pictures;

        return (  
                <div> 
                <div className='flex-slide'>
                                {ArrayOfSlide.map((item, index)=>
                                        ( <Slide key={index} slide={item} index={index} arrayOfSlide={ArrayOfSlide} />))
                                } 
                        
                       </div>
                        <h1>{FicheTitle}</h1>
                </div>
        )
}
export default Fiche
