import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useHistory } from "react-router-dom";

function Register() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/product");
    }
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function signUp() {
    let item = { name, email, password };

    let result = await fetch("http://chablis.user-api.bj/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/product");
  }

  return (
    <>
      <Header />
      <div className="offset-sm-3 col-sm-6">
        <h1 className="p-3">Register Page</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="name"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="form-control"
          placeholder="email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="password"
        />
        <br />
        <button onClick={signUp} className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Register;
