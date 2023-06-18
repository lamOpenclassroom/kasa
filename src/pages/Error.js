import { Link } from "react-router-dom"
import "../assets/style/error.scss"
import Redirect from "../assets/image/404.png"

function Error() {
    return (
        <div className="error-flex">
            <div className="para-flex">
                <img src={Redirect} alt="erreur 404"></img>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link className="link" to="/">Retourner sur la page d'acceuil</Link>
            </div>   
        </div>
    )
}

export default Error