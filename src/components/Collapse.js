import "../style/collapse.scss"
import HighChevron from '../assets/image/high-chevron.png'
import { useState } from "react";

function Collapse({ description, equipment }) { 
    const [closeCollapseDesc, setcloseCollapseDesc] = useState(false);
    const [closeCollapseEquip, setcloseCollapseEquip] = useState(false);

    function CloseDesc() {
        setcloseCollapseDesc(!closeCollapseDesc);
    }

    function CloseEquip() {
        setcloseCollapseEquip(!closeCollapseEquip);
    }
    
    return (
        <div className="collapse-flex">
              <div className="collapse-flex-column"> 
                <div className="collapse">
                    <p>Descripion</p>
                    <img onClick={CloseDesc} className={closeCollapseDesc ? "chevron-rotate":"chevron"} src={HighChevron} alt="chevron en haut"></img>
                </div>
                <div className={closeCollapseDesc ? "hidden":"show"}>
                    <div className="collapse-description">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className="collapse-flex-column">
                <div className="collapse">
                    <p>Equipements</p>
                    <img onClick={CloseEquip} className={closeCollapseEquip ? "chevron-rotate":"chevron"} src={HighChevron} alt="chevron en haut"></img>
                </div>
                <div className={closeCollapseEquip ? "hidden":"show"}>
                <div className="collapse-description">
                    {equipment.map((item, index) => (
                    <ul key={index}>
                       <li>{item}</li>
                    </ul>
                    ))}  
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Collapse;