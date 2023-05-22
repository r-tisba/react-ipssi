const Experience = ({ dateDebut, dateFin, typeExperience, nomEntreprise, adresseEntreprise, codePostale, children }) => {
    return (
        <>
            <div className="card cardExperience bg-dark py-3 mb-3">
                <h3 className="titreCard">{typeExperience} chez {nomEntreprise}</h3>
                <p>
                    Du {dateDebut} au {dateFin} | <span className="couleur">{nomEntreprise}</span> - {adresseEntreprise} ({codePostale})
                </p>
                {children}
            </div>
        </>
    );
}

export default Experience;