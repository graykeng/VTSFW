import Axios from "axios";

export const getEventPic = () => {
    return Axios.get("https://vtsf-backend.herokuapp.com/api/EventPic")
        .then((response) => response.data);
};

export const getCommiteeInfo = () => {
    return Axios.get("https://vtsf-backend.herokuapp.com/api/CommiteeInfo")
        .then((response) => response.data);
};

export const getSponsorsInfo = () => {
    return Axios.get("https://vtsf-backend.herokuapp.com/api/SponsorsInfo")
        .then((response) => response.data);
};

export const getLogoPic = () => {
    return Axios.get("https://vtsf-backend.herokuapp.com/api/LogoPic")
        .then((response) => response.data);
};

export const getBlogPostGrid = () => {
    return Axios.get("https://vtsf-backend.herokuapp.com/api/BlogPostGrid")
        .then((response) => response.data);
};

export const getPost = (id) => {
    return Axios.get(`https://vtsf-backend.herokuapp.com/api/BlogPostDetail/${id}`)
    .then((response) => response.data);
};

