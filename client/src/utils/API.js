import axios from "axios"

export default {
    // Get all Lists
    getLists: function() {
        return axios.get("/api/list")
    }
}


