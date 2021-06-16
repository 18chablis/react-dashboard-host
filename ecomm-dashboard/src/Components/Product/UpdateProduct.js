import React, { useState, useEffect } from "react";
import Header from "../Header";
import { withRouter } from "react-router-dom";

function UpdateProduct(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    displayData();
  });

  async function displayData() {
    let result = await fetch(
      "http://chablis.user-api.bj/api/product/" + props.match.params.id
    );
    result = await result.json();
    setData(result);
  }

  function updateData() {
      
  }
  return (
    <div>
      <Header />
      <h1>Update Product</h1>
      <div className="offset-sm-3 col-sm-6">
        <input
          defaultValue={data.name}
          onChange={(e) => setData(e.target.value)}
          type="text"
          className="form-control"
          placeholder="name"
        />
        <br />
        <input
          onChange={(e) => setData(e.target.files[0])}
          type="file"
          className="form-control"
          placeholder="file"
        />
        <br />
        <input
          defaultValue={data.price}
          onChange={(e) => setData(e.target.value)}
          type="text"
          className="form-control"
          placeholder="price"
        />
        <br />
        <textarea
          defaultValue={data.description}
          onChange={(e) => setData(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Description"
          row="3"
        ></textarea>
        <br />
        <img
          style={{ width: 100, height: 100 }}
          src={"http://chablis.user-api.bj/" + data.file_path}
          alt={data.description}
        />
        <br /> <br />
        <button onClick={updateData} className="btn btn-primary">
          Update Product
        </button>
      </div>
    </div>
  );
}

export default withRouter(UpdateProduct);
