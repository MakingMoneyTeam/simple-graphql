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
        author: Author!
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
        game(id: ID!): Game 
        gameByName(name: String!): [Game]
    }
    
    type Mutation {
        addGame(name: String!, platform: [String!]!): Game
        updateGame(id: ID!, name: String, platform: [String]): Game
        deleteGame(id: ID!): String
    }

    type Error{
        message: String!
    }

`;
