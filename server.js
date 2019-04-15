const { ApolloServer } = require('apollo-server');

require('dotenv').config();
const typeDefs = require('./typeDefs.js');
const resolvers = require('./resolvers');
const  { findOrCreateUser } = require('./controllers/userController');
const mongoose = require('mongoose');


mongoose
  .connect(process.env.MONGO_URI,
    { useNewUrlParser: true})
  .then(() => console.log('db connected'))
  .catch(err => console.log(err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let authToken = null
    let currentUser = null
    try {
      authToken = req.headers.authorization
      if (authToken) {
        currentUser = await findOrCreateUser()
        // find on create user
      }
    }
    catch (e) {
      console.log(`Unablet to authenticated user with token ${authToken}`)
    }
    return  { currentUser }
  }
});


server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`)
});
