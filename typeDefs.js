const { gql } = require('apollo-server');

module.exports = gql`
  type user {
      _id: ID,
      name: String
      email: String
      picture: String
  }

  type Query {
    me: user
  }
`;