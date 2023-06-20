import "../assets/style/collapse.scss"
import HighChevron from '../assets/image/high-chevron.png'
import { useState } from "react";

function Collapse({description, equipmentMap,titledesc,titleequip,titleFiab,titleResp,titleServ,titleSec,descFiab,descResp,descServ,descSec}) { 
    const [closeCollapseDesc, setcloseCollapseDesc] = useState(true);
   
    function CloseDesc() {
        setcloseCollapseDesc(!closeCollapseDesc);
    }

    return (

        
        <div className="margin-collapse">
                <div className="collapse">
                    <p className="white-paragraph">{titledesc}{titleequip}{titleFiab}{titleResp}{titleServ}{titleSec}</p>
                    <img onClick={CloseDesc} className={closeCollapseDesc ? "chevron-rotate":"chevron"} src={HighChevron} alt="chevron en haut"></img>
                </div>
                <div className={closeCollapseDesc ? "hidden":"show"}>
                    <div className="collapse-description">
                        <p>{description}{descFiab}{descResp}{descServ}{descSec}</p>
                        {equipmentMap}
                    </div>   
                </div>
        </div>
        
    )
}
export default Collapse;