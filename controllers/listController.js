const db = require("../models")

module.exports = {
    // find all lists
    findLists: (request, response) => {
        db.List
            .find(request.query)
            .then(dbModel => response.json(dbModel))
            .catch(error => response.json(error))
    }
}