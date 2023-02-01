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

export const insertTicketInfo = (data) => {
    Axios.post(url + "/insertTicketInfo", {
        FirstName: data.FirstName,
        LastName: data.LastName,
        ChnName: data.ChnName,
        PhoneNumber: data.PhoneNumber,
        Email: data.Email,
        School: data.School,
        Age: data.Age,
        Taiwanese: data.Taiwanese,
        Workshop: data.Workshop,
        Dietary: data.Dietary,
        Occupation: data.Occupation,
        Attended: data.Attended,
        Heard: data.Heard,
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.error(err);
        })
}
