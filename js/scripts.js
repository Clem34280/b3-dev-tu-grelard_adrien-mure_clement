// Variables globales
// Eléments mémoire et écran
const memoireElt = document.querySelector("#memoire");
const ecranElt = document.querySelector("#ecran");

// On stocke la valeur de l'écran "précédent"
let precedent = 0;

// On stocke l'affichage
let affichage = "";

// On stocke l'opération
let operation = null;

// On initialise la mémoire
let memoire;

let exponent = document.querySelector("#exponent");

window.onload = () => {
    // On écoute les clics sur les touches
    let touches = document.querySelectorAll("span");

    for(let touche of touches){
        touche.addEventListener("click", gererTouches);
    }

    // On écoute les touches du clavier
    document.addEventListener("keydown", gererTouches);
    
    // Récupération de la mémoire depuis le stockage local
    memoire = (localStorage.memoire) ? parseFloat(localStorage.memoire) : 0;
    if(memoire != 0) memoireElt.style.display = "initial";
}

/**
 * Cette fonction réagit au clic sur les touches
 */
function gererTouches(event){
    let touche;

    // On liste les touches autorisées
    const listeTouches = ["+", "-", "*", "/", "%", "²", "√", "^", "Enter", "Escape"];

    // On vérifie si on a l'évènement "keydown"
    if(event.type === "keydown"){
        // On compare la touche appuyée aux touches autorisées
        if(listeTouches.includes(event.key)){
            // On empêche l'utilisation "par défaut" de la touche
            event.preventDefault();
            // On stocke la touche choisie dans la variable touche
            touche = event.key;
        }
    }else{
        touche = this.innerText;
    }

    // On vérifie si chiffre ou .
    if(parseFloat(touche) >= 0 || touche === "."){
        // A vérifier, pas plusieurs . dans la chaîne
        // On met à jour la valeur d'affichage et on affiche sur l'écran
        affichage = (affichage === "") ? touche.toString() : affichage + touche.toString();
        ecranElt.innerText = affichage;
    }else if(parseFloat(touche) >= 0 || touche === "%"){
        affichage = (affichage === "") ? touche.toString() : affichage / 100;
        ecranElt.innerText = affichage;
    }else if(parseFloat(touche) >= 0 || touche === "²"){
        affichage = (affichage === "") ? touche.toString() : affichage * affichage;
        ecranElt.innerText = affichage;
    }else if(parseFloat(touche) >= 0 || touche === "√"){
        affichage = (affichage === "") ? touche.toString() : Math.sqrt(affichage);
        ecranElt.innerText = affichage;
    }else if(parseFloat(touche) >= 0 || touche === "^"){
        //base = parseFloat(affichage);
        affichage = (affichage === "") ? touche.toString() : Math.pow(affichage, exponent);
        ecranElt.innerText = affichage;
    }else{
        switch(touche){
            // Touche C réinitialise tout
            case "C":
            case "Escape":
                precedent = 0;
                affichage = "";
                operation = null
                ecranElt.innerText = 0;
                break;
            // Calculs
            case "+":
            case "-":
            case "*":
            case "/":
                // On calcule la valeur résultat de l'étape précédente
                precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
                // On met à jour l'écran
                ecranElt.innerText = precedent;
                // On stocke l'opération
                operation = touche;
                // On réinitialise la variable d'affichage
                affichage = "";
                break;
            case "=":
            case "Enter":
                // On calcule la valeur résultat de l'étape précédente
                precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
                // On met à jour l'écran
                ecranElt.innerText = precedent;
                // On stocke le résultat dans la variable d'affichage
                affichage = precedent;
                // On réinitialise précédent
                precedent = 0;
                break;
            default:
                break;
        }
    }
}

/**
 * Effectue le calcul
 * @param {number} nb1 
 * @param {number} nb2 
 * @param {string} operation 
 * @returns number
 */
function calculer(nb1, nb2, operation){
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);
    if(operation === "+") return nb1 + nb2;
    if(operation === "-") return nb1 - nb2;
    if(operation === "*") return nb1 * nb2;
    if(operation === "/") return nb1 / nb2;
}