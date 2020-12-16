const http = require('http')
const fs  = require('fs')
const path  = require('path')

var server = http.createServer((req, res)=>{
    
    var indexFilePath = path.resolve('index.html')
    var shopFile = path.resolve('shop.html')
    var currency = path.resolve('currency.json')
    var errorFile = path.resolve('404.html')
    var json_data = { url: req.url, time: new Date()} 

    if(req.url === '/'){
        res.writeHead(200, {"content-type" : "text/html"})
        fs.createReadStream(indexFilePath, 'utf8').pipe(res)
    }
    else if( req.url =='/shop'){
        res.writeHead(200, {"content-type" : "text/html"})
        fs.createReadStream(shopFile, 'utf8').pipe(res)
    }
    else if( req.url =='/api'){
        res.writeHead(200, {"content-type" : "application/json"})
        res.end(JSON.stringify(json_data))

    }
    else if( req.url =='/api/currency'){
        res.writeHead(200, {"content-type" : "application/json"})
        fs.createReadStream(currency, 'utf8').pipe(res)
    }
    else{
        res.writeHead(404, {"content-type" : "text/html"})
        fs.createReadStream(errorFile, 'utf8').pipe(res)
    }
   
   
})

server.listen(8080, '127.0.0.1')
console.log('app running...')