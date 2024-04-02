export const typeDefs = `#graphql
    type Game {
        id: ID!
        name: String!
        platform: [String!]!
    }

    type Review {
        id: ID!
        game: Game!
        rating: Int!
        comment: String
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query {
        games: [Game]
        reviews: [Review]
        authors: [Author]
    }
`;
