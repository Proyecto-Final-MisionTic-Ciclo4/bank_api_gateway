const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AccountAPI = require('./dataSources/account_api');
const AuthAPI = require('./dataSources/auth_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    /** Se ejecuta el contexto antes que la peticion pase por el resolver y ahi guarda el Id token */
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        /** Se inicializan los dataSource */
        accountAPI: new AccountAPI(),
        authAPI: new AuthAPI(),
    }),
    /** Parametros del servidor */
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});