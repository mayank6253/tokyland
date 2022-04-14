import React from "react";
import image4 from "./images/image4.png";
import image8 from "./images/image8.png";
import { ImCheckboxChecked } from "react-icons/im";

export default function Platform() {
  return (
    <div>
      <section>
        <div className="conatiner">
          <div className="platform my-5">
            <div className="platform-content text-center">
              <span className="gradient-text py-2">Try our Platform</span>
              <h2 className="text-center text-light py-2">
                Our Trading Platform
              </h2>
              <p
                style={{
                  color: "#81819C",
                  textAlign: "center",
                }}
              >
                Our ICO Template Will Be A Perfect Platform For Presenting Your
                Ico Launch.
                <br /> This Landing Page Comes In Great And Clean Design
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 col-md-12">
              <div className="powerful">
                <div className="powerful-content bg-transparent">
                  <h4 className="text-light fs-3 bg-transparent">
                    Powerful platform.
                  </h4>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "19px",
                      marginTop: "19px",
                      background: "transparent",
                    }}
                  >
                    We are dedicated to providing professional service with the
                    highest degree of honesty and integrity, and strive to add
                    value to our tax and consulting services.
                  </p>
                </div>

                <div className="powerful-list ">
                  <ul className="list-item">
                    <li className="item">
                      {" "}
                      <ImCheckboxChecked size={25} className="icon" />
                      Competent Professionals
                    </li>
                    <li className="item">
                      {" "}
                      <ImCheckboxChecked size={25} className="icon" />
                      Affordable Prices
                    </li>
                    <li className="item">
                      {" "}
                      <ImCheckboxChecked size={25} className="icon" />
                      High Successful Recovery
                    </li>
                    <li className="item">
                      <ImCheckboxChecked size={25} className="icon" />
                      Creative Layout
                    </li>
                  </ul>
                </div>
                <button className="read-more border border-1 border-light text-light my-3 rounded-pill">
                  READ MORE
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-5 col-md-12">
              <div className="platform-image">
                <div className="image2">
                  <img src={image4} alt="" className="vert-move2" />
                </div>
                <div className="image3">
                  <img src={image8} alt="" className="vert-move2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
