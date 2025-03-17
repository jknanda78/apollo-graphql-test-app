import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT as number },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
