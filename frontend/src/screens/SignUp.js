import React from "react";
import "../css/Login.css";
import Navbar from "../components/navbar";

export default function App() {
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log("called Sign Up Event!");
    console.log(event);
    const user = document.getElementById("user").value;
    const Email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const userRecord = { username: user, email: Email, password: pass };
    fetch("http://127.0.0.1:8000/api/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userRecord),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.token);
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
                <h3 className="mb-2 text-center pt-5">Sign Up</h3>

                <form>
                  <label className="font-500">Username</label>
                  <input
                    name="user"
                    className="form-control form-control-md mb-3"
                    type="text"
                    id="user"
                  />
                  <label className="font-500">Email</label>
                  <input
                    name="email"
                    className="form-control form-control-md mb-3"
                    type="email"
                    id="email"
                  />
                  <label className="font-500">Password</label>
                  <input
                    name="pass"
                    className="form-control form-control-md "
                    type="password"
                    id="pass"
                  />
                  <button
                    className="btn btn-primary btn-lg w-100 shadow-lg mt-4"
                    onClick={(e) => handleSignUp(e)}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
