import Axios from "axios";


export const getEventPic = () => {
    return Axios.get("http://ec2-52-13-3-113.us-west-2.compute.amazonaws.com:8080/api/EventPic")
        .then((response) => response.data);
};

export const getCommiteeInfo = () => {
    return Axios.get("http://ec2-52-13-3-113.us-west-2.compute.amazonaws.com:8080/api/CommiteeInfo")
        .then((response) => response.data);
};

export const getSponsorsInfo = () => {
    return Axios.get("http://ec2-52-13-3-113.us-west-2.compute.amazonaws.com:8080/api/SponsorsInfo")
        .then((response) => response.data);
};

export const getLogoPic = () => {
    return Axios.get("http://ec2-52-13-3-113.us-west-2.compute.amazonaws.com:8080/api/LogoPic")
        .then((response) => response.data);
};

export const getBlogPostGrid = () => {
    return Axios.get("http://ec2-52-13-3-113.us-west-2.compute.amazonaws.com:8080/api/BlogPostGrid")
        .then((response) => response.data);
};

export const getPost = (id) => {
    return Axios.get(`http://ec2-52-13-3-113.us-west-2.compute.amazonaws.com:8080/api/BlogPostDetail/${id}`)
    .then((response) => response.data);
};

