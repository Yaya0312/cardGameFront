

export default function Battle() {
    // return deux packet de cartes issue d'un jeux de carte de 52 cartes. chaque packet est constitué de x cartes, x
    // étant le nombre de round
    // response [P1 deck, C1 deck] ainsi que le personne gagnante. (1:player, 2:computer)
    function getDecks() {
        return "{ decks: [[],[]], winner: 1}"
    }
}