var fs = require('fs')

fs.writeFile('./text/2.md','我是node.js',function(error){
	if(error){
		console.log("文件写入失败")
	}else{
		console.log('文件写入成功')
	}
	//console.log(error)
})