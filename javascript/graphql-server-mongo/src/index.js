import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import { connect } from "./database";
// App
const app = express();

// DB
connect();

// Route
app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    });
});
app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
        messageId: "Test"
    }
}));

// Server
const port = 3000;
app.listen(3000, () => console.log("Server run in port: " + port));