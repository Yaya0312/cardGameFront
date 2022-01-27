

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export default class JankenApi {

    static play(userHit) {
        const computerHit = getRandomInt(0,2);
        let winner = "error";
        if (((userHit - computerHit) === -1) || ((userHit - computerHit) === 2)) {
            winner = "PLAYER";
        } else if (((userHit - computerHit) === 1) || ((userHit - computerHit) === -2)) {
            winner = "COMPUTER";
        } else if (userHit === computerHit) {
            winner = "DRAW";
        }
        return { computerHit: computerHit, winner: winner};
    }

}