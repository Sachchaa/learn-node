// CommonJS, every file is module by default
// Modules - Encapsulated code

const names = require('./names')
const sayHi = require('./utils')

sayHi(names.john)
sayHi(names.peter)