import { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
 } from "graphql";

 export default new GraphQLObjectType({
    name: 'person',
    description: 'define a person object',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: 'unique ID',
                resolve: () => '2'
            },
            name: {
                type: GraphQLString,
                description: 'Person Name',
                resolve: () => 'Jhon Doe'
            }
        }
    }
 })