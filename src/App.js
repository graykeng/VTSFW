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

import { useState } from "react";
import Axios from "axios";


function App() {
  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };
  
  return (
    <div className="App">
      <VTSFtitle />
      <VTSFnavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/EventDetails" element={<EventDetails />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Commitee" element={<Commitee />} />
        <Route path="/Sponsors" element={<Sponsors />} />
      </Routes>
      <VTSFfooter />
      <button onClick={getEmployees}>Show members</button>
      {employeeList.map((val, key) => {
        return (
          <h3>{val.LastName}</h3>
        )
      })}
    </div>
  );
}

export default App;
