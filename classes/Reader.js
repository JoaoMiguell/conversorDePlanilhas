var fs = require('fs')
var util = require('util')

class Reader {
    constructor() {
        this.reader = util.promisify(fs.readFile)
    }

    async read(fileName) {
        try {
            return await this.reader(fileName,'utf8')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Reader