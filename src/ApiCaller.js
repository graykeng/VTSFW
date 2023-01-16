import Axios from "axios";

export const getEventPic = () => {
    return Axios.get("http://localhost:3001/EventPic")
        .then((response) => response.data);
};

export const getCommiteeInfo = () => {
    return Axios.get("http://localhost:3001/CommiteeInfo")
        .then((response) => response.data);
};

export const getSponsorsInfo = () => {
    return Axios.get("http://localhost:3001/SponsorsInfo")
        .then((response) => response.data);
};

export const getLogoPic = () => {
    return Axios.get("http://localhost:3001/LogoPic")
        .then((response) => response.data);
};

export const getBlogPostGrid = () => {
    return Axios.get("http://localhost:3001/BlogPostGrid")
        .then((response) => response.data);
}

export const getPost = (id) => {
    return Axios.get(`http://localhost:3001/BlogPostDetail/${id}`)
    .then((response) => response.data);
};
