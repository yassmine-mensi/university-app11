import studentcard from "./components/studentcard.jsx";
import "./fiche-etudiant.css";
import Image from '../assets/yassmine.jpej.jpeg'

// const student = "yassmine";
// const age = 19 ;
const student= {
    nom:"yassmine",
    prenom:"mensi",
    email:"yassminemensi7@gmail.com",
    telephone:20362523,
    filiere:"genie logiciel et systeme informatique",
    niveau:"2eme annee",
    groupe:"GLSI 2",
    image: Image
}



function Etudiant(){
    return (
        <div>
            <h1 className="etudiant1">Ficher étudiant</h1>
<img src={student.image} alt="" />
            <h1>Nom: {student.nom}</h1>
            <p>Nom et prénon : Yassmine Mensi</p>
            <p>Email : yassminemensi7@gmail.com</p>
            <p>Téléphone : 20362523</p>
            <p>Filière : genie logiciel et systeme informatique</p>
            <p>Niveau : 2éme année</p>
            <p>Groupe : GLSI 2</p>
            <p>Ville : Monastir</p>
            <a href="mailto:">contact</a>
        </div>
    );
}
export default Etudiant;




