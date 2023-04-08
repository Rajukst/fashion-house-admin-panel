import React, { useRef} from "react";
import "./AddProduct.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const AddProduct = () => {
  const addName = useRef();
  const addText = useRef();
  const addPrice = useRef();
  const addImage = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = addName.current.value;
    const priceOne = addPrice.current.value;
    const image = addImage.current.value;
    const description = addText.current.value;
    const totalAdd = { name, priceOne, image, description };
    console.log(totalAdd);
    fetch("https://fashion-house-server.vercel.app/add-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added Successfully !!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <h1>Add Product</h1>
      <div className="addProduct-image">
        <h1 className="pt-5"> Add Product</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name=""
            id=""
            ref={addName}
            placeholder="Product Name"
            required
            className="form-fields"
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addPrice}
            placeholder="Previous Price"
            required
            className="form-fields"

          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addImage}
            placeholder="Product Image or Url"
            required
            className="form-fields"
          />
          <br />
          <br />
          <textarea
            placeholder="Short Description"
            id=""
            ref={addText}
            name=""
            rows=""
            cols=""
            className="form-fields"
          ></textarea>
          <br />
          <br />
          <button type="submit" variant="outline-info">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
