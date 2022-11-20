import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
const GrammarCheckingScreen = () => {
  const [prob, setProb] = useState(0);
  // const [check, setcheck] = useState(false);
  // const threshhold = 0.5;

  const handler = (event) => {
    event.preventDefault();
    var text = event.target.value;
    var txt = text.slice(-1);
    console.log(typeof text);
    console.log("last index value is :", text);
    // var text = text
    if (txt === "۔") {
      const url = "http://127.0.0.1:8000/grammar";
      var bodyD = JSON.stringify(text);

      console.log("text correction data is :", bodyD);
      const reqOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyD,
      };
      // reqOptions.setHeader();
      fetch(url, reqOptions)
        .then((resp) => resp.json())
        .then((resJ) => {
          setProb(resJ.gram_result);
        });
    }
  };
  // const stylig = () => {};
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <Navbar />
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Grammar Checking
        </h2>
        <blockquote className="blockquote text-center">
          <footer className="blockquote-footer">
            Something famous in <cite title="Urdu Language">Urdu Writing</cite>
          </footer>
        </blockquote>
        <form method="post">
          <br />

          <div className="form-outline w-50 text-right">
            <textarea
              autofocus
              placeholder="Put Text here"
              className="form-control"
              // style={stylig}
              id="textAreaExample2"
              rows={6}
              onKeyUp={(e) => handler(e)}
              type="text"
              name="text"
              defaultValue={""}
            />
            <label className="form-label" htmlFor="textAreaExample2" />
          </div>
        </form>
        <br />
        <p>Probability is {prob}</p>
      </div>
    </div>
  );
};

export default GrammarCheckingScreen;
