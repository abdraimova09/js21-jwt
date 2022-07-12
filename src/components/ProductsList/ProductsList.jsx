import { Box, Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/productsContext";

const ProductsList = () => {
  const { getProducts } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Box>list</Box>
    </Container>
  );
};

export default ProductsList;
