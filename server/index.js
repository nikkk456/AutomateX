const express = require('express');
const cors = require('cors');
const { PDFDocument, rgb } = require('pdf-lib');
const { degrees, StandardFonts } = require('pdf-lib');
const fs = require('fs').promises;

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000'
}));


app.post('/generate-certificate', async (req, res) => {
    try {
        // Load the certificate template PDF
        const {name} = req.body;
        const templateBytes = await fs.readFile('certificate_template.pdf');
        const pdfDoc = await PDFDocument.load(templateBytes);
        const TimesRomanBoldItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanBoldItalic)
        const page = pdfDoc.getPages();
        const firstPage = page[0]
        const { width, height } = firstPage.getSize()
        firstPage.drawText(name, {
            x: width/2 -100,
            y: height/2,
            size: 30,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
          const pdfBytes = await pdfDoc.save()

        // Send the modified PDF back to the client
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="certificate.pdf"');
        res.send(Buffer.from(pdfBytes));
    } catch (error) {
        console.error('Error generating certificate:', error);
        res.status(500).send('Error generating certificate');
    }
})
app.post('/generate-invoice', async (req, res) => {
    try {
        // Load the certificate template PDF
        const {GST,
        PAN,
        client_name,
        client_address,
        client_GST,
        description,
        qty,
        rate,
        SGST,
        CGST} = req.body;
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        const amount = qty*rate;
        const amountText = String(amount);

        const total_amount = (SGST/100)*amount + (CGST/100)*amount + amount;
        const total_amount_text = String(total_amount);
        
        console.log(date);
        const templateBytes = await fs.readFile('Invoice_template.pdf');
        const pdfDoc = await PDFDocument.load(templateBytes);
        const TimesRomanBoldItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanBold)
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const page = pdfDoc.getPages();
        const firstPage = page[0]
        const { width, height } = firstPage.getSize()
        firstPage.drawText(GST, {
            x: 80,
            y: height/2 + 630,
            size: 15,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(PAN, {
            x: 70,
            y: height/2 + 608,
            size: 15,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(client_name, {
            x: 83,
            y: height/2 + 440,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(formattedDate, {
            x: width/2 + 170,
            y: height/2 + 433,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(client_address, {
            x: 118,
            y: height/2 + 408,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(client_GST, {
            x: 150,
            y: height/2 + 340,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(description, {
            x: 112,
            y: height/2 + 100,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText('1', {
            x: 50,
            y: height/2 + 100,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(qty, {
            x: width/2 + 70,
            y: height/2 + 100,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(rate, {
            x: width/2 + 170,
            y: height/2 + 100,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(amountText, {
            x: width/2 + 320,
            y: height/2 + 100,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(amountText, {
            x: width/2 + 320,
            y: height/2 - 328,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(SGST, {
            x: width/2 + 320,
            y: height/2 - 368,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(CGST, {
            x: width/2 + 320,
            y: height/2 - 408,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        firstPage.drawText(`${total_amount_text}`, {
            x: width/2 + 320,
            y: height/2 - 490,
            size: 17,
            font: TimesRomanBoldItalic,
            color: rgb(0,0,0),
          })
        
        
          const pdfBytes = await pdfDoc.save()

        // Send the modified PDF back to the client
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="certificate.pdf"');
        res.send(Buffer.from(pdfBytes));
    } catch (error) {
        console.error('Error generating certificate:', error);
        res.status(500).send('Error generating certificate');
    }
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

