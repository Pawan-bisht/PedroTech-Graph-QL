const { UserList } = require("../FakeData");
const resolvers = { // All of the function to API call, DB call, and return result to API

    Query: {
        users() {
            // API call here
            return UserList;
        }
    }
}

module.exports = { resolvers };