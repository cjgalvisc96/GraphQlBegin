import express from "express";
import bodyParser from "body-parser";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

// Create app
const app = express();

// General Settings
app.use(bodyParser.json()); // Use Json like request and response standar

// Routes 
app.get('/', (req, res) => {
    res.send("Hello World!!");
});

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

// Server
const port = 3000;
app.listen(port, () => console.log("Server run in port: " + port));