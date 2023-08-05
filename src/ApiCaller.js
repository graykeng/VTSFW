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

export const getBlogPostScroll = () => {
    return Axios.get(url + "/BlogPostScroll")
        .then((response) => response.data);
};

export const getPost = (id) => {
    return Axios.get(url + `/BlogPostDetail/${id}`)
    .then((response) => response.data);
};

export const getTicketStatus = (uuid) => {
    return Axios.get(url + `/RedeemTicket/${uuid}`)
        .then((response) => response.data);
};

export const insertTicketInfo = (data, uuid) => {
    Axios.post(url + "/insertTicketInfo", {
        TicketID: uuid,
        RedeemAddress: "https://vtsf.ca/Redeem/" + uuid,
        FirstName: data.FirstName,
        LastName: data.LastName,
        ChnName: data.ChnName,
        PhoneNumber: data.PhoneNumber,
        Email: data.Email,
        School: data.School,
        Age: data.Age,
        Taiwanese: data.Taiwanese,
        WorkshopFirst: data.WorkshopFirst,
        WorkshopSecond: data.WorkshopSecond,
        Dietary: data.Dietary,
        Occupation: data.Occupation,
        Attended: data.Attended,
        Heard: data.Heard
        })
        .then(res => {
            if (res.data.message === "Data inserted successfully!") {
                console.log(res.data.message);
            } else {
                throw new Error("res.message wrong.");
            }
        })
        .catch(err => {
            console.error(err);
            throw err;
        })
};

export const updateRedeem = (uuid) => {
    Axios.put(url + "/updateRedeem", {TicketID: uuid});
}
