var fs = require('fs')

fs.readFile('./views/01_1.html',function(err,data){
    if (err) {
        console.log('404 nofond')
    } else {
       console.log(data)
    }
})