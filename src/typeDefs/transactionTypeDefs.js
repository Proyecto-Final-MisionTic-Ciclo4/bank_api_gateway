const { gql } = require('apollo-server');

const transactionTypeDefs = gql `
    type Transaction {
        id:String!
        usernameOrigin:String!
        usernameDestiny:String!
        value:Int!
        date:String!
    }
    
    input TransactionInput {
        usernameOrigin:String!
        usernameDestiny:String!
        value:Int!
        note:String!
    }

    input TransactionUpdate {
        id:String!
        note:String!
    }

    extend type Query {
        transactionByUsername(username:String!):[Transaction]
        transactionById(transactionId:Int!):Transaction
    }
    
    extend type Mutation {
        createTransaction(transaction:TransactionInput!):Transaction
        updateTransaction(transaction:TransactionUpdate!):Transaction
        deleteTransaction(username:String!):String!
    }
`;

module.exports = transactionTypeDefs;