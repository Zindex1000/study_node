var express = require('express')
var fs = require('fs')
var app = express()


//开放目录
app.use('/public',express.static('./public/'))

app.get('/',function(req,res){
    res.send('hello express!')
})

app.get('/about',function(req,res){
    res.send('about 关于 express!')
})
app.get('/hh',function(req,res){
    fs.readFile('./views/01_1.html',function(err,data){
        if (err) {
            res.send('404 nofond')
        } else {
            res.send(data.toString())
        }
    })
})
app.listen(3000,function(){
    console.log('app is runing...')
})