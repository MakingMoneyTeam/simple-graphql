import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js';
import _db from './_db.js';
import { GraphQLError } from 'graphql';

const PORT = 4000;

const resolvers = {
    Query: {
        games: () => _db.games,
        reviews: () => {
            return _db.reviews.map((review) => ({
                ...review,
                game: _db.games.find((game) => game.id === review.game_id),
                author: _db.authors.find(
                    (author) => author.id === review.author_id
                ),
            }));
        },
        authors: () => _db.authors,
        game: (_, { id, name }) => {
            if (!name)
                throw new GraphQLError('Name is required', {
                    extensions: {
                        code: 'BAD_USER_INPUT',
                    },
                });
            return _db.games.find(
                (game) => game.id === id && game.name.includes(name)
            );
        },
    },
    Mutation: {
        addGame: (_, { name, platform }) => {
            const game = {
                id: String(_db.games.length + 1),
                name,
                platform,
            };
            _db.games.push(game);
            return game;
        },
        updateGame: (_, { id, name, platform }) => {
            const game = _db.games.find((game) => game.id === id);
            if (name) game.name = name;
            if (platform) game.platform = platform;
            return game;
        },

        deleteGame: (_, { id }) => {
            const gameIndex = _db.games.findIndex((game) => game.id === id);
            if (gameIndex === -1) return 'Game not found';
            _db.games.splice(gameIndex, 1);
            return `Game with id ${id} deleted`;
        },
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
