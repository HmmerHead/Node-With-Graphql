import { 
    GraphQLInputObjectType,
    GraphQLString
} from "graphql";

export default new GraphQLInputObjectType({
    name: 'people_input',
    fields: () => ({
        name: {type: GraphQLString},
        birth: { type: GraphQLString }
        //list: { type: GraphQLList(Person) }, Ex. de uso
    })
})