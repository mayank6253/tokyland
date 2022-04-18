import React from 'react'
import "../contact.css"

export default function Contact() {
  return (
    <div>
      <section>
        <div id="contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contactus" style={{ marginTop: "100px" }}>
                  <div className="contact-details text-center">
                    <span className='gradient-text'>Contact us</span>
                    <h2 className='text-light'>Contact With Us</h2>
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
                <div className="container">
                  <div className="contact-form">
                    <form action="" className='cf'>
                      <div className="row">
                        <div className="col">
                          <input type="text" className="form-control" placeholder="Name" aria-label="name" />
                        </div>
                        <div className="col">
                          <input type="text" className="form-control" placeholder="Email" aria-label="email" />
                        </div>
                        <div className="subject">
                          <input type="text" className="form-control" placeholder="Subject" aria-label="subject" />
                        </div>
                        <div className="message">
                          <textarea name="textarea" placeholder='Message' cols="30" rows="10" className="form-control"></textarea>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
