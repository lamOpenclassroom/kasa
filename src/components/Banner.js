import "../assets/style/banner.scss"

function Banner({images, title, imgDesc}) {
        return (
            <div className="title-home" >
                <img src={images} alt={imgDesc}></img>  
                {title}
            </div>
        )
}
export default Banner

