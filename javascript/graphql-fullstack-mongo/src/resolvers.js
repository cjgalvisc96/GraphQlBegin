export const resolvers = {
    Query: {
        user(_, { _id }) {
            return { "Key": "Value" };
        }
    }
};