import {requesterWithToken} from "./serverConfig";

export default class UserApi {

    static async getAll() {
        return requesterWithToken.get('/users').then(
            r => {
                return r.data;
            }
        );
    }
}