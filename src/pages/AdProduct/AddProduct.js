import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./AddProduct.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
const AddProduct = () => {
  const [name, setName] = useState({});
  const [slug, setSlug] = useState({});
  const [price, setPrice] = useState({});
  const [sku, setSku] = useState({});
  const [description, setDescription] = useState({});
  const [catagory, setCatagory] = useState({});
  const [size, setSize] = useState({});
  const [stock, setStock] = useState({});
  const [image, setImage] = useState(null);
  const [imageTwo, setImageTwo] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!image&& !imageTwo) {
      Swal.fire({
        position: 'center',
        icon: 'danger',
        title: 'Please Insert Image',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    console.log(e);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("price", price);
    formData.append("sku", sku);
    formData.append("description", description);
    formData.append("catagory", catagory);
    formData.append("size", size);
    formData.append("stock", stock);
    formData.append("image", image);
    formData.append("imageTwo", imageTwo);
    fetch("http://localhost:5000/pictures", {
      method: "POST", // or 'PUT'
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={9} md={9}>
            <div className="form-fieldss">
              <h1>General Info</h1>
              <TextField
                id="standard-search"
                label="Product Name"
                variant="standard"
                className="form-fields"
                margin="normal"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="standard-search"
                label="Product Slug"
                variant="standard"
                className="form-fields"
                margin="normal"
                onChange={(e) => setSlug(e.target.value)}
              />
              <TextField
                id="standard-search"
                label="Price"
                variant="standard"
                className="form-fields"
                margin="normal"
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                id="standard-search"
                label="Product SKU"
                variant="standard"
                className="form-fields"
                margin="normal"
                onChange={(e) => setSku(e.target.value)}
              />
              <TextareaAutosize
                aria-label="minimum height"
                minRows={6}
                placeholder="Product Description"
                className="form-fields"
                margin="normal"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="upload-photos">
              <div className="photoes">
                <Button variant="contained" component="label">
                  Front Image
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </Button>
                <br />
                <br />
                <Button variant="contained" component="label">
                  Back Image
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => setImageTwo(e.target.files[0])}
                  />
                </Button>
                <br />
                <br />
              </div>
              <p>Please upload valid jpg, png picture</p>
            </div>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
            <div className="format-selections">
              <h5>Choose A Catagory</h5>
              <FormControl variant="standard" fullWidth>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Catagory"
                  onChange={(e) => setCatagory(e.target.value)}
                >
                  <MenuItem value={`men`}>Men</MenuItem>
                  <MenuItem value={`women`}>Women</MenuItem>
                  <MenuItem value={`boy`}>boy</MenuItem>
                  <MenuItem value={`girl`}>Girl</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="selection-radios">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Choose A Size
                </FormLabel>
                <RadioGroup
                  onChange={(e) => setSize(e.target.value)}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="m"
                    control={<Radio />}
                    label="M Size"
                  />
                  <FormControlLabel
                    value="s"
                    control={<Radio />}
                    label="S Size"
                  />
                  <FormControlLabel
                    value="l"
                    control={<Radio />}
                    label="L Size"
                  />
                  <FormControlLabel
                    value="2xl"
                    control={<Radio />}
                    label="XXL Size"
                  />
                  <FormControlLabel
                    value="kid"
                    control={<Radio />}
                    label="Kids Size"
                  />
                  <FormControlLabel
                    value="x"
                    control={<Radio />}
                    label="X Size"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="stocks">
              <h5>Stock Information</h5>
            <FormControl variant="standard" fullWidth>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Stock"
                  onChange={(e) => setStock(e.target.value)}
                >
                  <MenuItem value={`inStock`}>In Stock</MenuItem>
                  <MenuItem value={`outOfStock`}>Out of Stock</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
