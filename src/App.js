import React, { useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import MonCv from "./components/MonCv";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import TestimonialsList from "./components/TestimonialsList";
import TestimonialForm from "./components/TestimonialForm";

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
