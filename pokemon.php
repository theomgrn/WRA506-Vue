<?php
// L'URL que vous souhaitez interroger
$url = 'https://api-pokemon-fr.vercel.app/api/v1/pokemon'; // Remplacez par votre URL cible

// Initialisez une session Curl
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Exécutez la requête Curl
$response = curl_exec($ch);

// Vérifiez s'il y a des erreurs lors de l'exécution de la requête Curl
if (curl_errno($ch)) {
    // Vous pouvez enregistrer ou afficher des messages d'erreur ici si nécessaire
    error_log('Erreur Curl : ' . curl_error($ch));
} else {
    file_put_contents('pokemon.json', $response);

}

// Fermez la session Curl
curl_close($ch);
