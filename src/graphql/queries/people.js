import { GraphQLInt, GraphQLList } from "graphql";
import PersonObject from "./../../objects/person";
import Person from "./../../models/Person"

export default {
    type: new GraphQLList(PersonObject),
    args: {
        id: { type: GraphQLInt }
      },
    resolve: async (source, {id}) =>  {
        const result = await Person.findById(id);
        return result;
    }
}