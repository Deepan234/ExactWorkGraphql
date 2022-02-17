const {ApolloServer, gql} =  require('apollo-server');

const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const SchoolAPI = require('./datasource/school')

const dataSources = () => ({
   schoolAPI:new SchoolAPI(),
});

const  server = new ApolloServer({typeDefs,resolvers,dataSources,});


server.listen({port:process.env.PORT || 4000 })