const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs.js');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`)
})