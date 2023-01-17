import Axios from "axios";
const url = "https://vtsf-backend.herokuapp.com"

export const getEventPic = () => {
    return Axios.get("https://vtsf-backend.herokuapp.com/EventPic")
        .then((response) => response.data);
};

export const getCommiteeInfo = () => {
    return Axios.get("https://vtsf-backend.herokuapp.com/CommiteeInfo")
        .then((response) => response.data);
};

export const getSponsorsInfo = () => {
    return Axios.get("https://vtsf-backend.herokuapp.com/SponsorsInfo")
        .then((response) => response.data);
};

export const getLogoPic = () => {
    return Axios.get("https://vtsf-backend.herokuapp.com/LogoPic")
        .then((response) => response.data);
};

export const getBlogPostGrid = () => {
    return Axios.get(url + "/BlogPostGrid")
        .then((response) => response.data);
};

export const getPost = (id) => {
    return Axios.get(`https://vtsf-backend.herokuapp.com/BlogPostDetail/${id}`)
    .then((response) => response.data);
};

