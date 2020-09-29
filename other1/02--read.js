// node中的js可以具有文件操作的能力
//加载fs核心模块，fs.readFile
var fs = require('fs')
fs.readFile('./views/index.html',function(error,data){
	if(error){
		console.log('读取文件失败')
	}else{
		console.log(data.toString())
	}
})