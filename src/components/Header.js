import { Link } from "react-router-dom"
import "../style/header.scss"
import logo from "../assets/image/Logo_Header.png"

function Header(){
    return (
        <header>
            <img src={logo} alt="logo de l'agence Kasa" ></img>
            <nav className="navigation">
                <Link to="/">Accueil</Link>
                <Link to="/Propos">A propos</Link>
            </nav>
        </header>
    )
}

export default Header