import { useParams } from "react-router-dom"
import Slide from '../components/Slide'
import '../assets/style/fiche.scss'
import StarOrange from '../assets/image/star-orange.png'
import StarGrey from '../assets/image/star-grey.png'
import Data from '../assets/data/annonce.json'
import Collapse from '../components/Collapse'
import Error from "./Error"
import { useEffect, useState } from "react"
import Ratinghousing from "../components/Ratinghousing"

function Fiche() {
        const [data, setData] = useState(null)
        const { idFiche } = useParams();

        useEffect(() => 
                {const dataFind = Data.find(item => item.id === idFiche);
                setData(dataFind)  
                },[idFiche])

        if (!data) { return <Error /> }
        
        let pictures = data.pictures;
        let title = data.title;
        let location = data.location;
        let buttons = data.tags;
        let profilName = data.host.name;
        let profilPicture = data.host.picture;
        let rating = data.rating;
        let description = data.description;
        let equipment = data.equipments;
        let equipmentMap =
                equipment.map(((item, index) => (
                        <ul key={index}>
                                <li key={index}>{item}</li>
                        </ul>)
                ));
        
        
        return   (
      
                < div className = 'main-contain' >                      
                        <div>
                                <Slide arrayOfSlide={pictures} />
                        </div>
                                <div className='flex-title-profil'>
                                                        
                                        <div>
                                                <h1>{title}</h1>
                                                <p>{location}</p>
                                
                                                {buttons.map((item, index) => (<button key={index}>{item}</button>))} 
                                
                                        </div>
                                        <div className='flex-profil'>
                                                <div className='flex-profil_withoutstars'>
                                                        <p>{profilName}</p>
                                                        <img src={profilPicture} alt='profil-fiche'></img>
                                                </div>
                                
                                                <div >
                                                        <Ratinghousing ratingValue={rating} starOrange={StarOrange} starGrey={StarGrey}/> 
                                                </div>        
                                        </div>
                                           
                        </div>
                        <div className="my-collapse">
                                <div className="collapse-flex">
                                        <div className="collapse-flex-column">
                                                <div className="margin-collapse-fiche">
                                                        <Collapse description={description} titledesc={"Description"} />
                                                </div>
                                                <div className="margin-collapse-fiche">
                                                        <Collapse equipmentMap={<div>{equipmentMap}</div>} titleequip={"Equipements"} />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div >
                )      
                         
}
        
        
export default Fiche;       




