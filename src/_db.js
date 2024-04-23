const games = [
    {
        id: '1',
        name: 'Super Mario Bros.',
        platform: ['Nintendo Switch'],
    },
    {
        id: '2',
        name: 'The Legend of Zelda',
        platform: ['PS5', 'Xbox Series X', 'Nintendo Switch'],
    },
    {
        id: '3',
        name: 'Metroid',
        platform: ['Nintendo Switch'],
    },
    {
        id: '4',
        name: 'Donkey Kong',
        platform: ['Nintendo Switch'],
    },
];

let authors = [
    {
        id: '1',
        name: 'John Doe',
        verified: true,
    },
    {
        id: '2',
        name: 'Jane Doe',
        verified: false,
    },
];

let reviews = [
    {
        id: '1',
        rating: 5,
        comment: 'Great game!',
        author_id: '1',
        game_id: '1',
    },
    {
        id: '2',
        rating: 4,
        comment: 'Good game!',
        author_id: '2',
        game_id: '2',
    },
    {
        id: '3',
        rating: 3,
        comment: 'Decent game!',
        author_id: '1',
        game_id: '3',
    },
    {
        id: '4',
        rating: 2,
        comment: 'Bad game!',
        author_id: '2',
        game_id: '4',
    },
];

export default {
    games,
    authors,
    reviews,
};
