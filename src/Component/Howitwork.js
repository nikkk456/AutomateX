import React from 'react'

const Howitwork = () => {
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <h2 className='text-center mt-5'>How It Work?</h2>
                </div>
                <div data-aos="fade-right" data-aos-duration="3000">
                    <div className='row mt-3'>
                        <div className='col-md-7'>
                            <h4>Step1: Register Yourself</h4>
                            <p>Users begin by registering on the AutomateX website by providing their basic information such as name, email address, and password.<br />
                                Upon successful registration, users gain access to the platform's features and functionalities</p>
                        </div>
                        <div className='col-md-5'>
                            <center><img style={{ width: "50%" }} src='./Registration.png' alt='registration' /></center>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="3000">
                    <div className='row mt-3'>
                        <div className='col-md-5'>
                            <center><img style={{ width: "50%" }} src='./Service.png' alt='Service Selection' /></center>
                        </div>
                        <div className='col-md-7'>
                            <h4>Step2: Service Selection</h4>
                            <p>Once logged in, users are presented with the option to choose between two primary services: Certificate Generator and Invoice Generator.<br />Users can select the service they require based on their specific needs and preferences.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="3000">
                    <div className='row mt-3'>
                        <div className='col-md-7'>
                            <h4>Step3: Template Selection</h4>
                            <p>After selecting a service, users are directed to a template gallery where they can browse through a variety of free templates available for certificates or invoices.<br />Users can preview each template to assess its design, layout, and suitability for their purpose.</p>
                        </div>
                        <div className='col-md-5'>
                            <center><img style={{ width: "60%" }} src='./Template.png' alt='Template Selection' /></center>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="3000">

                    <div className='row mt-3'>
                        <div className='col-md-5'>
                            <center><img style={{ width: "50%" }} src='./Form.png' alt='Form Completion' /></center>
                        </div>
                        <div className='col-md-7'>
                            <h4>Step4: Form Completion</h4>
                            <p>Upon selecting a template, users are prompted to fill out a form with the required information for the certificate or invoice.<br />The form may include fields such as recipient name, date, purpose, company details (for invoices), and any other relevant information.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="3000">

                    <div className='row mt-3'>
                        <div className='col-md-7'>
                            <h4>Step5: Document Generation</h4>
                            <p>After completing the form, users can initiate the document generation process by clicking on the "Generate PDF" button.<br />
                                AutomateX then processes the user-input data and merges it with the selected template to create a customized PDF document.</p>
                        </div>
                        <div className='col-md-5'>
                            <center><img style={{ width: "50%" }} src='./Document.png' alt='Document Generation' /></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Howitwork
