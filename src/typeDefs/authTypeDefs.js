const { gql } = require('apollo-server');

const authTypeDefs = gql `

    type Token {
        refresh:String!
        access:String!
    }

    type Access {
        access:String!
    }

    input Refresh {
        refresh:String!
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
        username:String!
        password:String!
        name:String!
        email:String!
    }

    type Query {
        userDetailById(userId:Int!):UserDetail!
    }
    
    type Mutation {
        signUpUser(userInput:SignUpInput!):Token!
        logIn(credentials:CredentialsInput!):Token!
        refreshToken(token:Refresh!):Access!
        userUpdate(user:UserUpdate!):UserDetail!
        deleteUser(userId:Int!):String
    }
`;

module.exports = authTypeDefs;