function Ratinghousing({ ratingValue, starOrange, starGrey }) {
	const arrayRating = [1, 2, 3, 4, 5];
    
	return (
		<div className="all-stars">
			{arrayRating.map((item, index) => ratingValue >= item ? 
                <img className="star" key={index} src={starOrange} alt="orange star"></img> : <img className="star" key={index} src={starGrey} alt="grey star"></img>
			)}
		</div>
	)
}

export default Ratinghousing