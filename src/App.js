import React, { useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import MonCv from "./components/MonCv";
import Projets from "./components/projets";
import Contact from "./components/Contact";
import TestimonialsList from "./components/TestimonialsList";
import TestimonialForm from "./components/TestimonialForm";
import ProjetDetail from "./components/ProjetDetail";

const initialTestimonials = [
  // Les témoignages existants vont ici...
  {
    id: 1,
    name: "John Doe",
    message: "Je suis très satisfait du travail de développement web réalisé par l'équipe. Ils ont su comprendre mes besoins et fournir un produit final de grande qualité.",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Leur expertise en développement web est exceptionnelle. Ils ont su créer un site web moderne et fonctionnel qui a dépassé mes attentes.",
  },
  {
    id: 3,
    name: "David Johnson",
    message: "J'ai été impressionné par leur professionnalisme et leur réactivité tout au long du processus de développement. Je les recommande vivement pour tout projet de développement web.",
  },
  {
    id: 4,
    name: "Emily Wilson",
    message: "L'équipe a fait un excellent travail pour créer un site web qui correspond parfaitement à ma vision. Je suis reconnaissante pour leur travail exceptionnel.",
  },
  {
    id: 5,
    name: "Michael Brown",
    message: "Je suis ravi des résultats obtenus grâce à leur expertise en développement web. Je les recommande sans hésitation pour tout projet web.",
  },
];

const mesProjets = [
  {
    id: 1,
    titre: "Application de Gestion de Restaurant en C#",
    description:
      "J'ai participé au développement d'une application en C# visant à améliorer la gestion des commandes dans un restaurant. En tant que développeur principal, j'ai conçu l'architecture logicielle et programmé les fonctionnalités clés",
    technos: ["C#", ".NET", "SQL Server"],
  },
  {
    id: 2,
    titre: "Application Web pour Pizzeria avec Express et Vue.js",
    description:
      "J'ai développé une application web complète pour la gestion d'une pizzeria. Utilisant Express pour le backend et Vue.js pour le frontend, j'ai été responsable de la mise en œuvre des routes, de la création des modèles de données et de la conception des interfaces utilisateur",
    technos: ["Express", "Vue.js", "MongoDB"],
  },
  {
    id: 3,
    titre: "Portefeuille de Carrière avec React",
    description:
      "J'ai réalisé un projet en React pour créer une interface utilisateur réactive et dynamique. Le projet était un site de portfolio destiné à mettre en valeur mes compétences et faciliter la recherche d'emploi. J'ai créé des composants, géré l'état et intégré des API",
    technos: ["React", "JavaScript", "HTML", "CSS"],
  },
];

function App() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  const addTestimonial = (testimonial) => {
    setTestimonials([...testimonials, testimonial]);
  };

  const editTestimonial = (updatedTestimonial) => {
    const updatedTestimonials = testimonials.map((testimonial) => {
      if (testimonial.id === updatedTestimonial.id) {
        return { ...testimonial, ...updatedTestimonial };
      }
      return testimonial;
    });
    setTestimonials(updatedTestimonials);
  };

  const deleteTestimonial = (testimonialId) => {
    const updatedTestimonials = testimonials.filter((testimonial) => testimonial.id !== testimonialId);
    setTestimonials(updatedTestimonials);
  };

  const updateTestimonial = (testimonialId, updatedTestimonial) => {
    const updatedTestimonials = testimonials.map((testimonial) => {
      if (testimonial.id === testimonialId) {
        return { ...testimonial, ...updatedTestimonial };
      }
      return testimonial;
    });
    setTestimonials(updatedTestimonials);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<MonCv />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projet/:id" element={<ProjetDetail mesProjets={mesProjets} />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/temoignages"
            element={
              <TestimonialsList
                testimonials={testimonials}
                deleteTestimonial={deleteTestimonial}
                updateTestimonial={updateTestimonial}
              />
            }
          />
          <Route path="/temoignages/ajouter" element={<TestimonialForm addTestimonial={addTestimonial} />} />
          <Route
            path="/temoignages/modifier/:id"
            element={<TestimonialForm testimonials={testimonials} editTestimonial={editTestimonial} />}
          />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
