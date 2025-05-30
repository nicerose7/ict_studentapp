import React, { useEffect, useState } from "react";
import axios from "axios";
import AddStudent from "./components/AddStudent";
import ViewStudent from "./components/ViewStudent";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [students, setStudents] = useState([]);

  // Fetch students from backend
  const fetchStudents = () => {
    axios.get("http://localhost:3000/view")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Add student and refresh list
  const addStudent = (inputs) => {
    axios.post("http://localhost:3000", inputs)
      .then(() => fetchStudents())
      .catch((err) => console.log(err));
      
     
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ViewStudent students={students} />} />
        <Route path="/add" element={<AddStudent addStudent={addStudent} />} />
      </Routes>
    </>
  );
};

export default App;