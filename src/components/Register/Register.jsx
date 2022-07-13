import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import Loader from "../Loader/Loader";

const Register = () => {
  const { handleRegister, error, setError, loading } = useContext(authContext);
  console.log(loading);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      //  1
      // const newUser = {
      //   email,
      //   password,
      //   password_confirm: passwordConfirm,
      // };
      // 2
      alert("Заполните поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegister(formData, navigate);
    }
  }
  useEffect(() => {
    setError(false);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"50px"}>
        <Typography variant="h5">Register</Typography>

        {error ? (
          <Box>
            {error.map((item, index) => (
              <Alert severity="error" key={item + index}>
                {item}
              </Alert>
            ))}
          </Box>
        ) : null}

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
        <Button onClick={handleSave} variant="outlined">
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
