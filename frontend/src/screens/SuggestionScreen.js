import React from "react";
import Navbar from "../components/navbar";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const SuggestionScreen = () => {
  const loggedInUser = Cookies.get("jwToken");
  const [text, setText] = useState("");
  const [inputText, setinputText] = useState("");
  const [check, setcheck] = useState(false);

  const ButtonGroup = styled.div`
    display: block;
  `;

  const handler = (event) => {
    if (event.code === "Space") {
      let t = event.target.value;
      setinputText(t);
      console.log(event.target.value);
      let txt = t.trim();
      console.log(txt);
      const textsize = txt.split(" ").length;
      console.log("Size is :", textsize);
      if (textsize >= 3) {
        // document.getElementById("btn").disabled = false;
        // document.getElementById("btn").style.visibility = true;
        setcheck(true);
        event.preventDefault();

        const url = "http://127.0.0.1:8000/prediction";
        var bodyD = JSON.stringify(txt);

        console.log("body data is :", bodyD);
        const reqOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: bodyD,
        };
        fetch(url, reqOptions)
          .then((resp) => resp.json())
          .then((resJ) => setText(resJ.result));
      }
    }
  };
  const showResult = (val) => {
    // document.getElementsByClassName("selct").innerHTML = inputText + text[val];
    document.getElementById("textAreaExample2").value = inputText + text[val];
    // console.log("Value from Textarea is :", a);
    console.log("combined Text is :", inputText + text[val]);
  };
  if (!loggedInUser) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div style={{ margin: "0px", padding: "0px" }}>
        <Navbar />
        <div className="container">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Word Suggestion
          </h2>
          <blockquote className="blockquote text-center">
            <footer className="blockquote-footer">
              Something famous in{" "}
              <cite title="Urdu Language">Urdu Writing</cite>
            </footer>
          </blockquote>
          <form method="post">
            <br />

            <div className="form-outline w-50 text-right">
              <textarea
                autofocus
                placeholder="Put Text here"
                className="form-control"
                id="textAreaExample2"
                style={{ textAlign: "right" }}
                rows={6}
                onKeyUp={(e) => handler(e)}
                type="text"
                name="text"
                defaultValue={""}
              />
              <label className="form-label" htmlFor="textAreaExample2" />
              {/* <button
                type="submit"
                className="btn btn-outline-secondary mx-auto"
              >
                <b>Suggest</b>
              </button> */}
            </div>
          </form>
          <br />
          {/* <div className="form-outline w-25"> */}
          {/* <b>
              <textarea
                className="form-control"
                id="textAreaExample3"
                rows={3}
                defaultValue={text}
              />
    </b> */}
          <label className="form-label" htmlFor="textAreaExample3">
            <b>Suggested Words</b>
          </label>
          {check ? (
            <ButtonGroup id="btn">
              <button
                type="button"
                className="bg-light  selct"
                onClick={() => showResult(0)}
              >
                {text[0]}
              </button>
              <br />
              <button
                className="selct bg-light"
                onClick={() => showResult(1)}
                // style={{ outline: "none", border: "none" }}
              >
                {text[1]}
              </button>
              <br />
              <button className="selct bg-light" onClick={() => showResult(2)}>
                {text[2]}
              </button>
              <br />
              <button className="selct bg-light" onClick={() => showResult(3)}>
                {text[3]}
              </button>
              <br />
              <button className="selct bg-light" onClick={() => showResult(4)}>
                {text[4]}
              </button>
              <br />
            </ButtonGroup>
          ) : (
            " "
          )}
          <br />

          {/* </div> */}
        </div>
      </div>
    );
  }
};

export default SuggestionScreen;
