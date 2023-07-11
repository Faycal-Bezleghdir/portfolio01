import React from "react";
import { useParams } from "react-router-dom";
import "./projetDetail.css";

function ProjetDetail({ mesProjets }) {
  const { id } = useParams();

  // Recherche du projet correspondant à l'ID dans la liste de projets
  const projet = mesProjets.find((projet) => projet.id === parseInt(id));

  if (!projet) {
    return <div>Projet non trouvé.</div>;
  }

  return (
    <div className="projet-details"> {/* Ajoutez la classe CSS "projet-details" */}
      <h2>{projet.titre}</h2>
      <p>{projet.description}</p>
      <h3>Technos utilisées</h3>
      <ul>
        {projet.technos.map((techno, index) => (
          <li key={index}>{techno}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjetDetail;
