import "../style/home.css"
import plage from '../image/image-home.png'

function Home(){
    return(
       <body>
            <div className="title-home" >
                <img src={plage} alt="la mer avec des roches" height="223px" width="100%"></img>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
       </body>  
    )
}
export default Home