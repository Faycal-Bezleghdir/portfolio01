import "./MonCV.css";

function MonCv() {
  const competen = [
    {
      titre:
        "Quality Engineering Expert with Strong Background in Process Engineering and Petrochemicals",
      description:
        "Expert en ingénierie qualité avec une solide formation en génie des procédés et pétrochimique, combinée à des compétences en administration des ressources humaines et en programmation informatique. Fort d’une expérience significative dans l’industrie de l’emballage, ayant démontré une aptitude à développer des systèmes de contrôle de qualité efficaces et à optimiser les processus de production.",
    },
    {
      titre:
        "Collaborative Quality Engineering Expert with Proficiency in HR Management",
      description:
        "Expert en ingénierie qualité avec une solide formation en génie des procédés et pétrochimique, combinée à des compétences en administration des ressources humaines et en programmation informatique. Fort d’une expérience significative dans l’industrie de l’emballage, ayant démontré une aptitude à développer des systèmes de contrôle de qualité efficaces et à optimiser les processus de production.",
    },
    {
      titre: "Versatile Programming Expert with Strong Web Development Skills",
      description:
        "Compétent dans plusieurs langages de programmation, y compris Java, C# et JavaScript, avec une solide expérience en développement web avec des frameworks tels que React, Vue.js et Express. Cette combinaison unique de compétences techniques et de leadership permet d’aborder des problèmes complexes et de fournir des solutions innovantes, contribuant ainsi à l’amélioration continue de l’efficacité et de la qualité des processus.",
    },
  ];
  return (
    <div className="MonCv">
      <div className="page-container">
        {competen.map((competence, i) => (
          <div className="card" key={i}>
            <h1 className="card-title">{competence.titre}</h1>
            <p className="card-text">{competence.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonCv;
