import "../style/banner.scss"
import plage from '../assets/image/image-home.png'

function Banner(){
    return(
        <div className="title-home" >
            <img src={plage} alt="la mer avec des roches" height="223px" width="100%"></img>
            <h1>Chez vous, partout et ailleurs</h1>
        </div> 
    )
}
export default Banner