import axios from "axios";

export default {
    createEvent: function (eventData) {
        return axios.post("/api/events", eventData);
    },
    getPostedEvents: function () {
        return axios.get("/api/events");
    },
    getEventsByCreator: function (creator) {
        return axios.get("/api/events?creator=" + creator);
    }
}