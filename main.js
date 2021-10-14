const Reader = require('./classes/Reader')
const Processor = require('./classes/Processor')
const HtmlParse = require('./classes/HtmlParse')
const Pdfparse = require('./classes/PdfParse')
const Writer = require('./classes/Writer')

var reader = new Reader()
var wrirter = new Writer()

var Directory = './Arquivo/planilha.csv'

async function main() {
    var fileReader = await reader.read(Directory)
    var processor = new Processor(fileReader)
    
    var html = await HtmlParse.parse(processor.header, processor.rows)
    var writeHtml = await wrirter.write(`${Date.now()}.html`, html)
    var writePdf = await Pdfparse.WritePdf(`${Date.now()}.pdf`, html)
}

main ()