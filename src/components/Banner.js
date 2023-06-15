import "../style/banner.scss"

function Banner({ montain, beach, titleHome }) {
    
        return (
            <div className="title-home" >
                <img src={beach||montain} alt="la mer avec des roches" height="223px" width="100%"></img>  
                {titleHome}
            </div>
        )
    
        
  
}
export default Banner