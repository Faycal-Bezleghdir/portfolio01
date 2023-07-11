import React, { useState } from "react";
import "./TestimonialsList.css";
import TestimonialForm from "./TestimonialForm";

function TestimonialsList({ testimonials, addTestimonial, updateTestimonial, deleteTestimonial }) {
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditMode(false);
    setCurrentTestimonial(null);
  };

  const handleEditTestimonial = (testimonial) => {
    setEditMode(true);
    setCurrentTestimonial(testimonial);
    setShowForm(true);
  };

  const handleDeleteTestimonial = (testimonialId) => {
    deleteTestimonial(testimonialId);
  };

  return (
    <div className="testimonials-list">
      <h1>Liste des témoignages</h1>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial" key={index}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.message}</p>
          <button
            onClick={() => handleEditTestimonial(testimonial)}
            className="testimonial-edit-button" // Ajout de la classe ici
          >
            Modifier
          </button>
          <button
            onClick={() => handleDeleteTestimonial(testimonial.id)}
            className="testimonial-delete-button"
          >
            Supprimer
          </button>
        </div>
      ))}
      {showForm && (
        <TestimonialForm
          addTestimonial={addTestimonial}
          updateTestimonial={updateTestimonial}
          editMode={editMode}
          currentTestimonial={currentTestimonial}
          cancelEdit={toggleForm}
        />
      )}
    </div>
  );
}

export default TestimonialsList;
