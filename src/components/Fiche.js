function Fiche({ isData, updateData }) {  
        console.log(isData)
        const FicheTitle = isData.title;
        return (    
                <div>   
                <h1>Ma Fiche : {FicheTitle} </h1>
                </div >
        )
}
export default Fiche
