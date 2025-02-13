"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "../Firebase/firebase";
import "./page.css"

const Register = () => {
  const router = useRouter();
  //set all variables to default value of nothing
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  //when button clicked, user is registered with firebase and we are sent to home page
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, username, password);
      router.push("/");
    } catch (err) {
      setErrorMessage(err.code);
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      {errorMessage && <div className="register-error">{errorMessage}</div>}
      <form className="register-form" onSubmit={onSubmit}>
        <div>
          <input
            className="register-username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input
          className="register-email"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
          className="register-password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="register-button" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;