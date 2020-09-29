const mongoose = require('mongoose');
var http = require('http')
var msgg = require('./app')
console.log(msgg.msg)
// var Schema = mongoose.Schema;
// var testSchema = new Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     body:{
//         type:String,
//     }
// })
// var testmo = mongoose.model('Test',testSchema);
// var p1 = new Promise(function(resolve,reject){
//     mongoose.connect('mongodb://localhost:27017/test12', {useNewUrlParser: true, useUnifiedTopology: true});
//     testmo.find(function(err,ret){
//     if (err) {
//         reject(err)
//     } else {
//         resolve(ret)
//     }
// })
// })

// p1.then(function(data){
//     console.log(data)
// })
// var server = http.createServer(function(req,res){
//     p1.then(function(data){
//         res.end(JSON.stringify(data))
//     })
    
// })
// server
//     .on('request',function(){
//         console.log('收到客户端请求')
           
//     })
//     .listen(3000,function(){
//         console.log('running...')
//     })



// testmo.findByIdAndRemove('5e54bcb3459bb54b11a04fd6',function(err,ret){
//     if (err) {
//         console.log('删除失败')
//     } else {
//         console.log('删除成功')
//     }
// })

// var newmsg = new testmo({
//     title:'待删除',
//     body:'待删除的身体'
// })

// newmsg.save().then(() => console.log('保存成功'))
// newmsg.save(function(err,ret){
//     if (err) {
//         console.log('保存失败')
//     } else {
//         console.log('保存成功')
//         console.log(ret)
//     }
// })
// const Cat = mongoose.model('Cat', { name: String });
// var sma = new testmo({
//     title:'测试用',
//     body:'这是身体部分'
// })
// const kitty = new Cat({ name: 'Zildjian' });
// sma.save().then(() => console.log('secc'));



//根据id更新
// var id = '5e547db630f09108ecda8764'
// testmo.findByIdAndUpdate(id,{
//     title:'测试用1',
//     body:'修改后的身体部分'
// },function(err,data){
// if(err){
//     console.log('更新失败')
// }
// console.log('更新成功')
// })