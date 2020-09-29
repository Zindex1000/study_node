var express = require('express')

var app = express()

app.use('/public/',express.static('./public/'))

//配置使用express-art-template
//第一个参数表示当渲染以.art结尾的文件时，
//使用art-template模板引擎
//app.engine('html',require('express-art-template'))
 
app.get('/',function(req,res){
    res.send('/aa')
})

app.get('/post',function(req,res){
    res.send('/aa')
})

app.listen(3000,function(){
    console.log('running...')
}) 