import axios from "axios";

export default axios.create({
    baseURL: "https://api.globalgiving.org/api/public",
    headers: {
    "Content-type": "application/xml",
    "Accept" : "application/xml"
    }
});

