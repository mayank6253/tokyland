import React from 'react'
import "./Update.js"
export default function Update() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-ms-12">
                            <div className="updatw-wrapper" style={{ marginTop: "100px" }}>
                                <div className="update-content text-center">
                                    <h3 className='text-light'>Don’t Miss ICO News And Updates!</h3>
                                    <p className='text-light fw-light w-50 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="form text-center" style={{ marginTop: "70px", border: "1px solid", width: "30%", margin: " 50px auto", padding: "30px 30px", borderRadius:"25px" }}>
                                    <form action="">
                                        <input type="email" name="email" id="#exampleEmail" placeholder='Enter your Email' /> <br />
                                        <button className="read-more border border-1 border-light text-light my-3 rounded-pill">
                                            SUBSCRIBE
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
