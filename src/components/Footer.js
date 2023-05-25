import "../style/footer.scss"
import logo from "../assets/image/Logo_Footer.png" 

function Footer(){
    return(
        <footer>
            <img src={logo} alt="Logo de l'agence Kasa" width="122px" height="40px"></img>
            <p>2020 Kasa. All rights reserved</p>
        </footer>  
    )
}
export default Footer