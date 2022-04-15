import React from "react";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";

export default function IcoDistribution() {
  return (
    <div>
      <section>
        <div className="conatiner">
          <div className="icodistribution">
            <div className="icodistribution-content text-center">
              <span className="gradient-text">ICO Distribution</span>
              <h2 className="text-light my-3">Our ICO Distribution</h2>
              <p
                style={{
                  color: "#81819C",
                }}
              >
                Our ICO Template Will Be A Perfect Platform For Presenting Your
                Ico Launch.
                <br /> This Landing Page Comes In Great And Clean Design
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 col-md-12">
              <h2
                className="text-light text-center"
                style={{ marginTop: "100px" }}
              >
                Funds Allocation
              </h2>
              <div className="funds-allocation-image">
                <img src={image6} alt="" className="img-chart" />
              </div>
            </div>
            <div className="col-12 col-lg-5 col-md-12">
              <h2 className="text-light text-center">Token Distribution</h2>
              <div className="row">
                <div className="col-sm-4">
                  <div className="token-distribution-image">
                    <img src={image7} alt="" className="td-img" />
                  </div>
                </div>
                <div className="col-sm-8" style={{ marginTop: "30px" }}>
                  <div className="token-info">
                    <div className="info-wrapper one d-flex">
                      <div className="token-icon text-light bg-transparent">
                        12
                      </div>
                      <div className="token-desc text-light bg-transparent">
                        Overhead Token Distribution
                      </div>
                    </div>
                  </div>
                  <div className="token-info ">
                    <div className="info-wrapper two d-flex">
                      <div className="token-icon text-light bg-transparent">
                        23
                      </div>
                      <div className="token-desc text-light bg-transparent">
                        Supporting Blockchain
                      </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper three d-flex">
                      <div className="token-icon text-light bg-transparent">
                        08
                      </div>
                      <div className="token-desc text-light bg-transparent">
                        Engineers and R&amp;D
                      </div>
                    </div>
                  </div>
                  <div className="token-info ">
                    <div className="info-wrapper four d-flex">
                      <div className="token-icon text-light bg-transparent">
                        07
                      </div>
                      <div className="token-desc text-light bg-transparent">
                        Paltform Operations
                      </div>
                    </div>
                  </div>
                  <div className="token-info ">
                    <div className="info-wrapper five d-flex">
                      <div className="token-icon text-light bg-transparent">
                        05
                      </div>
                      <div className="token-desc text-light bg-transparent">
                        Network Growth Marketing
                      </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper six d-flex">
                      <div className="token-icon text-light bg-transparent">
                        08
                      </div>
                      <div className="token-desc text-light bg-transparent">
                        Oracle Network Developers
                      </div>
                    </div>
                  </div>
                  <div className="token-info ">
                    <div className="info-wrapper seven d-flex">
                      <div className="token-icon text-light bg-transparent">
                        05
                      </div>
                      <div className="token-desc text-light bg-transparent">
                        Engineers and R&amp;D
                      </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper eight d-flex">
                      <div className="token-icon text-light bg-transparent">
                        27
                      </div>
                      <div className="token-desc text-light bg-transparent">
                        Paltform Operations
                      </div>
                    </div>
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
