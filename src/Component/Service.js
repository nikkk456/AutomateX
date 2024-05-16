import React from 'react'

const Service = () => {
    return (
        <div className='container m-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <center>
                            <div className="card" style={{ width: "30rem", boxShadow: "4px 4px 5px 1px grey" }}>
                                <img src="./certificates.jpg" className="card-img-top" alt="..." />
                                <div className="card-body" style={{ height: "274px" }}>
                                    <h5 className="card-title">Certificate Generator</h5>
                                    <p className="card-text">Generate certificate with ease by AutomateX. Choose various template from website and start editing.</p>
                                    <a href="/certificate" className="btn btn-primary">Start For Free</a>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <center>
                            <div className="card" style={{ width: "30rem", boxShadow: "4px 4px 5px 1px grey" }}>
                                <img src="./invoice-generator-hero.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Invoice Generator</h5>
                                    <p className="card-text">Generate Invoice with ease by AutomateX. Choose various template from website and start editing.</p>
                                    <a href="/invoice" className="btn btn-primary">Start For Free</a>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
