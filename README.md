# bank_api_gateway
This is an example of an API Gateway using GraphQL and Apollo


TypeDefs 

const { gql } = require('apollo-server');

const authTypeDefs = gql `

/** Tipos de datos que entras y salen en el backend **/
/* enpoints return -> login, userCreate  */

    type Token {
        refresh: String!
        access: String!
    }

    /* enpoints return -> refresh,  */
    type Access {
        access: String!
    }

    /* enpoints input -> login  */
    input CredentialsInput {
        username: String!
        password: String!
    }

    /* enpoints input -> createUser  */
    input SignUpInput {
        username: String!
        password: String!
        name: String!
        email: String!
        balance: Int!
    }

    /* enpoints return -> userDetail  */
    type UserDetail {
        id: Int!
        username: String!
        password: String!
        name: String!
        email: String!
    }

    type UserUpdate {
        id: Int!
        password: String!
        name: String!
    }
    
    /* Servicios que modifican la base de datos
    signUpUser -> esrcibimos el tipo de dato signUpUInput que recibe y devuelve un token
    logIn -> recibe unas credenciales CredentialsInput  y retorna un token
    refreshToken -> recibe un string (token) y devuelve un token de acceso
    */
    type Mutation {
        signUpUser(userInput :SignUpInput): Token!
        logIn(credentials: CredentialsInput!): Token!
        refreshToken(token: String!): Access!
        userUpdate(user: UserUpdate!): UserDetail!
        deleteUser(userId: String): String!
    }

    /* Servicios que devuelven informacion -> se crea una funcion donde se la pasa el user Id y nos devuelve el UserDetail*/
    type Query {
        userDetailById(userId: Int!): UserDetail!
    }
`;

module.exports = authTypeDefs;
