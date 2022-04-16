import React from 'react'
import team1 from "./images/team1.png"
import team2 from "./images/team2.png"
import team3 from "./images/team3.png"
import team4 from "./images/team4.png"
import "./Team.css"

export default function OurTeam() {
    const teamInfo = [
        {
            img: [team1],
            name: "JOMAN HELAL",
            designation: "EXECUTIVE OFFICER",
            site: "in",
        },
        {
            img: [team2],
            name: "SLANS ALONS",
            designation: "BUSINESS DEVELOPMENT",
            site: "in",
        },
        {
            img: [team3],
            name: "JOSHA MICHAL",
            designation: "UX/UI DESIGNER",
            site: "in",
        },
        {
            img: [team4],
            name: "JOHAN WRIGHT",
            designation: "HEAD OF MARKETING",
            site: "in",
        },
    ];
    const renderTeam = (teamInfo, index) => {
        return (

            <div className='col-lg-3 col-sm-6 col-xs-12' key={index}  >
                <div className="team">
                    <div className="team-image">
                        <img src={teamInfo.img} alt="" className="team-img" />
                        <h5 className='text-light'>{teamInfo.name}</h5>
                        <p style={{ color: "#81819C" }}>{teamInfo.designation}</p>
                    </div>
                    <div className="site">
                        <span className='text-info'><a href="/" style={{ textDecoration: "none" }}><strong>{teamInfo.site}</strong></a></span>
                    </div>
                </div>
            </div>

        );
    }
    return (
        <div>
            <section>
                <div className="container">
                    <div className="our-team">
                        <div className="team-content text-center" style={{ marginTop: "100px" }}>
                            <span className='gradient-text'>Our Team</span>
                            <h3 className='text-light my-3'>Awesome Team</h3>
                            <p style={{ color: "#81819C" }}>
                                Our ICO Template Will Be A Perfect Platform For Presenting Your
                                Ico Launch.
                                <br />
                                This Landing Page Comes In Great And Clean Design
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <div className="row" style={{maxWidth:"1120px", margin:" 50px auto"}}>{teamInfo.map(renderTeam)}</div>
        </div>
    )
}
