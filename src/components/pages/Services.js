import React from "react";

export default function Services() {
  const serviceInfo = [
    {
      number: "1",
      title: "Creative Chart Modules",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
    },
    {
      number: "2",
      title: "Adaptive Social Assistant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
    },
    {
      number: "3",
      title: "Ecommerce Embedded",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
    },
    {
      number: "4",
      title: "Ecommerce Embedded",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
    },
    {
      number: "5",
      title: "Adaptive Social Assistant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
    },
    {
      number: "6",
      title: "Creative Chart Modules",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
    },
  ];
  const renderService = (serviceInfo, index) => {
    return (
      <>
        <div className=" col-lg-4 col-md-6 grid-items my-5" key={index}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-center text-light">
                {serviceInfo.title}
              </h5>
              <p className="card-text text-light text-center" style={{marginTop:"20px"}}>
                {serviceInfo.description}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <section>
        <div id="#services">
          <div className="container">
            <div className="service-content text-center">
              <span className="gradient-text my-2">Our Services</span>
              <h2 className="text-light">What We Speciaized In</h2>
              <p style={{ color: "#81819C", marginTop: "20px" }}>
                Our ICO Template Will Be A Perfect Platform For Presenting Your
                Ico Launch.
                <br />
                This Landing Page Comes In Great And Clean Design
              </p>
            </div>

            <div className="row" style={{background:"#100f43", maxWidth:"1280px", margin:"auto"}}>{serviceInfo.map(renderService)}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
