import { Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Loader from "../Loader/Loader";
import Reviews from "../Reviews/Reviews";

const Details = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  if (!oneProduct) {
    return <Loader />;
  }
  console.log(oneProduct);
  return (
    <Container>
      <Typography variant="h5">Title: {oneProduct.title}</Typography>
      <Typography variant="h5">Price: {oneProduct.price}</Typography>
      <Typography variant="h5">
        Description: {oneProduct.description}
      </Typography>
      <Typography variant="h5">Author: {oneProduct.author}</Typography>
      <Typography variant="h5">
        Category: {oneProduct.category.title}
      </Typography>
      <img src={oneProduct.image} alt="product" />
      <Reviews reviews={oneProduct.reviews} />
    </Container>
  );
};

export default Details;
