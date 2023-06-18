import "../assets/style/banner.scss"

function Banner({ montain, beach, titleHome }) {
        return (
            <div className="title-home" >
                <img src={beach||montain} alt="la mer avec des roches et la montaggne"></img>  
                {titleHome}
            </div>
        )
}
export default Banner