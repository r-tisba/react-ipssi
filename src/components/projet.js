const Projet = ({ img, nom, lien }) => {
    return (
        <>
            <div className="divProjet mt-5 mx-3">
                <h2>Je suis le projet : {nom} </h2>
                <img src={img} alt={nom} style={{ width: '300px', height: 'auto' }} />
                <a href={lien} title={nom}>
                    Redirection vers le projet
                </a>
            </div>
        </>
    );
}

export default Projet;