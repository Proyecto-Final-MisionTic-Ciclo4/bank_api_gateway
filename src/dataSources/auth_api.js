/** Nos permite conectados a data soruce que respondan a traves de protocolo REST */
const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');


class AuthAPI extends RESTDataSource {

    /** Funcionalidades para consumir cosas en REST */
    constructor() {
        /** Inicializa la clase generica */
        super();
        /** URL de acceso  */
        this.baseURL = serverConfig.auth_api_url;
    }

    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/user/`, user);
    }

    async getUser(userId) {
        return await this.get(`/user/${userId}/`);
    }

    async updateUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        let userId = user.id;
        let userUpdate ={
            "username": user.username,
            "password": user.password,
            "name": user.name,
            "email": user.email
        }
        return await this.put(`/user/update/${userId}/`, userUpdate);
    }

    async deleteUser(userId) {
        this.delete(`/user/delete/${userId}/`);
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify(token)));
        return await this.post(`/refresh/`, token);
    }
}
module.exports = AuthAPI;