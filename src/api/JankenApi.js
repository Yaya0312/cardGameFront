import {requesterWithToken, url} from "./serverConfig";


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export default class JankenApi {

    static play(userHit) {
        return requesterWithToken.get(`${url}/janken/play/${userHit}`).then(response => {
                return response.data;
            }
        );
    }

}