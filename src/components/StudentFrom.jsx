import { useState } from "react";
import "./studentfrom.css";

function StudentForm({ onAjouterEtudiant }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [anneeEtude, setAnneeEtude] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); 

    const nouvelEtudiant = {
      id: Date.now(),
      nom: nom,
      prenom: prenom,
      email: email,
      telephone: telephone,
      filiere: filiere,
      anneeEtude: anneeEtude,
      groupe: groupe,
      ville: ville,
      image: image,
    };

    onAjouterEtudiant(nouvelEtudiant);
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Ajouter un étudiant</h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prenom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Telephone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          name="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
          required
        >
          <option value="">Choisir une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="anneeEtude">Annee d'etude :</label>
        <input
          type="number"
          id="anneeEtude"
          name="anneeEtude"
          min="1"
          max="3"
          value={anneeEtude}
          onChange={(e) => setAnneeEtude(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text"
          id="groupe"
          name="groupe"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          name="ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image :</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => {
            const fichier = e.target.files[0]; 
            if (fichier) {
              setImage(URL.createObjectURL(fichier)); 
            }
          }}
        />
      </div>

      <button type="submit" className="btn-submit">Ajouter</button>
    </form>
  );
}

export default StudentForm;





