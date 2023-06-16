import "../style/banner.scss"

function Banner({ montain, beach, titleHome }) {
    
        return (
            <div className="title-home" >
                <img src={beach||montain} alt="la mer avec des roches et la montaggne" height="223px" width="100%"></img>  
                {titleHome}
            </div>
        )
    
        
  
}
export default Banner