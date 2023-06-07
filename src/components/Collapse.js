//Pour toutes le icones importe les de la maquettes
import "../style/collapse.scss"
import HighChevron from '../assets/image/high-chevron.png'
import { useState } from "react";

function Collapse({ description, equipment }) { 
//utilise un seul chevron que tu pourras changer de rotation
//useState pour ouvrir ou fermer => voir le site en favoris pour ouvrir ou fermer la description et faire une rotation du chevron
// Apploquer true ou false pour les 2 collapses  
    const [openChevron, setOpenChevron] = useState("show");
    function CloseCollapse(e) {
        console.log(openChevron)
        const eventClick = e.target.className;
        console.log(eventClick)
        eventClick === "chevron" ? setOpenChevron("hidden") : setOpenChevron("show");
        openChevron === "hidden" ? setOpenChevron("show") : setOpenChevron("hidden"); 
    }
        
    
    return (
        <div className="collapse-flex">
              <div className="collapse-flex-column"> 
                <div className="collapse">
                    <p>Descripion</p>
                    <img onClick={CloseCollapse} className="chevron" src={HighChevron} alt="chevron en haut"></img>
                </div>
                <div className={openChevron}>
                    <div className="collapse-description">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className="collapse-flex-column">
                <div className="collapse">
                    <p>Equipements</p>
                    <img className="chevron" src={HighChevron} alt="chevron en haut"></img>
                </div>
                
                <div className="collapse-description">
                    {equipment.map((item, index) => (
                    <ul key={index}>
                       <li>{item}</li>
                    </ul>
                    ))}  
                </div>
            </div>
        </div>
    )
}
export default Collapse;