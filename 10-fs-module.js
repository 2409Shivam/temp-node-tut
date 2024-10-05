const { readFileSync, writeFileSync } = require('fs')

//Reading the file
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)

//writeFilesync
writeFileSync('./content/result-sync.txt',`Here is the result-sync.txt : ${first},${second}`)