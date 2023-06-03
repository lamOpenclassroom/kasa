//import Slide from './Slide'
import '../style/fiche.scss'
import { useParams } from 'react-router-dom';


function Fiche () {  
        const {data} = useParams();
        console.log(data)
       
        return (  
                <div> 
                        <div className='flex-slide'>        
                                 {/* <Slide id={idFiche} /> */}
                        </div>
                        <h1>Fiche : </h1>    
                </div>
        )
}

export default Fiche
