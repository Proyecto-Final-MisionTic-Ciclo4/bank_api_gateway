
/** Este es el que recive la peticion y da la respuesta */
const usersResolver = {
    Query: {
        /** 1. Cada funcion recibe un parametro que lo definimos en los typeDefs  
         *  2. Recibe cosas adicionales como conexiones a la fuente de datos dataSources y tokens 
         *  3. Se llama al dataSource para que consuma directamente la API con los metodos definidos en este
        */
        /** Se pone el parametro que recibe la funcion que se listo en los typeDefs, el dataSource y lo que devuelve esa funcion */
        userDetailById: async(_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                /** Si el usuario es el mismo vaya a authAPI y llame la funcion getUser en donde se le pasa el parametro que recive */
                return await dataSources.authAPI.getUser(userId)
            else
                return null
        },
    },
    Mutation: {
        /** Este recive unos datos del backedn de django y otros del backedn de spring-boot */
        signUpUser: async(_, { userInput }, { dataSources }) => {
            /** Este typeDefs no depende del backend sino de lo que le llega del frontend */
            const accountInput = {
                username: userInput.username,
                balance: userInput.balance,
                lastChange: (new Date()).toISOString()
            }
            await dataSources.accountAPI.createAccount(accountInput);

            const authInput = {
                username: userInput.username,
                password: userInput.password,
                name: userInput.name,
                email: userInput.email,
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        logIn: async(_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.authRequest(credentials)

        }, 
        refreshToken: async(_, { token }, { dataSources }) => {
           return await dataSources.authAPI.refreshToken(token);
        }, 
        userUpdate: async(_, { user }, { dataSources, userIdToken}) => {
            if(user.id == userIdToken)
                return await dataSources.authAPI.updateUser(user);
            else
                return null;

        }, 
        deleteUser: async(_, { userId }, { dataSources, userIdToken}) => {
            if(user.id == userIdToken)
                return await dataSources.authAPI.deleteUser(userId);
            else 
                return null;
        }
    }
}


module.exports = usersResolver;