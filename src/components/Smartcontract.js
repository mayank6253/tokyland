import React from "react";
import smart1 from "./images/smart1.svg"
import smart2 from "./images/smart2.svg"
import smart3 from "./images/smart3.svg"
import smart4 from "./images/smart4.svg"

export default function Smartcontract() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 col-md-12">
              <div className="decentralized-content">
                <span className="gradient-text blue fw-bolder">
                  Smart Contract
                </span>
                <h4 className="blockchain text-light my-3">
                  Comprehensive smart contracts.
                </h4>
                <p
                  style={{
                    color: "#81819C",
                    marginTop: "30px",
                    fontSize: "18px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at dictum risus, non suscipit arcu. Quisque aliquam posuere
                  tortor, sit amet convallis nunc scelerisque in.
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
                  aliquid alias beatae reprehenderit incidunt iusto laboriosam.
                </p>
                <button className="read-more border border-1 border-light text-light my-3 rounded-pill">
                  READ MORE
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-5 col-md-12">
              <div className="services-container">
                <div className="service-box">
                  <div className="box-content">
                  <img src={smart1} alt="" className="box-img"/>
                    <h3 className="text-light fs-4">Cycles And Schedules</h3>
                    <p
                      style={{
                        color: "#81819C",
                      }}
                    >
                      Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                      elit.
                    </p>
                  </div>
                </div>
                <div className="service-box">
                  <div className="box-content">
                  <img src={smart2} alt="" className="box-img"/>
                    <h3 className="text-light fs-4">Cycles And Schedules</h3>
                    <p
                      style={{
                        color: "#81819C",
                      }}
                    >
                      Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                      elit.
                    </p>
                  </div>
                </div>
                <div className="service-box">
                  <div className="box-content">
                  <img src={smart3} alt="" className="box-img"/>
                    <h3 className="text-light fs-4">Cycles And Schedules</h3>
                    <p
                      style={{
                        color: "#81819C",
                      }}
                    >
                      Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                      elit.
                    </p>
                  </div>
                </div>
                <div className="service-box">
                  <div className="box-content">
                  <img src={smart4} alt="" className="box-img"/>
                    <h3 className="text-light fs-4">Cycles And Schedules</h3>
                    <p
                      style={{
                        color: "#81819C",
                      }}
                    >
                      Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                      elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
