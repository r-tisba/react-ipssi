import Layout from './components/layout/layout'
import Section from './components/layout/section'
import Apropos from './components/layout/apropos'
import Formation from './components/layout/formation'
import Experience from './components/layout/experience'
import Projet from './components/layout/projet'
import Lien from './components/layout/lien'
import logo from './logo.svg'
import logoHorizon from './logo_horizon.png'
import logoAzur from './logo_azur.png'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className="container mb-3">

        <Section className="divPerso" titre="À PROPOS DE MOI">
          <Apropos>
            <p className="apropos_text">
              Je me présente, moi c'est <span className="couleur">Raphaël Tisba</span>, j'ai 21 ans. Ma passion pour les jeux-vidéo et l'informatique en général m'ont permis de découvrir la programmation et le développement web.
            </p>
            <p className="apropos_text">
              Je suis actuellement en <span className="couleur">Bachelor</span> (Fullstack & DevOps) à l'école <span className="couleur">IPSSI</span> de Saint-Quentin en Yvelines.
            </p>
            <p className="apropos_text">
              Je compte bien poursuivre mes études au-delà du BTS et continuer ma formation tout en gardant un pied dans le milieu professionnel.
            </p>
          </Apropos>
        </Section>

        <Section className="divFormation" titre="Formation">
          <Formation annee="2019" diplome="BAC STI2D" etablissement="Lycée Émilie de Breteuil"></Formation>
          <Formation annee="2020-2022" diplome="BTS SIO" etablissement="École IPSSI SQY"></Formation>
        </Section>

        <Section className="divExperience" titre="Expériences">
          <Experience dateDebut="10/05/2020" dateFin="02/07/2020" typeExperience="Stage" nomEntreprise="Affinisoft" adresseEntreprise="Argenteuil" codePostale="95018">
            <div className='gras'>
              <span className="couleur">Environnement technique : </span> HTML, CSS, Drupal 8, PHP, Twig
            </div>
          </Experience>
          <Experience dateDebut="13/09/2021" dateFin="29/07/2022" typeExperience="Alternance" nomEntreprise="Cyclotron/Enedis Lab" adresseEntreprise="Puteaux" codePostale="92800">
            <div className='gras'>
              <span className="couleur">Environnement technique : </span> HTML, CSS, PHP, jQuery, Doctrine
            </div>
          </Experience>
        </Section>

        <Section className="divProjets" titre="Projets">
          <Projet nom="Projet" img={logo} lien="https://google.com" />
          <Projet nom="Azur" img={logoAzur} lien="https://github.com/r-tisba/azur_web" />
          <Projet nom="Horizon" img={logoHorizon} lien="https://github.com/PA-Azur/horizon" />
          <Projet nom="Syvios" img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aperture_Science_Logo.svg/1200px-Aperture_Science_Logo.svg.png" lien="https://google.com" />
          <Projet nom="AAA" img="https://www.netcom-informatique.fr/wp-content/uploads/2020/06/cropped-Netcom-logo-sigle.png" lien="https://google.com" />
        </Section>

        <Section className="divLiens" titre="Liens">
          <Lien lien="https://www.linkedin.com/in/rapha%C3%ABl-tisba-422071206/" nom="LinkedIn"></Lien>
          <Lien lien="https://github.com/r-tisba" nom="GitHub"></Lien>
          <Lien lien="mailto:r.tisba@ecole-ipssi.net" nom="Mail"></Lien>
        </Section>

      </div>
    </div>

  )
}

export default App
