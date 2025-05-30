import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddStudent = (props) => {
  const [inputs, setInputs] = useState({ Name: "", Place: "", Age: "", Department: "" });
  const location = useLocation();
  const navigate = useNavigate();
  

  // Safe logging
  console.log(
    "state:",
    location.state && location.state.student ? location.state.student.Name : "no state"
  );

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (location.state && location.state.student) {
      setInputs({
        Name: location.state.student.Name,
        Place: location.state.student.Place,
        Age: location.state.student.Age,
        Department: location.state.student.Department,
      });
    }
  }, [location.state]);

  const submitHandler = () => {
    if (location.state && location.state.student) {
      axios
        .put(`http://localhost:3000/${location.state.student._id}`, inputs)
        .then((res) => {
          alert(res.data);
          navigate("/");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:3000/", inputs)
        .then((res) => {
          alert(res.data);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Typography variant="h3">Welcome to Student Portal Form</Typography>
      <br />
      <TextField
        variant="outlined"
        label="Name"
        onChange={inputHandler}
        name="Name"
        value={inputs.Name}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Place"
        onChange={inputHandler}
        name="Place"
        value={inputs.Place}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Age"
        onChange={inputHandler}
        name="Age"
        value={inputs.Age}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Department"
        onChange={inputHandler}
        name="Department"
        value={inputs.Department}
      />
      <br />
      <br />
      <Button variant="contained" onClick={submitHandler}>
        Submit
      </Button>
    </div>
  );
};

export default AddStudent;