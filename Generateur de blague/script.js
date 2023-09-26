// Tableau de blagues du Président Bobo
const jokes = [
    "La France nous a souvent volé nos richesses... vous allez aussi nous voler nos footballeurs. 😄⚽️",
    "L'oiseau sur le baobab ne doit pas oublier qu'il a porté des lunettes...! 🐦👓",
    "On n'a pas besoin d'eau potable pour éteindre un incendie. 💧🔥",
    "Dans la vie, être méchant est parfois une protection... 😈🛡️",
    "La grossesse est une sale blague que Dieu a faite aux femmes. 🤰😆",
    "Si on est vaincu, toute prétention à la réforme est de la blague. 🏳️😄",
    "Le tabac est une plante assez prisée qui ne manque pas de chique, 🚬😂",
    "C'est encore en blaguant avec la vie qu'on est le moins malheureux, mais qu'on prend assez souvent à la blague. 😄🌞"
];
// Fonction pour générer une blague aléatoire
function generateJoke() {
    const jokeText = document.getElementById("joke-text");
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    jokeText.textContent = randomJoke;
}
// Écouter le clic sur le bouton "Get a new quote"
document.getElementById('bouton').addEventListener('click', generateJoke);
// Génère une blague aléatoire au chargement de la page
generateJoke();
