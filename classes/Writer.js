var fs = require('fs')
var util = require('util')

class Writer {
    constructor() {
        this.reader = util.promisify(fs.writeFile)
    }

    async write(fileName, data) {
        try {
            return await this.reader(fileName, data)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Writer