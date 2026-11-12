import { useState } from "react";
import './fiche-etudiant.css'

function StudentCard(props) {

    const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

    function basculerCoordonnees() {
        setCoordonneesVisibles(!coordonneesVisibles);
    }

    return (
        <div className='etudiant-card'>
            <img src={props.image} alt="Photo etudiant" />
            <h1>Ficher Etudient</h1>
            <p>Nom & Prenom: {props.np}</p>

            {coordonneesVisibles && (
                <>
                    <p>MAIL :  {props.email}</p>
                    <p>TELEPHONE : {props.tel}</p>
                </>
            )}

            <p>FILIERE : {props.fil}</p>
            <p>ANNEE D'ETUDIER : {props.anne}</p>
            <p>GROUPE : {props.groupe}</p>
            <p>VILLE : {props.ville}</p>

            <button>CONTACTER</button>
            <button onClick={basculerCoordonnees}>
                {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
            </button>
            <button onClick={() => props.onModifier(props.id)}>Modifier</button>
            <button onClick={() => props.onSupprimer(props.id)}>Supprimer</button>
        </div>
    );
}

export default StudentCard;