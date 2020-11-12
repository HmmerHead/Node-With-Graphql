import { query } from "express";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import controleDeQueries from "./queries/index";

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: controleDeQueries
    }),
    // mutation: new GraphQLObjectType({
    //     name: 'Mutation',
    //     fields: mutations
    // })
});