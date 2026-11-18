import { useState } from "react";
import Studentcard from "./components/studentcard";
import islemPhoto from "./assets/islem.jpej.jpeg";
import walaPhoto from "./assets/wala.jpej.jpeg";
import yassminePhoto from "./assets/yassmine.jpej.jpeg";
import StudentForm from "./components/StudentFrom.jsx";

function App() {
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
      id: 3,
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

  // ✅ mapping: من form → شكل الـ card
  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantFormate = {
      id: nouvelEtudiant.id,
      np: `${nouvelEtudiant.nom} ${nouvelEtudiant.prenom}`,
      email: nouvelEtudiant.email,
      tel: nouvelEtudiant.telephone,
      fil: nouvelEtudiant.filiere,
      anne: nouvelEtudiant.anneeEtude,
      groupe: nouvelEtudiant.groupe,
      ville: nouvelEtudiant.ville,
      image: nouvelEtudiant.image,
    };
    setEtudiants((anciens) => [...anciens, etudiantFormate]);
  }

  function supprimerEtudiant(id) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((etudiant) => etudiant.id !== id)
    );
  }
  // ⬆️ احذف الكود الزايد اللي كان تحت هذه الدالة

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
        {/* ✅ اسم الـ prop الصحيح */}
        <StudentForm onAjouterEtudiant={ajouterEtudiant} />
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