import { GraphQLSchema, GraphQLObjectType } from "graphql";
import controleDeQueries from "./queries/index";
import mutations from "./mutations/index";

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: controleDeQueries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
});