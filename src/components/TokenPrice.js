import React from "react";

export default function TokenPrice() {
  const tokenPriceInfo = [
    {
      round: "Round 1",
      title: "0.96$",
      span: "1ETH = 500 Token",
      desc: "15,000,000 Token",
      bonus: "42% bonus",
    },
    {
      round: "Round 2",
      title: "1.25$",
      span: "1ETH = 500 Token",
      desc: "15,000,000 Token",
      bonus: "35% bonus",
    },
    {
      round: "Round 3",
      title: "1.50$",
      span: "1ETH = 500 Token",
      desc: "15,000,000 Token",
      bonus: "25% bonus",
    },
    {
      round: "Round 4",
      title: "1.96$",
      span: "1ETH = 500 Token",
      desc: "15,000,000 Token",
      bonus: "15% bonus",
    },
  ];
  const renderTokenPrice = (tokenPriceInfo, index) => {
    return (
      <div className="col-lg-3 col-sm-6 col-xs-12" key={index} style={{width:"max-content"}}> 
        <div
          className="card border border-1 my-3"
          style={{
            borderRadius: "10px",
            width: "16rem",
            marginBottom: "10px",
          }}
        >
          <div className="card-body2 text-center">
            <div className="pricing">
              <h4 className="gradient-text blue fs-5">
                {tokenPriceInfo.round}
              </h4>
              <h3 className="text-light">
                <strong className="fw-bolder" style={{ fontSize: "50px" }}>
                  {tokenPriceInfo.title}
                </strong>
              </h3>
              <span className="gradient-text blue">{tokenPriceInfo.span}</span>
              <p className="text-light" style={{ marginTop: "20px" }}>
                {tokenPriceInfo.desc}
              </p>
              <div className="bonus text-light">{tokenPriceInfo.bonus}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <section>
        <div className="container">
          <div className="token-price my-5">
            <div className="tokenprice-content text-center">
              <span className="gradient-text my-3">Token Prices</span>
              <h2 className="text-light fs-3">Our Token Prices</h2>
              <p
                style={{
                  color: "#81819C",
                  marginTop: "20px",
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
      <div className="row">{tokenPriceInfo.map(renderTokenPrice)}</div>
    </div>
  );
}
