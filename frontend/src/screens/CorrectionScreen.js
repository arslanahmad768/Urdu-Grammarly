import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Chart from "react-apexcharts";

const CorrectionScreen = () => {
  const loggedInUser = Cookies.get("jwToken");
  const [text, setText] = useState("");
  const [corr, setCorr] = useState(0);
  const [Incorr, setIncorr] = useState(0);
  const [check, setcheck] = useState(false);

  const handler = (event) => {
    if (event.code === "Space") {
      event.preventDefault();
      setcheck(true);
      let txt = event.target.value;
      const url = "http://127.0.0.1:8000/correction";
      var bodyD = JSON.stringify(txt);

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
          setText(resJ.cor_result);
          setCorr(resJ.input_Correct);
          setIncorr(resJ.input_Incorrect);
        });
    }
  };
  const showResult = (val) => {
    // document.getElementsByClassName("selct").innerHTML = inputText + text[val];
    document.getElementById("textAreaExample2").value = text;
    console.log(typeof text);
    // console.log("Value from Textarea is :", a);
    console.log("combined Text is :", text);
  };
  if (!loggedInUser) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div style={{ margin: "0px", padding: "0px" }}>
        <Navbar />
        <div className="container">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Word Correction
          </h2>

          <blockquote className="blockquote text-center">
            <footer className="blockquote-footer">
              Something famous in{" "}
              <cite title="Urdu Language">Urdu Writing</cite>
            </footer>
          </blockquote>
          {/* <br /> */}
          <div class="container">
            <div className="row">
              <div class="col-md">
                <form>
                  <br />
                  <br />
                  <div className="form-outline w-30 text-right">
                    <textarea
                      placeholder="Put Text here"
                      className="form-control"
                      id="textAreaExample2"
                      rows={6}
                      type="text"
                      name="input_text"
                      onKeyUp={(e) => handler(e)}
                      defaultValue={""}
                    />
                    <label className="form-label" htmlFor="textAreaExample2" />
                    {/* <button
                      type="submit"
                      style={{ marginTop: "10px" }}
                      className="btn btn-outline-secondary mx-auto"
                    >
                      <b>Correct</b>
                    </button> */}
                  </div>
                </form>
              </div>
              <div class="col-md">
                <Chart
                  type="bar"
                  width={450}
                  style={{ marginLeft: "100px" }}
                  height={300}
                  series={[
                    {
                      name: "Types Accuracy",
                      data: [corr, Incorr],
                    },
                  ]}
                  options={{
                    title: {
                      text: "Urdu Typing Accuracy ",
                      style: { fontSize: 20 },
                    },
                    plotOptions: {
                      bar: {
                        borderRadius: 4,
                        horizontal: true,
                      },
                    },
                    chart: {
                      toolbar: {
                        show: false,
                      },
                    },
                    legend: {
                      position: "right",
                    },
                    xaxis: {
                      tickPlacement: "on",
                      categories: ["Correct", "Incorrect"],
                      title: { text: "Accuracy" },
                    },
                    animations: {
                      enabled: true,
                      easing: "easeinout",
                      speed: 800,
                      animateGradually: {
                        enabled: true,
                        delay: 150,
                      },
                      dynamicAnimation: {
                        enabled: true,
                        speed: 350,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
          {/* <br /> */}
          {/* <div className="form-outline w-25">
            <textarea
              className="form-control"
              id="textAreaExample3"
              rows={2}
              defaultValue={text}
            /> */}
          <label className="form-label" htmlFor="textAreaExample3">
            <h4>Corrected Words</h4>
          </label>
          <br />
          {/* </div>  */}
          {check ? (
            <button
              type="button"
              className="bg-light  selct"
              onClick={() => showResult(0)}
            >
              {text}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
};

export default CorrectionScreen;
