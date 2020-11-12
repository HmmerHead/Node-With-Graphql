import express from 'express';
import body_Parser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose'
import { buildSchema } from 'graphql';
import routes from "./routes/index";
import Schemas from "./graphql/index";

const app = express();

app.use(body_Parser.urlencoded({ extended: false}));
app.use(body_Parser.json());
app.use('/grapql', graphqlHTTP({
    schema: Schemas,
    // schema: buildSchema(`type Query {msg: String}`),
    // rootValue: { msg: () => 'Hello Word' },
    graphiql: true,
    pretty: true
}));

mongoose.connect('mongodb://172.17.0.2:27017/graphql', { useNewUrlParser: true, useUnifiedTopology: true })

routes(app)
app.listen(3000, () => console.log('FOI !!!!!'))