import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Login() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/product");
    }
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function signIn() {
    let item = { email, password };

    let result = await fetch("http://chablis.user-api.bj/api/login", {
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
        <h1 className="p-3">Login Page</h1>
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
        <button onClick={signIn} className="btn btn-primary">
          Sign In
        </button>
      </div>
    </>
  );
}

export default Login;
