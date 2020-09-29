//核心模块：http--创建编写服务器
//加载http核心模块
//http.createserver
var http = require('http')

var server = http.createServer()

server.on('request',function(){
	console.log('收到客户端请求')
})

//绑定端口号,启动服务器
server.listen(3000,function(){
	console.log("服务器启动成功，可以通过http://127.0.0.1:3000/ 来访问")
})