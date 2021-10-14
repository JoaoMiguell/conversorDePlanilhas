var fs = require('fs')
var util = require('util')

class Processor {
    constructor(file) {
        this.spliter = file.split('\r\n')
        this.header = this.spliter.shift(',').split(',')
        this.rows = []
        this.spliter.forEach(row => {
            var array = row.split(',')
            this.rows.push(array)
        });
    }
}

module.exports = Processor