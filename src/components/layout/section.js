const Section = ({ className, titre, children }) => {
    return (
        <>
            <div className="divSection">
                <h2 className="titreSection">{titre}</h2>
                <div className={className}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Section;