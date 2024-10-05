const { readFile, writeFile} = require('fs')

//ASYNC happens using callback
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
})