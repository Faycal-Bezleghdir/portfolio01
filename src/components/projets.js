import "./Projets.css";

function Projets() {
  const mesProjets = [
    {
      titre: "Application de Gestion de Restaurant en C#",
      description:
        "J'ai participé au développement d'une application en C# visant à améliorer la gestion des commandes dans un restaurant. En tant que développeur principal, j'ai conçu l'architecture logicielle et programmé les fonctionnalités clés",
      technos: ["C#", ".NET", "SQL Server"],
    },

    {
      titre: "Application Web pour Pizzeria avec Express et Vue.js",
      description:
        "J'ai développé une application web complète pour la gestion d'une pizzeria. Utilisant Express pour le backend et Vue.js pour le frontend, j'ai été responsable de la mise en œuvre des routes, de la création des modèles de données et de la conception des interfaces utilisateur",
      technos: ["Express", "Vue.js", "MongoDB"],
    },
    {
      titre: "Portefeuille de Carrière avec React",
      description:
        "J'ai réalisé un projet en React pour créer une interface utilisateur réactive et dynamique. Le projet était un site de portfolio destiné à mettre en valeur mes compétences et faciliter la recherche d'emploi. J'ai créé des composants, géré l'état et intégré des API",
      technos: ["React", "JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <div className="projets-section">
      <div className="container">
        <h1 className="titre">Mes Projets</h1>
        <div className="container-projets">
          {mesProjets.map((projet) => (
            <div className="projet">
              <h2 className="titre-projet">{projet.titre}</h2>
              <p className="description">{projet.description}</p>
              <h2 className="titre-techno">Technos utilisées</h2>
              <ul className="liste-techno">
                {projet.technos.map((techno) => (
                  <li className="techno">{techno}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projets;
