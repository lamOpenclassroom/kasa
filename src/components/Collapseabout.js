import '../style/collapseabout.scss'
import HighChevron from '../assets/image/high-chevron.png'
import { useState } from "react";

function Collapseabout() {
    const [closeCollapseDesc, setcloseCollapseDesc] = useState(false);

    function CloseDesc() {
        setcloseCollapseDesc(!closeCollapseDesc); //créer une fonction pour chaque collapse
    }

    return (
        <div className="collapse-flex-about">
            <div className="collapse-flex-column-about"> 
                        <div className="collapse">
                            <p>Fiabilité</p>
                            <img onClick={CloseDesc} className={closeCollapseDesc ? "chevron-rotate":"chevron"} src={HighChevron} alt="chevron en haut"></img>
                        </div>
                        <div className={closeCollapseDesc ? "hidden":"show"}>
                            <div className="collapse-description">
                                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                            </div>
                        </div>
            </div>
            <div className="collapse-flex-column-about"> 
                        <div className="collapse">
                            <p>Respect</p>
                            <img onClick={CloseDesc} className={closeCollapseDesc ? "chevron-rotate":"chevron"} src={HighChevron} alt="chevron en haut"></img>
                        </div>
                        <div className={closeCollapseDesc ? "hidden":"show"}>
                            <div className="collapse-description">
                                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                            </div>
                        </div>
            </div>
            <div className="collapse-flex-column-about"> 
                        <div className="collapse">
                            <p>Service</p>
                            <img onClick={CloseDesc} className={closeCollapseDesc ? "chevron-rotate":"chevron"} src={HighChevron} alt="chevron en haut"></img>
                        </div>
                        <div className={closeCollapseDesc ? "hidden":"show"}>
                            <div className="collapse-description">
                                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                            </div>
                        </div>
            </div>
            <div className="collapse-flex-column-about"> 
                        <div className="collapse">
                            <p>Sécurité</p>
                            <img onClick={CloseDesc} className={closeCollapseDesc ? "chevron-rotate":"chevron"} src={HighChevron} alt="chevron en haut"></img>
                        </div>
                        <div className={closeCollapseDesc ? "hidden":"show"}>
                            <div className="collapse-description">
                                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Collapseabout