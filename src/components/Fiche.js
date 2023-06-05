import Slide from './Slide'
import '../style/fiche.scss'
import { useParams } from "react-router-dom"
import Data from '../data/annonce.json'

function Fiche () {  
        const {idFiche} = useParams();
        const dataFind = Data.find(item => item.id === idFiche);
        let pictures = dataFind.pictures;
        let title = dataFind.title;
        return (  
                <div> 
                        <div>        
                                  <Slide arrayOfSlide={pictures}/> 
                        </div>
                        <h1>{title}</h1>    
                </div>
        )
}

export default Fiche
