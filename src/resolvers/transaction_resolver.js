const transactionResolver = {
    Query: {
        transactionByUsername: async(_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.accountAPI.transactionByUsername(username)
            else
                return null
        },
        transactionById: async(_, { transactionId }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            const transaction = await dataSources.accountAPI.transactionById(transactionId)
            usernameTransaction = transaction.usernameOrigin

            if (usernameToken == usernameTransaction)
                return await transaction;
            else
                return null
        }
    },
    Mutation: {
        createTransaction: async(_, { transaction }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (transaction.usernameOrigin == usernameToken)
                return  await dataSources.accountAPI.createTransaction(transaction)
            else
                return null;
        }, 
        updateTransaction: async (_, { transaction }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameTransaction = await dataSources.accountAPI.transactionById(transaction.id).usernameOrigin
            if (usernameToken == usernameTransaction)
                return await dataSources.accountAPI.updateTransaction(transaction);
            else 
                return null;

        }, deleteTransaction: async (_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.accountAPI.deleteTransaction(username.id)
            else
                return null
        }
    }
};

module.exports = transactionResolver;