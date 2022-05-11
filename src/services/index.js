import TestService from "./TestService";
import GraphQLService from "./GraphQLService";

const testService = new TestService();
const graphQLService = new GraphQLService();

export {
    graphQLService,
    testService,
}