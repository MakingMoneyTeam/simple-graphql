import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js';
import _db from './_db.js';

const PORT = 4000;

const resolvers = {
    Query: {
        games: () => _db.games,
        reviews: () => _db.reviews,
        authors: () => _db.authors,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: {
        port: PORT,
    },
});

console.log(`🚀 Server ready at ${url}`);
