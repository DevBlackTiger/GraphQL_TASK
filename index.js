const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

const typeDefs = require("./types");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
