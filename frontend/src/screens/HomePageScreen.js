import React from "react";
import Typed from "react-typed";
import Navbar from "../components/navbar";
const HomePageScreen = () => {
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <Navbar color="red" />
      <div>
        <section>
          <div className="container">
            <div
              style={{
                margin: "10px 0px 5px 14em",
                fontSize: "25px",
                fontWeight: "700",
              }}
            >
              <Typed
                strings={[
                  "Enjoy great experience with Urdu Grammarly!",
                  "Welcome to Urdu Grammarly",
                ]}
                backSpeed={50}
                smartBackspace={true}
                backDelay={1200}
                startDelay={1000}
                typeSpeed={25}
                loop={false}
              />
            </div>
            <blockquote className="blockquote text-center">
              <p className="mb-0" />
              <div className="form-group">
                <h3>
                  <span id="typed" />
                </h3>
              </div>
              <footer className="blockquote-footer">
                Something famous in{" "}
                <cite title="Urdu Language">Urdu Writing</cite>
              </footer>
            </blockquote>
            <br />
            <div className="row">
              <div className="col-md-5">
                <div className="card" style={{ width: "25rem" }}>
                  <div className="card-header">Features</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      ● Find the accuracy of given corpus statistically
                    </li>
                    <li className="list-group-item">
                      ● New and smarter suggestions all the time
                    </li>
                    <li className="list-group-item">
                      ● Correction of words and sentences
                    </li>
                    <li className="list-group-item">
                      ● Obtaining efficient results in a real time scenario.{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-7">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={0}
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={1}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={2}
                    />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100 img-fluid h-auto"
                        src="/images/2.png"
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="/images/3.png"
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="/images/16.png"
                        alt="Third slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageScreen;
