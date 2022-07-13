import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/productsContext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PhotoCamera } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { getCategories, categories, createProduct } =
    useContext(productsContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  useEffect(() => {
    getCategories();
  }, []);
  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("image", image);
    createProduct(newProduct, navigate);
  }
  // console.log(categories);
  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="h6">Add product</Typography>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={e => setCategory(e.target.value)}>
            {categories.map(item => (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label">
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={e => setImage(e.target.files[0])}
          />
          <PhotoCamera />
        </IconButton>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AddProduct;
