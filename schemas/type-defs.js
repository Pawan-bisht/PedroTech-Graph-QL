const { gql } = require("apollo-server");

const typeDefs = gql`
 
 type Follower {
    id: ID!
    user: User!
 }

 type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
 }
 
 type Query{
    users: [User!]!
 }
`

module.exports = { typeDefs };