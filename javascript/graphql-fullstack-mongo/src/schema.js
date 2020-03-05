import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefinitions = `
    type Query {
        user(_id: ID!): User
    }
    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefinitions,
    resolvers: resolvers
})