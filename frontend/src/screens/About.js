import React from "react";
import Navbar from "../components/navbar";
import Img from "../images/1.png";
import arslanImg from "../images/arslan.png";
import afaqImg from "../images/afaq.png";
import rehmanImg from "../images/rehman.png";

const About = () => {
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <Navbar />
      <br />
      <br />
      {/* <br /> */}
      <div class="container">
        <div class="row">
          <div class="col-sm-7">
            <br />
            <br />
            <h1>Our Mission</h1>
            <br />
            <p style={{ fontSize: "40px" }}>
              To improve lives by improving communication
            </p>
          </div>
          <div class="col-sm-4" style={{ marginLeft: "20px" }}>
            <img
              src={Img}
              style={{ marginTop: "0px" }}
              alt="Description of UrduGrammarly"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <h1>We’ve climbed a long way — with much farther to the summit</h1>
            <p style={{ fontSize: "18px" }}>
              Arslan Ahmad,Muhammad Afaq Saleem and Rehman Ali founded Urdu
              Grammarly with the goal of helping people communicate more
              effectively.Our app shall help the Urdu Columnists, Social
              Scientists, Novelists, News Reporters, and Urdu writers being the
              ultimate custodian of this language.Urdu Grammarly shall create a
              setup that ease to write Urdu for its every user Urdu.Urdu
              Grammarly has grown the capabilities of our writing assistance to
              go way beyond grammar and spelling to analyze complex aspects of
              language and communication.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center">Meet the Team</h2>
        <br />
        <div className="row">
          <div className="col-md-4" style={{ backgroundColor: "#f6f6f6" }}>
            <div className="thumbnail">
              {/* <a href="/w3images/lights.jpg"> */}
              <img
                src={arslanImg}
                alt="Lights"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="caption">
                <br />
                <h3
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginLeft: "20px",
                  }}
                >
                  Arslan Ahmad
                </h3>
              </div>
              {/* </a> */}
            </div>
          </div>
          <div className="col-md-4" style={{ marginLeft: "30px" }}>
            <div className="thumbnail" style={{ backgroundColor: "#f6f6f6" }}>
              {/* <a href="/w3images/nature.jpg"> */}
              <img
                src={afaqImg}
                alt="Nature"
                style={{ width: "400px", height: "340px" }}
              />
              <div className="caption">
                <br />
                <h3
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginLeft: "80px",
                  }}
                >
                  Afaq Saleem
                </h3>
              </div>
              {/* </a> */}
            </div>
          </div>
          <div
            className="col-md-3"
            style={{ backgroundColor: "#f6f6f6", marginLeft: "50px" }}
          >
            <div className="thumbnail">
              {/* <a href="/w3images/fjords.jpg"> */}
              <img
                src={rehmanImg}
                alt="Fjords"
                style={{ width: "400px", height: "340px" }}
              />
              <div className="caption">
                <br />
                <h3
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginLeft: "80px",
                  }}
                >
                  Rehman Ali
                </h3>
              </div>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
