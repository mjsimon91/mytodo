const db = require("../models")

module.exports = {
    // find all lists
    findLists: (request, response) => {
        db.List
            .find()
            .then(dbModel => response.json(dbModel))
            .catch(error => response.json(error))
    },

    // Add a new list
    addList: (request, response) => {
        db.List
            .create(request.body)
            .then(dbModel => response.json(dbModel))
            .catch(error => response.json(error))
    }
}