//核心模块：http--创建编写服务器
//加载http核心模块
//http.createserver
var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request',function(request,response){
	console.log('收到客户端请求,请求路径是：'+request.url)
	if(request.url==='/index'){
		//response.write()
		fs.readFile('./views/index.html',function(err,data){
			if(err){
				response.end('请求失败')
			}else{
				response.end(data.toString())
			}
		})
	}
	else if(request.url==='/login'){
		//response.write()
		response.end('登录')
	}
	else if(request.url==='/'){
		//response.write()
		fs.readFile('./views/index.html',function(err,data){
			if(err){
				response.end('请求失败')
			}else{
				response.end(data.toString())
			}
		})
	}
	else if(request.url.indexOf('/public/') === 0){
	//response.write()
	//response.write('  nodejs')
	//response.end('hello')
		fs.readFile('.' + request.url,function(err,data){
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