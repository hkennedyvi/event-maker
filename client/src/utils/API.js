import axios from "axios";

export default {
    createEvent: function (eventData) {
        return axios.post("/api/events", eventData);
    },

    getUserEvents: function () {
        return axios.get("/api/events");
    }
}