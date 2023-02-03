import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Committee from "./pages/Committee";
import Sponsors from "./pages/Sponsors";
import BlogPost from "./pages/BlogPost";
import GetTicket from "./pages/GetTicket";


import VTSFtitle from "./component/VTSFtitle";
import VTSFfooter from "./component/VTSFfooter";

import { getEventPic, getCommitteeInfo, getSponsorsInfo, getLogoPic, getBlogPostGrid } from "./ApiCaller";
import Redeem from "./pages/Redeem";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // Define the get, set methods to connect to the backend server
  const [EventPic, setEventPic] = useState([]);
  const [CommitteeInfo, setCommitteeInfo] = useState([]);
  const [SponsorsInfo, setSponsorsInfo] = useState([]);
  const [LogoPic, setLogoPic] = useState([]);
  const [BlogPostGrid, setBlogPostGrid] = useState([]);

  // Render only once by using useEffect
  useEffect(() => {
    getEventPic().then(data => setEventPic(data));
    getCommitteeInfo().then(data => setCommitteeInfo(data));
    getSponsorsInfo().then(data => setSponsorsInfo(data));
    getLogoPic().then(data => setLogoPic(data));
    getBlogPostGrid().then(data => setBlogPostGrid(data));
  }, [])

  return (
    <div className="App BGC">
      <VTSFtitle LogoPic={ LogoPic }/>
      {/* <VTSFnavbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home EventPic={ EventPic }/>} />
          <Route path="/Gallery" element={<Gallery EventInfo={ EventPic }/>} />
          <Route path="/Blog" element={<Blog BlogPostGrid={ BlogPostGrid }/>} />
          <Route path="/Committee" element={<Committee CommitteeInfo={ CommitteeInfo }/>} />
          <Route path="/Sponsors" element={<Sponsors SponsorsInfo={ SponsorsInfo }/>} />
          <Route path="/BlogPost/:id" element={<BlogPost />} />
          <Route path="/GetTicket" element={<GetTicket />} />
          <Route path="/Redeem/:uuid" element={<Redeem />} />
        </Routes>
      </Router>
      <VTSFfooter LogoPic={ LogoPic }/>
    </div>
  );
}

export default App;
