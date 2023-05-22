const Projet = ({ img, nom, lien }) => {
    return (
        <>
            <div className="divProjet card cardProjet p-2 m-2">
                <h2 className="titreCardProjet"> {nom} </h2>
                <img src={img} alt={nom} className="my-3" style={{ width: '240px', height: '240px' }} />
                <a href={lien} title={nom}>
                    Redirection vers le projet
                </a>
            </div>
        </>
    );
}

export default Projet;