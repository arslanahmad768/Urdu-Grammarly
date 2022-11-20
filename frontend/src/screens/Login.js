import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import Cookies from "js-cookie";
import Navbar from "../components/navbar";

export default function App({ userLogin }) {
  const navigate = useNavigate();
  const onHandleChange = (event) => {
    event.preventDefault();
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    const userRecord = { username: user, password: pass };
    fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRecord),
    })
      .then((data) => data.json())
      .then((data) => {
        userLogin(data.token);
        Cookies.set("jwToken", data.token);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar />
      <div className="demo-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mx-auto">
              <div className="text-center image-size-small img_login">
                <img
                  src="https://annedece.sirv.com/Images/user-vector.jpg"
                  className="rounded-circle p-2 bg-white"
                  alt="login Icon"
                />
              </div>
              <div className="p-5 bg-light rounded shadow-lg mt-5">
                <h3 className="mb-2 text-center pt-5">Log In</h3>
                <form>
                  <label className="font-500">Email</label>
                  <input
                    name="username"
                    className="form-control form-control-md mb-3"
                    type="text"
                    id="user"
                  />
                  <label className="font-500">Password</label>
                  <input
                    // name
                    className="form-control form-control-md"
                    name="password"
                    type="password"
                    id="pass"
                  />
                  <p className="m-0 py-4">
                    <a href="/#" className="text-muted">
                      Forget password?
                    </a>
                  </p>
                  <button
                    className="btn btn-primary btn-lg w-100 shadow-lg"
                    onClick={onHandleChange}
                  >
                    SIGN IN
                  </button>
                </form>
                <div className="text-center pt-4">
                  <p className="m-0">
                    Do not have an account?{" "}
                    <a href="/signup" className="text-dark font-weight-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
