const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our Home Page')
    }
    if(req.url==='/about'){
        res.end('Here is the short history')
    }
    else{
        res.end(`<H1>OOPS! Something went Wrong</H1>`)
    }
    res.write('Welcome to our Homepage')
    res.end()
})

server.listen(5000)