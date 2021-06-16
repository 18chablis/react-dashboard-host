import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header";

function AddProduct() {
  const [name, setName] = useState("");
  const [file_path, setFilePath] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory("");

  async function saveProduct() {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("file_path", file_path);
    formData.append("description", description);
    formData.append("price", price);

    let result = await fetch("http://chablis.user-api.bj/api/addProduct", {
      method: "POST",
      body: formData
    });

    alert("Product Added successfully");
    history.push("/product");
  }
  return (
    <div>
      <Header />
      <h1>Add Product</h1>
      <div className="offset-sm-3 col-sm-6">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="name"
        />
        <br />
        <input
          onChange={(e) => setFilePath(e.target.files[0])}
          type="file"
          className="form-control"
          placeholder="file"
        />
        <br />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          className="form-control"
          placeholder="price"
        />
        <br />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Description"
          row="3"
        ></textarea>
        <br />
        <button onClick={saveProduct} className="btn btn-primary">
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
