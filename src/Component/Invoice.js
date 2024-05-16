import React, { useState } from 'react'

const Invoice = () => {
    const [data, setData] = useState({
        GST: "",
        PAN: "",
        client_name: "",
        client_address: "",
        client_GST: "",
        description: "",
        qty: "",
        rate: "",
        SGST: "",
        CGST: "",
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/generate-invoice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            // Create a link and click it to initiate the download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'invoice.pdf');
            document.body.appendChild(link);
            link.click();

            // Clean up
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error generating certificate:', error);
        }
    }
    return (
        <div className='container'>
            <h1>Invoice Generator by Nikhil</h1>
            <h3>Enter Some Details to generate Invoice Automatically</h3>
            <form >
                <div className='container mb-3'>
                    <div className='row'>
                        <div className='col-md-6 col-6'>
                            <label className="form-label">
                                Enter your GST Number:
                            </label>
                            <input className="form-control" type='text' name='GST' value={data.GST} onChange={handleChange} />
                        </div>
                        <div className='col-md-6 col-6'>
                            <label className="form-label">
                                Enter your PAN Number:
                            </label>
                            <input className="form-control" type='text' name='PAN' value={data.PAN} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className='container mb-3'>
                    <div className='row'>
                        <div className='col-md-6 col-6'>
                            <label className="form-label">
                                Enter client Name:
                            </label>
                            <input className="form-control" type='text' name='client_name' value={data.client_name} onChange={handleChange} />
                        </div>
                        <div className='col-md-6 col-6'>
                            <label className="form-label">
                                Enter client GSTIN/UIN:
                            </label>
                            <input className="form-control" type='text' name='client_GST' value={data.client_GST} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className='container mb-3'>
                    <div className='row'>
                        <label className="form-label">
                            Enter client Address:
                        </label>
                        <input className="form-control" type='text' name='client_address' value={data.client_address} onChange={handleChange} />
                    </div>
                </div>
                <div className='conatiner mb-3'>
                    <div className='row'>
                        <div className='col-md-6 col-6'>
                            <label className="form-label">
                                Enter quantity of order:
                            </label>
                            <input className="form-control" type='number' name='qty' value={data.qty} onChange={handleChange} />
                        </div>
                        <div className='col-md-6 col-6'>
                            <label className="form-label">
                                Enter Rate of product:
                            </label>
                            <input className="form-control" type='number' name='rate' value={data.rate} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className='container mb-3'>
                    <div className='row'>
                        <label className="form-label">
                            Enter description of order:
                        </label>
                        <input className="form-control" type='text' name='description' value={data.description} onChange={handleChange} />
                    </div>
                </div>
                <div className='container mb-3'>
                    <div className='row'>
                        <div className='col-md-6 col-6'>
                            <label className="form-label">
                                Enter Rate of SGST:
                            </label>
                            <input className="form-control" type='number' name='SGST' value={data.SGST} onChange={handleChange} />
                        </div>

                        <div className='col-md-6 col-6'>
                            <label className="form-label">
                                Enter Rate of CGST:
                            </label>
                            <input className="form-control" type='number' name='CGST' value={data.CGST} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </form>
            <button type='button' className='btn mb-3' style={{border:"1ps solid black", backgroundColor:"#3636e87a", boxShadow:"5px 5px 4px 1px grey"}} onClick={handleSubmit}>Download Now!</button>
        </div>
    )
}

export default Invoice
