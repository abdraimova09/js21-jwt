import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"50px"}>
        <Typography variant="h5">Register</Typography>
        <TextField
          value={email}
          onChange={e => setEmail(e.target.value)}
          variant="outlined"
          label="Email"
        />
        <TextField
          value={password}
          onChange={e => setPassword(e.target.value)}
          variant="outlined"
          label="Password"
        />
        <TextField
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          variant="outlined"
          label="Password confirmation"
        />
        <Button variant="outlined">Register</Button>
      </Box>
    </Container>
  );
};

export default Register;
