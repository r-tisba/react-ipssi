const Lien = ({lien, nom}) => {
    return ( 
        <>
        <a href={lien} className="m-2" target="_blank" rel="noreferrer">{nom}</a>
        </>
     );
}
 
export default Lien;