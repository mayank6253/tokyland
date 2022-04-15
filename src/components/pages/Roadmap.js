import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiMissileLauncher, GiRocketFlight, GiPoliceBadge } from 'react-icons/gi'
import "../Roadmap.css"


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
                  Our ICO Template Will Be A Perfect Platform For Presenting Your
                  Ico Launch.
                  <br /> This Landing Page Comes In Great And Clean Design
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className='col-md-12' style={{marginTop:"100px"}}>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'transparent', color: '#fff' }}

                    date="22 Sep 2018"
                    icon={<GiMissileLauncher />}
                  >
                    <h3 className="vertical-timeline-element-title">Listing to the major exchanges</h3>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'transparent', color: '#fff' }}
                    date="27 Nov 2018"
                    icon={<GiRocketFlight />}
                  >
                    <h3 className="vertical-timeline-element-title">Platform integration to marketplaces</h3>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'transparent', color: '#fff' }}
                    date="19 Dec 2018"

                    icon={<GiPoliceBadge />}
                  >
                    <h3 className="vertical-timeline-element-title">Crypto Wallet version release</h3>
                    <h4 className="vertical-timeline-element-subtitle">FREELANCING &amp; ESCROW</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="25 Jan 2019"
                    contentStyle={{ background: 'transparent', color: '#fff' }}
                    icon={<GiPoliceBadge />}
                  >
                    <h3 className="vertical-timeline-element-title">Platform ealier version development</h3>
                    <h4 className="vertical-timeline-element-subtitle">INSURING DEFI</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                    </p>
                  </VerticalTimelineElement>

                </VerticalTimeline>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
