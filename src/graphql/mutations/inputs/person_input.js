import { 
    GraphQLInputObjectType,
    GraphQLString
} from "graphql";

export default new GraphQLInputObjectType({
    name: 'people_input',
    fields: () => ({
        name: {type: GraphQLString}
        //last_name: { type: GraphQLInt }, Ex.
        //list: { type: GraphQLList(Person) }, Ex.
    })
})