import React, { useState } from "react";
import "./TestimonialForm.css";

function TestimonialForm({ addTestimonial, updateTestimonial, editMode, currentTestimonial, cancelEdit }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError("Veuillez entrer un nom");
      
      return;
    }

    if (!message) {
      setMessageError("Veuillez entrer un message");
      return;
    }

    const newTestimonial = {
      name: name,
      message: message,
    };

    if (editMode) {
      updateTestimonial(currentTestimonial.id, newTestimonial);
    } else {
      addTestimonial(newTestimonial);
    }

    setName("");
    setMessage("");
    setNameError("");
    setMessageError("");
  };

  const handleCancelEdit = () => {
    cancelEdit();
  };

  return (
    <div className="testimonial-form">
      <h1>{editMode ? "Modifier un témoignage" : "Ajouter un témoignage"}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        {nameError && <p className="error-message">{nameError}</p>}

        <label htmlFor="message">Message :</label>
        <textarea id="message" value={message} onChange={handleMessageChange}></textarea>
        {messageError && <p className="error-message">{messageError}</p>}

        {editMode ? (
          <>
            <button type="submit">Modifier</button>
            <button onClick={handleCancelEdit}>Annuler la modification</button>
          </>
        ) : (
          <button type="submit">Ajouter</button>
        )}
      </form>
    </div>
  );
}

export default TestimonialForm;
