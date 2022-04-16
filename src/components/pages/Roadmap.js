import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  GiMissileLauncher,
  GiRocketFlight,
  GiPoliceBadge,
} from "react-icons/gi";
import "../Roadmap.css";

export default function Roadmap() {
  return (
    <div>
      <section>
        <div id="roadmap">
          <div className="conatiner">
            <div className="ico-roadmap" style={{ marginTop: "100px" }}>
              <div className="ico-roadmap-content text-center">
                <span className="gradient-text">ICO Roadmap</span>
                <h2 className="text-light my-3">Our ICO Roadmap</h2>
                <p
                  style={{
                    color: "#81819C",
                  }}
                >
                  Our ICO Template Will Be A Perfect Platform For Presenting
                  Your Ico Launch.
                  <br /> This Landing Page Comes In Great And Clean Design
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12" style={{ marginTop: "100px" }}>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "transparent", color: "#fff" }}
                    date="22 Sep 2018"
                    icon={<GiMissileLauncher />}
                  >
                    <p className="vertical-timeline-element-title fs-5">
                      Starting discord and telegram. Sweepwidget giveaway
                      website and dapps development. Releasing white paper
                      contract development
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "transparent", color: "#fff" }}
                    date="27 Nov 2018"
                    icon={<GiRocketFlight />}
                  >
                    <p className="vertical-timeline-element-title fs-5">
                      contract audit Kyc on pinksale Launch our token Trending
                      on dextool Cmc and cg listing Starting our banner ads
                    </p>

                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed efficitur ex sit amet massa scelerisque scelerisque.
                      Aliquam erat volutpat. Aenean interdum finibus efficitur.
                      Praesent dapibus dolor felis, eu ultrices elit molestie.
                    </p> */}
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "transparent", color: "#fff" }}
                    date="19 Dec 2018"
                    icon={<GiPoliceBadge />}
                  >
                    <p className="vertical-timeline-element-title fs-5">
                      10 million mc Website v2 Bsc and eth Bridge CM3 Bring new
                      team members Develop our nft market place Big influencers
                      marketing Sweepwidget nft giveaway Releasing CM3 nft Nft
                      presale mint Releasing nft stake contract Audit our stake
                      contract Releasing our mearch store Partnership
                    </p>
                    {/* <h4 className="vertical-timeline-element-subtitle">
                      FREELANCING &amp; ESCROW
                    </h4> */}
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed efficitur ex sit amet massa scelerisque scelerisque.
                      Aliquam erat volutpat. Aenean interdum finibus efficitur.
                      Praesent dapibus dolor felis, eu ultrices elit molestie.
                    </p> */}
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="25 Jan 2019"
                    contentStyle={{ background: "transparent", color: "#fff" }}
                    icon={<GiPoliceBadge />}
                  >
                    <p className="vertical-timeline-element-title fs-5">
                      40 million mc Rebranding our logo And website Btok
                      marketing start Big sites banner ads Bring secret utility
                      Sweepwidget secret giveaway Certik audit
                    </p>
                    {/* <h4 className="vertical-timeline-element-subtitle">
                      INSURING DEFI
                    </h4> */}
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed efficitur ex sit amet massa scelerisque scelerisque.
                      Aliquam erat volutpat. Aenean interdum finibus efficitur.
                      Praesent dapibus dolor felis, eu ultrices elit molestie.
                    </p> */}
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
