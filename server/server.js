const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const fs = require('fs').promises;

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000'
}));


async function generateCertificate(name, templatePath, outputPath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 200, height: 200 });

    // Load the template PDF
    await page.goto(`file://${__dirname}/${templatePath}`);

    // Overlay user's name onto the certificate
    console.log('The name of the user is', name);
    await page.evaluate((name) => {
        const nameElement = document.createElement('div');
        nameElement.textContent = name;
        nameElement.style.position = 'absolute';
        nameElement.style.color = 'black';
        nameElement.style.top = '50%';
        nameElement.style.backgroundColor = 'red';
        nameElement.style.left = '50%';
        nameElement.style.transform = 'translate(-50%, 0)';
        nameElement.style.fontSize = '60px';
        nameElement.style.fontFamily = 'Arial, sans-serif';
        nameElement.style.textAlign = 'center';
        document.body.appendChild(nameElement);
    }, name);

    // Wait for the overlay to be added
    await new Promise(resolve => setTimeout(resolve, 5000)); // Adjust as needed

    // Generate PDF
    await page.pdf({ path: outputPath, displayHeaderFooter: false });

    await browser.close();
    console.log('Certificate generation complete!');
}


app.post('/generate-certificate', async (req, res) => {
    const { name } = req.body;
    const templatePath = 'certificate_template.pdf';
    const outputPath = `certificate_${Date.now()}.pdf`;

    try {
        await generateCertificate(name, templatePath, outputPath);
        res.download(outputPath);
    } catch (error) {
        console.error('Error generating certificate:', error);
        res.status(500).send('Error generating certificate');
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});