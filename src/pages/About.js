import "../assets/style/about.scss"
import Banner from '../components/Banner'
import Imagebanner from '../assets/image/montagne.png'
import Collapse from '../components/Collapse'
 
function About() {
    const titleFiab = "Fiabilité"; 
    const titleResp = "Respect";
    const titleServ = "Service";
    const titleSec = "Sécurité ";
    const descFiab = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
    const descResp = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const descServ = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const descSec = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
    const imgDesc = "Les montagnes";
    return (
        <div>
            <div>
                <Banner images={Imagebanner} imgDesc={imgDesc} />
            </div>
               
            <div className="collapse-flex-about">
                    <div className="collapse-flex-column-about"> 
                            <div className="margin-collapse-about">
                                <Collapse titleFiab={titleFiab} descFiab={descFiab} />
                            </div>
                            <div className="margin-collapse-about">
                                <Collapse titleResp={titleResp} descResp={descResp} />
                            </div>
                            <div className="margin-collapse-about">
                                <Collapse titleServ={titleServ} descServ={descServ} />
                            </div>
                            <div className="margin-collapse-about">
                                <Collapse titleSec={titleSec} descSec={descSec} />
                            </div>
                    </div>
            </div>
                   
        </div>
       
    )

    
}
export default About