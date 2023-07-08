import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation du formulaire
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }

    // Validation de l'adresse e-mail
    if (!isValidEmail(email)) {
      alert("Veuillez inclure un @ dans l'adresse e-mail.");
      return;
    }

    // Création de l'objet formulaire
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Envoi du formulaire au serveur
    fetch("/votre-url-de-serveur", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Le formulaire a été envoyé avec succès
          alert("Le formulaire a été envoyé avec succès !");
          // Réinitialisation des champs du formulaire
          setName("");
          setEmail("");
          setMessage("");
        } else {
          // Une erreur s'est produite lors de l'envoi du formulaire
          alert("Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer plus tard.");
        }
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de l'envoi du formulaire :", error);
        alert("Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer plus tard.");
      });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="text" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea id="message" value={message} onChange={handleMessageChange}></textarea>
          </div>
          <button className="button" type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
