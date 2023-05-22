const Formation = ({annee, diplome, etablissement}) => {
    return ( 
        <>
            <div>
                {annee} : <span className="couleur">{diplome}</span> - {etablissement}
            </div>
        </>
     );
}
 
export default Formation;