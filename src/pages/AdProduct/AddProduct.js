import { Button, Grid, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import "./AddProduct.css";
const AddProduct = () => {
  const [name, setName] = useState({});
  const [image, setImage] = useState(null);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("no image inserted");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    fetch("http://localhost:5000/pictures", {
      method: "POST", // or 'PUT'
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("image upload success");
          console.log(data)
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleOnChange = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...name };
    newData[nameField] = fieldValue;
    setName(newData);
  };
  return (
    <div>
      <h1>This is Add Product</h1>
      <form onSubmit={handleOnSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="form-fieldss">
              <TextField
                id="standard-search"
                label="Product Title"
                type="search"
                variant="standard"
                className="form-fields"
                margin="normal"
                onChange={handleOnChange}
              />
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                className="form-fields"
                margin="normal"
                onChange={handleOnChange}
              />
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                className="form-fields"
                margin="normal"
                onChange={handleOnChange}
              />
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                className="form-fields"
                margin="normal"
                onChange={handleOnChange}
              />
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                className="form-fields"
                margin="normal"
                onChange={handleOnChange}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <h1>This is right</h1>
          </Grid>
        </Grid>
        <Button variant="contained" component="label">
          Upload Photo
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={(e) => console.log(e.target.files[0])}
          />
        </Button>
        <br />
        <br />
        <p>Please upload valid jpg, png pictures</p>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
