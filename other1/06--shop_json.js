//核心模块：http--创建编写服务器
//加载http核心模块
//http.createserver
var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
	if(req.url==='/'){
		var pro = [
		{
			name:'123',
			pri:999
		},
		{
			name:'223',
			pri:999
		},
		{
			name:'323',
			pri:999
		}
		]
		res.end(JSON.stringify(pro))
	}
})

//绑定端口号,启动服务器
server.listen(3000,function(){
	console.log("服务器启动成功，可以通过http://127.0.0.1:3000/login来访问")
})