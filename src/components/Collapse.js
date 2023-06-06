import "../style/collapse.scss"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
function Collapse({ description, equipment }) { //renomme le composant collapse
    function RemoveDescription(e) {
        console.log(e.target) 
    }
    
    return (
        <div className="collapse-flex">
            <div className="collapse-flex-column">
                <div className="collapse">
                    <p>Descripion</p>
                    <div className="chevron">
                        <FaChevronDown className="chevron-down"/>
                        <FaChevronUp onClick={RemoveDescription} className="chevron-up" />
                    </div>
                </div>
                <div className="collapse-description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="collapse-flex-column">
                <div className="collapse">
                    <p>Equipements</p>
                    <div className="chevron">
                        <FaChevronDown className="chevron-down" />
                        <FaChevronUp className="chevron-up" />
                    </div>
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