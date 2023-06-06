const fs = require('fs')
console.log('start')

const first = fs.readFileSync('./first.txt','utf-8')
const second = fs.readFileSync('./second.txt','utf-8')

fs.writeFileSync(
    './second.txt', `${first}`,{flag :'a'}
)
