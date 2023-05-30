import Slide from './Slide'
import '../style/fiche.scss'

function Fiche({ isData, updateData }) {  
        let FicheTitle = isData.title;
        let MySlide = isData.pictures;
        console.log(MySlide)
        let lengthSlide = MySlide.length
        console.log(lengthSlide)
        return (  
                <div> 
                <div className='flex-slide'>
                                {MySlide.map((item, index)=>
                                        (<Slide key={index} slide={item} lengthSlide={lengthSlide} />))}
                        </div>
                        <h1>{FicheTitle}</h1>
                </div>
        )
}
export default Fiche
