import React from "react";
import { Fade } from "react-reveal";
import Bottom from "./Bottom";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import Services from "./pages/Services";

export default function Main() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 col-md-12">
              <div className="heading-container">
                <h1 className="text-light fs-1">
                  Decenteralized Crypto Trading Platform
                </h1>
                <p className="my-3 text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet dolorem blanditiis ad perferendis, labore delectus
                  dolor sit amet, adipisicing elit. Eveniet.
                </p>
                <button className="buttons border border-1 border-light text-light my-3 rounded-pill fs-6 fw-bold">
                  WHITEPAPER
                </button>
                <button className="buttons border border-1 border-light text-light my-3 mx-3 rounded-pill fs-6 fw-bold">
                  BUY TOKEN
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container my-5">
                <img src={image1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
              <div className="image">
                <Fade bottom>
                  <img src={image2} alt="" className="img2" />
                </Fade>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0">
              <Fade bottom>
                <div className="content-container">
                  <span className="gradient-text">
                    Decentralized Trading Platform
                  </span>
                  <h4 className="blockchain text-light my-3">
                    Connect blockchain to the real world and start crypto
                    tading.
                  </h4>
                  <p
                    style={{
                      color: "#81819C",
                      marginTop: "30px",
                      fontSize: "18px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at dictum risus, non suscipit arcu. Quisque aliquam
                    posuere tortor, sit amet convallis nunc scelerisque in.
                  </p>
                  <p
                    style={{
                      color: "#81819C",
                      marginTop: "40px",
                      fontSize: "18px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Suscipit ipsa ut quasi adipisci voluptates, voluptatibus
                    aliquid alias beatae reprehenderit incidunt iusto
                    laboriosam.
                  </p>
                  <button className="read-more border border-1 border-light text-light my-3 rounded-pill">
                    READ MORE
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <div id="services">
        <Services />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="decentralized-content">
              <span className="gradient-text blue fw-bolder">
                Decentralized Trading Platform
              </span>
              <h4 className="blockchain text-light my-3">
                Connect blockchain to the real world and start crypto tading.
              </h4>
              <p
                style={{
                  color: "#81819C",
                  marginTop: "30px",
                  fontSize: "18px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
                sit amet convallis nunc scelerisque in.
              </p>
              <p
                style={{
                  color: "#81819C",
                  marginTop: "40px",
                  fontSize: "18px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid
                alias beatae reprehenderit incidunt iusto laboriosam.
              </p>
              <button className="read-more border border-1 border-light text-light my-3 rounded-pill">
                READ MORE
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image">
              <img src={image3} alt="" className="vert-move" />
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}
