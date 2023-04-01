const { gql } = require("apollo-server");

const typeDefs = gql`
 
 type Follower {
    id: ID!
    user: User!
 }

type Movie {
   id: ID!
   name: String!
   yearOfPublication: Int!
   isInTheaters: Boolean!
}

 type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
    friends: [User!]!
    favoriteMovies: [Movie]
 }
 
 type Query{
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
 }
`

module.exports = { typeDefs };