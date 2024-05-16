import React, { useState } from 'react'

const Certificate = () => {
    const [name, setName] = useState("");
    const handleDownload = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/generate-certificate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name }),
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            // Create a link and click it to initiate the download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'certificate.pdf');
            document.body.appendChild(link);
            link.click();

            // Clean up
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error generating certificate:', error);
        }
    }
    return (
        <div>
            <h1>Certificate Generator by Nikhil</h1>
            <h3>Enter Your Name: </h3>
            <small>(To be displayed on Certificate) <br /></small>
            <input type='text' placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
            <button type='button' onClick={handleDownload}>Download Now</button>
        </div>
    )
}

export default Certificate
