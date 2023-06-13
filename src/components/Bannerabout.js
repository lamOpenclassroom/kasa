import "../style/banner.scss"
import montain from '../assets/image/montagne.png'

function Bannerabout(){
    return(
        <div className="title-home" >
            <img src={montain} alt="les montagnes avec un fleuve" height="223px" width="100%"></img>
        </div> 
    )
}
export default Bannerabout