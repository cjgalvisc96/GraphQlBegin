import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect("mongodb://localhost/graphql", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(">>>> DB connected SUCCESS");
    } catch (e) {
        console.log(">>>> DB connected FAILED: " + e);
    }
}
