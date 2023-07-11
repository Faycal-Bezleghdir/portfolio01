import React, { useState } from "react";
import { Link } from "react-router-dom";
import projet1Image from "../images/projet1.png";
import projet2Image from "../images/projet2.png";
import projet3Image from "../images/projet3.png";
import "./Projets.css";

function Projets() {
  const mesProjets = [
    {
      id: 1,
      titre: "Application de Gestion de Restaurant en C#",
      description:
        "J'ai participé au développement d'une application en C# visant à améliorer la gestion des commandes dans un restaurant. En tant que développeur principal, j'ai conçu l'architecture logicielle et programmé les fonctionnalités clés",
      technos: ["C#", ".NET", "SQL Server"],
      image: projet1Image,
    },
    {
      id: 2,
      titre: "Application Web pour Pizzeria avec Express et Vue.js",
      description:
        "J'ai développé une application web complète pour la gestion d'une pizzeria. Utilisant Express pour le backend et Vue.js pour le frontend, j'ai été responsable de la mise en œuvre des routes, de la création des modèles de données et de la conception des interfaces utilisateur",
      technos: ["Express", "Vue.js", "MongoDB"],
      image: projet2Image,
    },
    {
      id: 3,
      titre: "Portefeuille de Carrière avec React",
      description:
        "J'ai réalisé un projet en React pour créer une interface utilisateur réactive et dynamique. Le projet était un site de portfolio destiné à mettre en valeur mes compétences et faciliter la recherche d'emploi. J'ai créé des composants, géré l'état et intégré des API",
      technos: ["React", "JavaScript", "HTML", "CSS"],
      image: projet3Image,
    },
  ];

  const [projetActif, setProjetActif] = useState(null);

  const afficherProjet = (projet) => {
    setProjetActif(projet);
  };

  return (
    <div className="projets-section">
      <div className="container">
        <h1 className="titre">Mes Projets</h1>
        <div className="container-projets">
          {mesProjets.map((projet) => (
            <div className="projet" key={projet.id}>
              <h2 className="titre-projet">{projet.titre}</h2>
              {projetActif === projet && (
                <>
                  <p className="description">{projet.description}</p>
                  <h2 className="titre-techno">Technos utilisées</h2>
                  <ul className="liste-techno">
                    {projet.technos.map((techno) => (
                      <li className="techno" key={techno}>
                        {techno}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <img src={projet.image} alt={projet.titre} className="projet-image" />
              <Link
                to={`/projet/${projet.id}`}
                className="bouton-afficher"
                onClick={() => afficherProjet(projet)}
              >
                Afficher
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projets;
