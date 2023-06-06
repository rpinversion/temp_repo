const http = require('http')
    

const server =  http.createServer((req,res) => {
    // console.log(req)
    if(req.url === '/')
    {
        res.end('this is the home page')
    }
    if(req.url === '/about'){
        res.end('this is the about page')
    }

    res.end(`
    <h1>oops this page not found</h1>
    `)
})

server.listen(5000)