var fs = require('fs')
var http = require('http')
var url = require('url')
http
    .createServer(function(req,res){
        var parseObj = url.parse(req.url, true)
        //console.log(parseObj)
        if (parseObj.pathname==='/') {
            fs.readFile('./test1.html',function(err,data){
                if (err) {
                    console.log('读取文件失败')
                } else {
                   res.end(data)
                }
            })
        } else if(parseObj.pathname==='/p'){
            var p1 = new Promise(function(resolve,reject){
                var comment = parseObj.query
                resolve(comment.tt1)
                console.log(comment.tt1)
            })
        }
    })
    .listen(2000,function(err){
        if (err) {
            console.log('服务器开启失败')
        } else {
            console.log('runnng...')
        }
    })
p1.then(function(data){
   console.log(data)
})