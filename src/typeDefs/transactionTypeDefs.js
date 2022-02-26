const { gql } = require('apollo-server');

const transactionTypeDefs = gql `
    type Transaction {
        id:String!
        usernameOrigin:String!
        usernameDestiny:String!
        value:Int!
        note:String!
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

    type Query {
        transactionByUsername(username:String!):[Transaction]
        transactionById(transactionId:String!):Transaction
    }
    
    type Mutation {
        createTransaction(transaction:TransactionInput!):Transaction
        updateTransaction(transaction:TransactionUpdate!):Transaction
        deleteTransaction(username:String!):String!
    }
`;

module.exports = transactionTypeDefs;