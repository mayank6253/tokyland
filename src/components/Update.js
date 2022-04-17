import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import "./Update.css";
export default function Update() {
  const [subscribe, setSubscribe] = useState({
    email: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSubscribe({ ...subscribe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NEW RECORDS
    const newRecord = { ...subscribe, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);

    setSubscribe({
      email: "",
    });
  };
  console.log(records);
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-ms-12">
              <div className="update-wrapper">
                <div className="update-content text-center bg-transparent">
                  <h3 className="text-light bg-transparent">
                    Don’t Miss ICO News And Updates!
                  </h3>
                  <p className="text-light fw-light  m-auto bg-transparent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    quis accumsan nisi Ut ut felis congue nisl hendrerit
                    commodo.
                  </p>
                </div>

                <div className="container bg-transparent">
                  <div
                    className="form text-center"
                    // style={{
                    //   marginTop: "70px",
                    //   border: "1px solid",
                    //   width: "37%",
                    //   margin: " 50px auto",
                    //   padding: "20px 20px 20px",
                    //   borderRadius: "25px",
                    //   background: "#fff",
                    // }}
                  >
                    <form
                      action=""
                      className="position-relative bg-transparent"
                      onSubmit={handleSubmit}
                    >
                      <FaHome color="#7EABDC" size={22} className="home" />
                      <input
                        className="email"
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={subscribe.email}
                        onChange={handleInput}
                      />{" "}
                      <br />
                      <button
                        className="subscribe border border-1 border-light text-light my-3 rounded-pill"
                        type="submit"
                      >
                        SUBSCRIBE
                      </button>
                    </form>
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
