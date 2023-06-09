import Slide from './Slide'
import '../style/fiche.scss'
import StarOrange from '../assets/image/star-orange.png'
import StarGrey from '../assets/image/star-grey.png'
import {useParams, useNavigate, useLocation} from "react-router-dom"
import Data from '../data/annonce.json'
import Collapse from './Collapse'




function Fiche() {
        const mylocationpath = useLocation().pathname
        console.log(mylocationpath)
        const { idFiche } = useParams();
        const dataFind = Data.find(item => item.id === idFiche);
        const navigate = useNavigate();
        let pictures = dataFind.pictures;
        let title = dataFind.title;
        let location = dataFind.location;
        let buttons = dataFind.tags;
        let profilName = dataFind.host.name;
        let profilPicture = dataFind.host.picture;
        let description = dataFind.description;
        let equipment = dataFind.equipments;
                
        //essaye de rappeler mylocationpath
        if (!mylocationpath) {               
                        
                        navigate('/*')
                        console.log("bidon")
                       
        } else {
                return (
                  
                <div className='main-contain'>
                        
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
                                                
                                        <div>
                                                <img src={StarOrange} alt='étoile orange'></img>
                                                <img src={StarOrange} alt='étoile orange'></img>
                                                <img src={StarOrange} alt='étoile orange'></img>
                                                <img src={StarGrey} alt='étoile grise'></img>
                                                <img src={StarGrey} alt='étoile grise'></img>
                                        </div>
                                </div>
                        </div>
                        <div>
                                <Collapse description={description} equipment={equipment} />
                        </div>
                       
                </div>       
                )
        }
        
                        
                
                
        }
        export default Fiche;
  
  



