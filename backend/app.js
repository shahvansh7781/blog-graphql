import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./graphql/typeDefs.js";
// import resolvers from './graphql/resolvers.js';
import dbConnect from "./config/database.js";
import resolvers from "./graphql/resolvers.js";
dbConnect();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server,{
  context: async ({ req, res }) => 
    ({
    token: req.headers.authorization
  }),
}, {
  listen: { port: 4000 },
});
console.log(`🚀 Server ready at ${url}`);
