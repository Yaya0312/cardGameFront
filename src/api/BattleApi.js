import {requesterWithToken, url} from "./serverConfig";

export default class BattleApi {

    static async getDecks(size) {
        return requesterWithToken.get(`${url}/battle/play/${size}`).then(response => {
                return response.data;
            }
        );
    }
}