import Layout from './components/layout/layout'
import Projet from './components/projet'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aperture_Science_Logo.svg/1200px-Aperture_Science_Logo.svg.png'
          className='App-logo'
          alt='logo'
        />
        <p>LOGOOOOOOOOOOOO</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}

      <div className="container">

        {/* <div class="apropos">
          <h1 class="titreSection">À propos de moi</h1>
          <div>
            <p class="apropos_text">
              Je me présente, moi c'est <span class="couleur">Raphaël Tisba</span>, j'ai 21 ans. Ma passion pour les jeux-vidéo et l'informatique en général m'ont permis de découvrir la programmation et le développement web.
            </p>
            <p class="apropos_text">
              Je suis actuellement en 1ère année de <span class="couleur">Bachelor</span> (Fullstack & DevOps) à l'école <span class="couleur">IPSSI</span> de Saint-Quentin en Yvelines.
            </p>
            <p class="apropos_text">
              Je compte bien poursuivre mes études au-delà du BTS et continuer ma formation tout en gardant un pied dans le milieu professionnel.
            </p>
          </div>

          <div class="formation">
            <h1 class="titreSection">Formations</h1>
            <div>
              <p>BAC STI2D - Lycée Émilie de Breteuil</p>
              <p>BTS SIO - École IPSSI</p>
            </div>
          </div>

          <div class="experiences">
            <h1 class="titreSection">Expériences</h1>
            <div>
              <p>STAGE CHEZ AFFINISOFT - 8 SEMAINES</p>
              <div>Environnement technique : HTML, CSS, Drupal 8, PHP, Twig</div>
              <p>ALTERNANCE AU CYCLOTRON/ENEDIS LAB - 1 AN</p>
              <div>Environnement technique : HTML, CSS, PHP, jQuery, Doctrine</div>
            </div>
          </div>

          <div class="">
            <h1 class="titreSection"></h1>
            <div>

            </div>
          </div>

          <div class="liens">
            <h1 class="titreSection">Liens</h1>
            <div>
              <a href="https://www.linkedin.com/in/rapha%C3%ABl-tisba-422071206/" class="icone_linkedin" target="_blank">
                LinkedIn
              </a>
              <br></br>
              <a href="https://github.com/r-tisba" class="icone_github" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div> */}

        <Layout>
          Je suis dans la balise main
        </Layout>

        <div className='divProjets'>
          <Projet nom="Projet1" img={logo} lien="https://google.com" />
          <Projet nom="Projet2" img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aperture_Science_Logo.svg/1200px-Aperture_Science_Logo.svg.png" lien="https://google.com" />
          <Projet nom="Projet3" img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aperture_Science_Logo.svg/1200px-Aperture_Science_Logo.svg.png" lien="https://google.com" />
          <Projet nom="Projet4" img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aperture_Science_Logo.svg/1200px-Aperture_Science_Logo.svg.png" lien="https://google.com" />
          <Projet nom="Projet5" img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aperture_Science_Logo.svg/1200px-Aperture_Science_Logo.svg.png" lien="https://google.com" />
        </div>

      </div>
    </div>

  )
}

export default App
