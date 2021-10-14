var ejs = require('ejs')

class HtmlParse {
    static async parse(header,rows) {
        return await ejs.renderFile('./table.ejs', {
            header: header,
            rows: rows
        })
    }
}

module.exports = HtmlParse