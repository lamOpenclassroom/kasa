import "../style/collapse.scss"
import Banner from './Banner'
import montain from '../assets/image/montagne.png'
import Collapse from './Collapse'
 
function About() {
    const titleFiab = "Fiabilité"; 
    const titleResp = "Respect";
    const titleServ = "Service";
    const titleSec = "Sécurité ";
    const descFiab = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
    const descResp = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const descServ = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const descSec = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <div>
            <div>
                <Banner montain={montain}/>
            </div>
            <div  className="collapse-flex-about">
                <div className="collapse-flex-column-about"> 
                    <div className="collapse-flex-abouts">
                        <Collapse titleFiab={titleFiab} descFiab={descFiab} />
                        <Collapse titleResp={titleResp} descResp={descResp} />
                        <Collapse titleServ={titleServ} descServ={descServ} />
                        <Collapse titleSec={titleSec} descSec={descSec} />
                    </div>
                </div>
            </div>
        </div>
    )

    
}
export default About