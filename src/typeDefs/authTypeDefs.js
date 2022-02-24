const { gql } = require('apollo-server');

const authTypeDefs = gql `

    type Token {
        refresh:String!
        access:String!
    }

    type Access {
        access:String!
    }

    input CredentialsInput {
        username:String!
        password:String!
    }

    input SignUpInput {
        username:String!
        password:String!
        name:String!
        email:String!
        balance:Int!
    }

    type UserDetail {
        id:Int!
        username:String!
        password:String!
        name:String!
        email:String!
    }

    input UserUpdate {
        id:Int!
        password:String!
        name:String!
    }
    
    type Mutation {
        signUpUser(userInput:SignUpInput):Token!
        logIn(credentials:CredentialsInput!):Token!
        refreshToken(refresh:String!):Access!
        userUpdate(user:UserUpdate!):UserDetail!
        deleteUser(userId:String):String!
    }

    type Query {
        userDetailById(userId:Int!):UserDetail!
    }
`;

module.exports = authTypeDefs;