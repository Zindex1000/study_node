//核心模块：http--创建编写服务器
//加载http核心模块
//http.createserver
var http = require('http')
var fs = require('fs')
var url = require('url')
var a  = require('./other/select')
// var jquery = require('jquery')
var server = http.createServer()

server.on('request',function(request,response){
	var pobj = url.parse(request.url,true)
    var url1 = pobj.pathname
	console.log('收到客户端请求,请求路径是：'+url1)
	if(url1==='/'){
		fs.readFile('./views/index.html',function(err,data){
			if(err){
				response.end('请求失败')
			}else{
				response.end(data.toString())
			}
		})
	}
	else if(url1==='/login'){
		//response.write()
		//请求数据库数据
		 var result0 = a('Table_1',function(result1){
			 console.log(result1)
			for(var i = 0;i<result1.length;i++){
				//去除空格
				if(result1[i].un.trim()==pobj.query.un&&result1[i].up.trim()==pobj.query.up){
					fs.readFile('./views/main.html',function(err,data){
						if(err){
							response.end('请求失败')
						}else{
							response.end(data.toString())
						}
					})
				}else{
					response.end('login error');
				}
			}
		 })
		 response.end(1)
	}
	//开放公共资源
	else if(url1.indexOf('/public/') === 0){
		fs.readFile('.' + url1,function(err,data){
			if(err){
				return response.end('404')
			}
			response.end(data)
		})
	}
})

//绑定端口号,启动服务器
server.listen(3000,function(){
	console.log("服务器启动成功，可以通过http://127.0.0.1:3000/login来访问")
})