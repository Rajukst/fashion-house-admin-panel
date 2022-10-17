import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("no image inserted");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("http://localhost:5000/pictures", {
      method: "POST", // or 'PUT'
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.insertedId){
          alert("image upload success");
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
  };
  return (
    <div>
      <h1>This is Add Product</h1>
      <form onSubmit={handleOnSubmit}>
        <TextField
          label="Name"
          variant="standard"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <TextField
          label="Email"
          variant="standard"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" component="label">
          Upload Photo
          <input hidden accept="image/*" multiple type="file" onChange={e=>setImage(e.target.files[0])} />
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
