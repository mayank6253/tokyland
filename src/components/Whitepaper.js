import React from "react";
import image5 from "./images/image5.png";

export default function Whitepaper() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 col-md-12">
            <div className="whitepaper-image" style={{ marginTop: "100px" }}>
              <img src={image5} alt="" className="whitepaper-img" />
            </div>
          </div>
          <div className="col-12 col-lg-5 col-md-12">
            <div className="whitepaper">
              <div className="whitepaper-content">
                <h4 className="text-light fs-2">Downoad Our Whitepaper</h4>
                <p className="text-light my-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore qui iste asperiores harum maiores praesentium facere
                  ullam blanditiis, odio dolorum. Officia quisquam eaque
                  suscipit facere ducimus, sit quaerat. Numquam, corrupti?
                </p>
                <div className="whitepaper-link">
                  <a href="/" className="whitepaper-button">
                    GET WHITEPAPER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
