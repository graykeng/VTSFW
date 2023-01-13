import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import Axios from "axios";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Commitee from "./pages/Commitee";
import Sponsors from "./pages/Sponsors";

import VTSFnavbar from "./component/VTSFnavbar";
import VTSFtitle from "./component/VTSFtitle";
import VTSFfooter from "./component/VTSFfooter";

function App() {

  const [EventPic, setEventPic] = useState([]);
  const getEventPic = () => {
    Axios.get("http://localhost:3001/EventPic").then((response) => {
        setEventPic(response.data);
    });
  };

  const [CommiteeInfo, setCommiteeInfo] = useState([]);
  const getCommiteeInfo = () => {
    Axios.get("http://localhost:3001/CommiteeInfo").then((response) => {
        setCommiteeInfo(response.data);
    });
  };

  const [SponsorsInfo, setSponsorsInfo] = useState([]);
  const getSponsorsInfo = () => {
    Axios.get("http://localhost:3001/SponsorsInfo").then((response) => {
      setSponsorsInfo(response.data);
      console.log(response.data);
    });
  };

  const [LogoPic, setLogoPic] = useState([]);
  const getLogoPic = () => {
    Axios.get("http://localhost:3001/LogoPic").then((response) => {
      setLogoPic(response.data);
    });
  };

  useEffect(() => {
    getEventPic();
    getCommiteeInfo();
    getSponsorsInfo();
    getLogoPic();
  }, [])

  return (
    <div className="App BGC">
      <VTSFtitle LogoPic={ LogoPic }/>
      <VTSFnavbar />
      <Routes>
        <Route path="/" element={<Home EventPicForTransfer={ EventPic }/>} />
        <Route path="/Gallery" element={<Gallery EventInfoForTransfer={ EventPic }/>} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Commitee" element={<Commitee CommiteeInfo={ CommiteeInfo }/>} />
        <Route path="/Sponsors" element={<Sponsors SponsorsInfo={ SponsorsInfo }/>} />
      </Routes>
      <VTSFfooter LogoPic={ LogoPic }/>
    </div>
  );
}

export default App;
