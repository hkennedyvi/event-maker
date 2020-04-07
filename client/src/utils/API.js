import axios from "axios";

export default {
    createEvent: function (eventData) {
        return axios.post("/api/events", eventData);
    },

    getUserEvents: function (user) {
        return axios.get("/api/events?=" + user);
    }
}