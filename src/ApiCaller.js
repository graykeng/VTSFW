import Axios from "axios";

const url = "http://ec2-52-13-3-113.us-west-2.compute.amazonaws.com:8080"

export const getEventPic = () => {
    return Axios.get(url + "/api/EventPic")
        .then((response) => response.data);
};

export const getCommiteeInfo = () => {
    return Axios.get(url + "/api/CommiteeInfo")
        .then((response) => response.data);
};

export const getSponsorsInfo = () => {
    return Axios.get(url + "/api/SponsorsInfo")
        .then((response) => response.data);
};

export const getLogoPic = () => {
    return Axios.get(url + "/api/LogoPic")
        .then((response) => response.data);
};

export const getBlogPostGrid = () => {
    return Axios.get(url + "/api/BlogPostGrid")
        .then((response) => response.data);
};

export const getPost = (id) => {
    return Axios.get(url + `/api/BlogPostDetail/${id}`)
    .then((response) => response.data);
};

