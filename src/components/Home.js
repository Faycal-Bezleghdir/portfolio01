import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-text">
          <h1>Faycal Bezleghdir</h1>
          <p className="home-text-p">
            Bonjour, je m'appelle Faycal Bezleghdir, je suis un développeur web
            full stack. J'ai une passion pour le développement web et j'aime
            créer des applications web.
          </p>
          <button className="btn">Voir mon travail</button>
        </div>
        <div className="home-img">
          <img src="picture.jpg" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Home;
