import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListProduct() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function deleteProduct(id) {
    let result = await fetch("http://chablis.user-api.bj/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    getData();
  }

  async function getData() {
    let result = await fetch("http://chablis.user-api.bj/api/product");
    result = await result.json();
    setData(result);
  }
  return (
    <div>
      <Header />
      <h2 className="p-3">Product List</h2>
      <div className="col-sm-10 offset-sm-1">
        <Table hover>
          <thead className="bg-dark text-white">
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <img
                    style={{ width: 100, height: 100 }}
                    src={"http://chablis.user-api.bj/" + [item.file_path]}
                    alt=""
                  />
                </td>
                <td>
                  <span
                    className="delete"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </span>
                  <Link to={"updateProduct/" + item.id}>
                    <span className="update">Update</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
}

export default ListProduct;
