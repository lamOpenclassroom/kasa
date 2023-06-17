import { useParams } from "react-router-dom"
import Slide from './Slide'
import '../style/fiche.scss'
import StarOrange from '../assets/image/star-orange.png'
import StarGrey from '../assets/image/star-grey.png'
import Data from '../data/annonce.json'
import Collapse from './Collapse'
import Error from "./Error"

function Fiche() {
        const { idFiche } = useParams();
        const dataFind = Data.find(item => item.id === idFiche);

        if (dataFind === undefined) {
                return <Error />;
        }
        
        let pictures = dataFind.pictures;
        let title = dataFind.title;
        let location = dataFind.location;
        let buttons = dataFind.tags;
        let profilName = dataFind.host.name;
        let profilPicture = dataFind.host.picture;
        let description = dataFind.description;
        let equipment = dataFind.equipments;
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
                                
                                                <div className="all-stars">
                                                        <img className="star" src={StarOrange} alt='étoile orange'></img>
                                                        <img className="star" src={StarOrange} alt='étoile orange'></img>
                                                        <img className="star" src={StarOrange} alt='étoile orange'></img>
                                                        <img className="star" src={StarGrey} alt='étoile grise'></img>
                                                        <img className="star" src={StarGrey} alt='étoile grise'></img>
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




