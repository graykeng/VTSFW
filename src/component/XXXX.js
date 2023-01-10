import { useState } from "react";
import Axios from "axios";

const [employeeList, setEmployeeList] = useState([]);

const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

export default getEmployees;