const { gql } = require('apollo-server');

module.exports = gql`
  type user {
      _id: ID,
      name: String
      email: String
      picture: String
  }
  
  type Pin {
    _id:  ID
    createdAt: String
    title: String
    content: String
    image: String
    latitude: Float
    longitude: Float
    author: user
    comments: [Comment]
  }
  
  type Comment {
    text: String
    createdAt: String
    author: user
  }

  type Query {
    me: user
  }
`;