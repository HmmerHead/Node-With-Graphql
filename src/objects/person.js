import { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
 } from "graphql";

 export default new GraphQLObjectType({
    name: 'person',
    description: 'define person object',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: 'unique ID',
                resolve: (person) => person.id
            },
            name: {
                type: GraphQLString,
                description: 'Person Name',
                resolve: (person) => person.name
            },
            birth: {
                type: GraphQLString,
                description: 'Person Birth',
                resolve: (person) => person.birth
            }
        }
    }
 })
