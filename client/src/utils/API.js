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
    },
    getEventsByAttendees: function (attendee) {
        return axios.get("/api/events?attendees=" + attendee);
	},
	updateParticipants: function (_id) {
		return axios.put("/api/events?_id=" + _id);
	},
    isLoggedIn : function(setLoading) {
        console.log("is logged in")
	    axios.get('/api/auth/checkToken')
	      .then(res => {
	        if (res.status !== 200) {
		        this.logout();
	        }
	      })
	      .catch(err => {
	        this.logout();
	      });		
	},
	logout: function() {
        console.log("logged out")
	  axios
	    .get("/api/auth/logout")
	    .then(res => {
	      window.location = '/';
	    })
	    .catch(err => {
	      console.log(err);
	    })
	}	
}