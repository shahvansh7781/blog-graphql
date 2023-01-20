import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./graphql/typeDefs.js";
import jwt from "jsonwebtoken";
// import resolvers from './graphql/resolvers.js';
import dbConnect from "./config/database.js";
import resolvers from "./graphql/resolvers.js";
dbConnect();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const { authorization } = req.headers;
    if (authorization) {
      const { id } = jwt.verify(authorization, "KHGSFHJKKLBN123dgvvgtyyuujbbb");
      return { id };
    }
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀 Server ready at ${url}`);
