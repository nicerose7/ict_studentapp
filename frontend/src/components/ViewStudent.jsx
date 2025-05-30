import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const ViewStudent = ({ students }) => {
  const navigate = useNavigate();
   // Delete handler
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/${id}`)
      .then(() => fetchStudents())
      .catch((err) => console.log(err));
      alert("Student Deleted Successfully");
      window.location.reload();
  };
 
  const updateStu = (student) => {
    console.log(student);
    navigate("/add",{state: {student}});
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Student Portal
      </Typography>
      <Typography variant="h5" gutterBottom>
        Student List
      </Typography>
      <TableContainer component={Paper} style={{ maxWidth: 700 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Place</b></TableCell>
              <TableCell><b>Age</b></TableCell>
              <TableCell><b>Department</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.Name}</TableCell>
                <TableCell>{student.Place}</TableCell>
                <TableCell>{student.Age}</TableCell>
                <TableCell>{student.Department}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(student._id)}
                  >
                    Delete
                  </Button>
                &nbsp;&nbsp;
                  <Button 
                    variant='contained' 
                    color='success' 
                    onClick={() => {updateStu(student) }}
                    >
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ViewStudent;