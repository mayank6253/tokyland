import React, { useRef, useState, useEffect } from "react";
import sale1 from "./images/sale1.svg"
import sale2 from "./images/sale2.svg"
import sale3 from "./images/sale3.svg"
import sale4 from "./images/sale4.svg"
import sale5 from "./images/sale5.svg"
import sale6 from "./images/sale6.svg"
import "./Tokensale.css";


export default function TokenSale() {
    const [timerDays, setTimeDays] = useState('00');
    const [timerHours, setTimeHours] = useState('00');
    const [timerMinutes, setTimeMinutes] = useState('00');
    const [timerSeconds, setTimeSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('July 7, 2022 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop timer
                clearInterval(interval.current)
            } else {
                //update timer
                setTimeDays(days);
                setTimeHours(hours);
                setTimeMinutes(minutes);
                setTimeSeconds(seconds);
            }
        }, 1000)
    }
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        };
    });
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5 col-md-12">
                            <div className="token-sale-container">
                                <div className="token-sale" style={{ marginTop: "50px" }}>
                                    <div className="token-sale-content bg-transparent">
                                        <h3 className="text-light text-center my-4" style={{ backgroundImage: "linear-gradient(73deg, #d787f5, #3634bb)" }}>TOKEN SALE ENDS IN</h3>
                                    </div>
                                </div>
                                <div className="container" style={{ display: "flex", alignItems: "center", marginBottom: "30px", background: "transparent" }}>
                                    <section className="countdown">
                                        <p className="countdown-timer">{timerDays}</p>
                                        <span className="days text-light">days</span>
                                    </section>
                                    <section className="countdown">
                                        <p className="countdown-timer">{timerHours}</p>
                                        <span className=" days text-light">hours</span>
                                    </section>
                                    <section className="countdown">
                                        <p className="countdown-timer">{timerMinutes}</p>
                                        <span className="days text-light">minutes</span>
                                    </section>
                                    <section className="countdown">
                                        <p className="countdown-timer">{timerSeconds}</p>
                                        <span className="days text-light">seconds</span>
                                    </section>
                                </div>
                                <div className="container" style={{ backgroundImage: "linear-gradient(73deg, #d787f5, #3634bb)" }}>
                                    <div className="values">
                                        <span className="value1">33m</span>
                                        <span className="value2">75m</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="values">
                                        <span className="softcap">Softcap in 103 days</span>
                                        <span className="hardcap">Token Hardcap</span>
                                    </div>
                                    <button className="buy-more border border-1 border-light text-light my-3 rounded-pill">
                                        BY MORE TOKENS
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div className="col-12 col-lg-5 col-md-12">

                            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                                <div className="col">
                                    <div className="service">
                                        <div className="sale-image">
                                            <img src={sale1} alt="" className="img-icon" />
                                        </div>
                                        <div className="service-box-content ">
                                            <h3 className="text-light text-center" style={{ marginRight: "33px", fontSize: "18px" }}>Delivery Reports</h3>
                                            <p style={{ color: "#81819C", paddingLeft: "0px" }}>Lorem ipsum dolor sit amet, conse ctetur.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="service">
                                        <div className="sale-image">
                                            <img src={sale2} alt="" className="img-icon" />
                                        </div>
                                        <div className="service-box-content ">
                                            <h3 className="text-light text-center" style={{ marginRight: "33px", fontSize: "18px" }}>Branded Sender</h3>
                                            <p style={{ color: "#81819C", paddingLeft: "0px" }}>Lorem ipsum dolor sit amet, conse ctetur.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="service">
                                        <div className="sale-image">
                                            <img src={sale3} alt="" className="img-icon" />
                                        </div>
                                        <div className="service-box-content ">
                                            <h3 className="text-light text-center" style={{ marginRight: "33px", fontSize: "18px" }}>SMS Messaging</h3>
                                            <p style={{ color: "#81819C", paddingLeft: "0px" }}>Lorem ipsum dolor sit amet, conse ctetur.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col">
                                    <div className="service">
                                        <div className="sale-image">
                                            <img src={sale4} alt="" className="img-icon" />
                                        </div>
                                        <div className="service-box-content ">
                                            <h3 className="text-light text-center" style={{ marginRight: "33px", fontSize: "18px" }}>Marketing Plans</h3>
                                            <p style={{ color: "#81819C", paddingLeft: "0px" }}>Lorem ipsum dolor sit amet, conse ctetur.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="service">
                                        <div className="sale-image">
                                            <img src={sale5} alt="" className="img-icon" />
                                        </div>
                                        <div className="service-box-content ">
                                            <h3 className="text-light text-center" style={{ marginRight: "33px", fontSize: "18px" }}>Seed Routing</h3>
                                            <p style={{ color: "#81819C", paddingLeft: "0px" }}>Lorem ipsum dolor sit amet, conse ctetur.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="service">
                                        <div className="sale-image">
                                            <img src={sale6} alt="" className="img-icon" />
                                        </div>
                                        <div className="service-box-content ">
                                            <h3 className="text-light text-center" style={{ marginRight: "33px", fontSize: "18px" }}>Traking API</h3>
                                            <p style={{ color: "#81819C", paddingLeft: "0px" }}>Lorem ipsum dolor sit amet, conse ctetur.
                                            </p>
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
