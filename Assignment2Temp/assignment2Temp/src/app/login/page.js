"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../Firebase/firebase";
import "./page.css"

const Login = () => {
  const router = useRouter();
  //set everything to default of blank
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  //on login click, user is logged in and we are sent to home page
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/");
    } catch (err) {
      setErrorMessage(err.code);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {errorMessage && <div className="login-error">{errorMessage}</div>}
      <form onSubmit={onSubmit} className="login-form">
        <div>
          <input
          className="login-email"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="login-password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="login-button" type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;