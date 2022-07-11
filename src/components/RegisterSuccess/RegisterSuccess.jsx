import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <Container>
      <Box>
        <Typography>
          Вы успешно зарегистрировались! Можете <Link to="/login">войти</Link> в
          свой аккаунт
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterSuccess;
