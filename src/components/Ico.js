import React from "react";
import choose1 from "./images/choose1.svg";
import choose2 from "./images/choose2.svg";
import choose3 from "./images/choose3.svg";
import choose4 from "./images/choose4.svg";
import choose5 from "./images/choose5.svg";
import choose6 from "./images/choose6.svg";
import choose7 from "./images/choose7.svg";
import choose8 from "./images/choose8.svg";

export default function Ico() {
  //   const icoInfo = [
  //     {
  //       img: [choose1],
  //       title: "Instant settlement",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla   neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.",
  //     },
  //     {
  //       img: [choose2],
  //       title: "Instant settlement",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla   neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.",
  //     },
  //     {
  //       img: [choose3],
  //       title: "Instant settlement",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla   neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.",
  //     },
  //     {
  //       img: [choose4],
  //       title: "Instant settlement",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla   neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.",
  //     },
  //     {
  //       img: [choose5],
  //       title: "Instant settlement",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla   neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.",
  //     },
  //     {
  //       img: [choose6],
  //       title: "Instant settlement",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla   neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.",
  //     },
  //     {
  //       img: [choose7],
  //       title: "Instant settlement",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla   neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.",
  //     },
  //     {
  //       img: [choose8],
  //       title: "Instant settlement",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla   neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.",
  //     },
  //   ];
  //   const renderICO = (icoInfo, index) => {
  //     return (
  //       <div>
  //         <div
  //           className="container"
  //           key={index}
  //           style={{ maxWidth: "1100px", margin: "85px auto" }}
  //         >
  //           <div className="col-12 col-md-6 col-lg-3">
  //             <div className="choose-image-container">
  //               <img
  //                 src={icoInfo.img}
  //                 alt=""
  //                 className="choose-img"
  //                 style={{ display: "block", margin: "auto", width: "50px" }}
  //               />
  //             </div>
  //             <div className="image-content py-3">
  //               <h6 className="text-light text-center fs-5">{icoInfo.title}</h6>
  //               <p style={{ color: "#81819C", textAlign: "center" }}>
  //                 {icoInfo.description}
  //               </p>
  //             </div>
  //           </div>{" "}
  //         </div>
  //       </div>
  //     );
  //   };
  return (
    <div>
      <section>
        <div className="container">
          <div
            className="choose-content text-center"
            style={{ marginTop: "100px" }}
          >
            <span className="gradient-text my-1">Why choose us</span>
            <h2 className="text-light my-3">Our Main Features</h2>
            <p style={{ color: "#81819C" }}>
              Our ICO Template Will Be A Perfect Platform For Presenting Your
              Ico Launch.
              <br />
              This Landing Page Comes In Great And Clean Design
            </p>
          </div>
        </div>
        <div
          className="container"
          style={{ maxWidth: "1100px", margin: "85px auto" }}
        >
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="choose-image-container">
                <img
                  src={choose1}
                  alt=""
                  className="choose-img"
                  style={{ display: "block", margin: "auto", width: "50px" }}
                />
              </div>
              <div className="image-content py-3">
                <h6 className="text-light text-center fs-5">
                  Instant settlement
                </h6>
                <p style={{ color: "#81819C", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="choose-image-container">
                <img
                  src={choose2}
                  alt=""
                  className="choose-img"
                  style={{ display: "block", margin: "auto", width: "37px" }}
                />
              </div>
              <div className="image-content py-3">
                <h6 className="text-light text-center fs-5">Flexibility</h6>
                <p style={{ color: "#81819C", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="choose-image-container">
                <img
                  src={choose3}
                  alt=""
                  className="choose-img"
                  style={{ display: "block", margin: "auto", width: "50px" }}
                />
              </div>
              <div className="image-content py-3">
                <h6 className="text-light text-center fs-5">
                  Blockchain technology
                </h6>
                <p style={{ color: "#81819C", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="choose-image-container">
                <img
                  src={choose4}
                  alt=""
                  className="choose-img"
                  style={{ display: "block", margin: "auto", width: "50px" }}
                />
              </div>
              <div className="image-content py-3">
                <h6 className="text-light text-center fs-5">
                  Experienced team
                </h6>
                <p style={{ color: "#81819C", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="choose-image-container">
                <img
                  src={choose5}
                  alt=""
                  className="choose-img"
                  style={{ display: "block", margin: "auto", width: "50px" }}
                />
              </div>
              <div className="image-content py-3">
                <h6 className="text-light text-center fs-5">Connect free</h6>
                <p style={{ color: "#81819C", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="choose-image-container">
                <img
                  src={choose6}
                  alt=""
                  className="choose-img"
                  style={{ display: "block", margin: "auto", width: "50px" }}
                />
              </div>
              <div className="image-content py-3">
                <h6 className="text-light text-center fs-5">AI matching</h6>
                <p style={{ color: "#81819C", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="choose-image-container">
                <img
                  src={choose7}
                  alt=""
                  className="choose-img"
                  style={{ display: "block", margin: "auto", width: "50px" }}
                />
              </div>
              <div className="image-content py-3">
                <h6 className="text-light text-center fs-5">Low cost</h6>
                <p style={{ color: "#81819C", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="choose-image-container">
                <img
                  src={choose8}
                  alt=""
                  className="choose-img"
                  style={{ display: "block", margin: "auto", width: "50px" }}
                />
              </div>
              <div className="image-content py-3">
                <h6 className="text-light text-center fs-5">
                  Digital personas
                </h6>
                <p style={{ color: "#81819C", textAlign: "center" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
