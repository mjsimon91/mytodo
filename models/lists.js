const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Creating the list Schema in MongoDb
const listSchema = new Schema({
    // Name of the list
    listName: String,

    // Number of Open To Do items
    toDoItems: Number,

    // Is this a private or shared list
    type: String
});

const List = mongoose.model('List', listSchema );

module.exports = List;