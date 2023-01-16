import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import Axios from "axios";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Commitee from "./pages/Commitee";
import Sponsors from "./pages/Sponsors";
import BlogPost from "./pages/BlogPost";

import VTSFnavbar from "./component/VTSFnavbar";
import VTSFtitle from "./component/VTSFtitle";
import VTSFfooter from "./component/VTSFfooter";

function App() {

  // Define the get, set methods to connect to the backend server
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
    });
  };

  const [LogoPic, setLogoPic] = useState([]);
  const getLogoPic = () => {
    Axios.get("http://localhost:3001/LogoPic").then((response) => {
      setLogoPic(response.data);
    });
  };

  const [BlogPostGrid, setBlogPostGrid] = useState([]);
  const getBlogPostGrid = () => {
    Axios.get("http://localhost:3001/BlogPostGrid").then((response) => {
      setBlogPostGrid(response.data);
    })
  }

  // Render only once by using useEffect
  useEffect(() => {
    getEventPic();
    getCommiteeInfo();
    getSponsorsInfo();
    getLogoPic();
    getBlogPostGrid();
  }, [])

  return (
    <div className="App BGC">
      <VTSFtitle LogoPic={ LogoPic }/>
      <VTSFnavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home EventPic={ EventPic }/>} />
          <Route path="/Gallery" element={<Gallery EventInfo={ EventPic }/>} />
          <Route path="/Blog" element={<Blog BlogPostGrid={ BlogPostGrid }/>} />
          <Route path="/Commitee" element={<Commitee CommiteeInfo={ CommiteeInfo }/>} />
          <Route path="/Sponsors" element={<Sponsors SponsorsInfo={ SponsorsInfo }/>} />
          <Route path="/BlogPost/:id" element={<BlogPost />} />
        </Routes>
      </Router>
      <VTSFfooter LogoPic={ LogoPic }/>
    </div>
  );
}

export default App;
