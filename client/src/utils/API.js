import axios from "axios"

export default {
    // Get all Lists
    getLists: function() {
        return axios.get("/api/list")
    },

    // Add a new list
    addList: function(NewList) {
        return axios.post("/api/list", NewList)
    }
}


