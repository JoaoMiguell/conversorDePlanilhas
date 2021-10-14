var pdf = require('html-pdf')

class PdfParse {
    static WritePdf(fileName, html) {
        pdf.create(html).toFile(fileName, (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}

module.exports = PdfParse