const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");
const resolvers = { // All of the function to API call, DB call, and return result to API

    Query: {
        users: () => {
            // API call here
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name });
            return movie;
        }
    },
    User: {
        favoriteMovies: () =>{
            return _.filter(
                MovieList,
                (movie) => {
                    return movie.yearOfPublication> 2000 && movie.yearOfPublication < 2030;
                }
            )
        }
    }

}

module.exports = { resolvers };