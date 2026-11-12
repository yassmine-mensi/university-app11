import { useState } from "react";
import Studentcard from "./components/studentcard";
import islemPhoto from "./assets/islem.jpej.jpeg";
import walaPhoto from "./assets/wala.jpej.jpeg";
import yassminePhoto from "./assets/yassmine.jpej.jpeg";

function App() {
  // 1) el liste w el recherche kollhom useState DAKHEL App
  const [etudiants, setEtudiants] = useState([
    {
      id: 1, 
      np: "wala mensi",
      email: "walamensi@gmail.com",
      tel: "telephone",
      fil: "Science Informatique",
      anne: "2026/2027",
      groupe: "GLSI_C",
      ville: "monstir",
      image: walaPhoto,
    },
    {
      id: 2, 
      np: "islem charrada",
      email: "islemcharrada@gmail.com",
      tel: "telephone",
      fil: "ingenier de systeme informatique",
      anne: "2026/2027",
      groupe: "iotA",
      ville: "monastir",
      image: islemPhoto,
    },
    {
      id: 3, // <-- jdid
      np: "yassmine mensi",
      email: "yassminemensi5@gmail.com",
      tel: "telephone",
      fil: "Science Informatique",
      anne: "2026/2027",
      groupe: "GLSI_C",
      ville: "Monastir",
      image: yassminePhoto,
    },
  ]);

  const [recherche, setRecherche] = useState("");

  // 2) Ajouter
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: Date.now(),
      np: "Yassine Ben Salem",
      email: "yassine.bensalem@gmail.com",
      tel: "+216 44 444 444",
      fil: "Génie Logiciel et Systèmes d'Information",
      anne: "2026/2027",
      groupe: "GLSI_A",
      ville: "Sfax",
      image: yassminePhoto, // ay sora moujouda
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  // 3) Supprimer
  function supprimerEtudiant(id) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((etudiant) => etudiant.id !== id)
    );
  }

  // 4) Modifier (np = nom + prénom)
  function modifierEtudiant(id) {
    const nouveauNp = prompt("Saisir le nouveau nom et prénom : ");
    if (nouveauNp !== null && nouveauNp.trim() !== "") {
      setEtudiants((anciensEtudiants) =>
        anciensEtudiants.map((etudiant) =>
          etudiant.id === id ? { ...etudiant, np: nouveauNp.trim() } : etudiant
        )
      );
    }
  }

  // 5) Filtre par filière
  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.fil.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div>
      <h1>Liste des etudiants</h1>

      <input
        type="text"
        placeholder="Rechercher par filière..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      <div className="actions">
        <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>
      </div>

      <div className="liste-etudiants">
        {etudiantsFiltres.map((etudiant) => (
          <Studentcard
            key={etudiant.id}
            id={etudiant.id}
            np={etudiant.np}
            email={etudiant.email}
            tel={etudiant.tel}
            fil={etudiant.fil}
            anne={etudiant.anne}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierEtudiant}
          />
        ))}
      </div>
    </div>
  );
}

export default App;