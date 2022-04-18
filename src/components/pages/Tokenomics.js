import React from "react";
import "../tokenomics.css";


export default function Tokenomics() {

  return (
    <div>
      <section>
        <div className="container " style={{ marginTop: "100px" }}>
          <div className="tokenomic-content text-center"><span className="gradient-text">Tokenomics</span></div>
          <div className="row">
            <div className="col-12 col-lg-5 col-md-12">
              <div className="buy  text-center">
                <span className="text-white">Buy</span>
              </div>
              <div className="tokenomics-circle">
                <div className="circle-block marketing">
                  <div className="content">
                    <span>3%</span> lp CM3 lp
                  </div>
                </div>

                <div className="circle-block team">
                  <div className="content">
                    <span>Marketing 6%</span> the vault
                  </div>
                </div>

                <div className="circle-block liquidity">
                  <div className="content">
                    <span>2.5%</span>Auto burn 2.5% self destruction or auto ignition
                  </div>
                </div>
                <div className="circle-block buy-back">
                  <div className="content">
                    <span>2.5%</span>Buy Back
                  </div>
                </div>

                <div className="circle-block airdrop">
                  <div className="content-burn">
                    <span>3%</span>lp CM3 lp
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 col-md-12">
              <div className="sell text-center">
                <span className="text-white">Sell</span>
              </div>
              <div className="tokenomics-circle">
                <div className="circle-block marketing">
                  <div className="content">
                    <span>12%</span> Launch
                  </div>
                </div>

                <div className="circle-block team">
                  <div className="content">
                  <span>Marketing 7%</span> the vault
                  </div>
                </div>

                <div className="circle-block liquidity">
                  <div className="content">
                    <span>3%</span>Buy back
                  </div>
                </div>
                <div className="circle-block buy-back">
                  <div className="content">
                    <span>3%</span>Auto burn 
                  </div>
                </div>

                <div className="circle-block airdrop">
                  <div className="content-burn">
                    <span>16%</span> Sell
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
