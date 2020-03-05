import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefinitions = `
    type Query {
        user(_id: ID!): User
        users: [ User ]
    }
    type Mutation {
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }

    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    input UserInput {
        firstname: String!
        lastname: String!
        age: Int!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefinitions,
    resolvers: resolvers
})