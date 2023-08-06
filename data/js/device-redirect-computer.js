// Fonction pour rediriger vers la version ordinateur vers mobile 
function redirigerVersVersionAppropriee() {
    var largeurEcran = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    // Récupérer le nom du fichier HTML actuellement affiché
    var nomFichier = window.location.pathname.split('/').pop();
  
    // Vérifier la largeur de l'écran et rediriger en conséquence
    if (largeurEcran < 800) {
      window.location.href = 'm/' + nomFichier; // Redirection vers la version mobile
    }
  }
  
  // Exécuter la fonction de redirection au chargement initial
  //redirigerVersVersionAppropriee();
  
  // Exécuter la fonction de redirection chaque seconde
  setInterval(redirigerVersVersionAppropriee, 1000);