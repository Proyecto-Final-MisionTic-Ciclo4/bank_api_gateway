const accountResolver = {
    Query: {
        accountByUsername: async(_, { username }, { dataSources, userIdToken }) => {
            /** Se trae con el Id el username del backend de account para compararlo con el user del backedn de autenticacion (ya que en spring-boot no se tiene id como llave primeria sino un username) */
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.accountAPI.accountByUsername(username)
            else
                return null
        },
    },
    Mutation: {}
};

module.exports = accountResolver;