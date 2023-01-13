import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import EventDetails from "./pages/EventDetails";
import Blog from "./pages/Blog";
import Commitee from "./pages/Commitee";
import Sponsors from "./pages/Sponsors";

import VTSFnavbar from "./component/VTSFnavbar";
import VTSFtitle from "./component/VTSFtitle";
import VTSFfooter from "./component/VTSFfooter";

function App() {
  
  return (
    <div className="App BGC">
      <VTSFtitle />
      <VTSFnavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Commitee" element={<Commitee />} />
        <Route path="/Sponsors" element={<Sponsors />} />
      </Routes>
      <VTSFfooter />
    </div>
  );
}

export default App;
