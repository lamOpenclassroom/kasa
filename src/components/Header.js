import { Link, useLocation } from "react-router-dom"
import "../assets/style/header.scss"
import logo from "../assets/image/Logo_Header.png"

function Header() {
    const locationroot = useLocation().pathname;

    return (
        <header>
            <img src={logo} alt="logo de l'agence Kasa" ></img>
            <nav className="navigation" >
                <Link to="/" className={locationroot === "/" ? "active" : ""}>Accueil</Link>
                <Link to="/Propos" className={locationroot === "/Propos" ? "active" : ""}>A propos</Link>
            </nav>
        </header>
    )
}

export default Header
