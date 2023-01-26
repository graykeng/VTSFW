import Axios from "axios";

const url = "https://nodejs.vtsfbackend.ca/api"

export const getEventPic = () => {
    return Axios.get(url + "/EventPic")
        .then((response) => response.data);
};

export const getCommitteeInfo = () => {
    return Axios.get(url + "/CommiteeInfo")
        .then((response) => response.data);
};

export const getSponsorsInfo = () => {
    return Axios.get(url + "/SponsorsInfo")
        .then((response) => response.data);
};

export const getLogoPic = () => {
    return Axios.get(url + "/LogoPic")
        .then((response) => response.data);
};

export const getBlogPostGrid = () => {
    return Axios.get(url + "/BlogPostGrid")
        .then((response) => response.data);
};

export const getPost = (id) => {
    return Axios.get(url + `/BlogPostDetail/${id}`)
    .then((response) => response.data);
};

