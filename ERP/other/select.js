const sql = require("msnodesqlv8");
const connectionString  = require('./connect')
// var a = function(data_table,callback){
        // var z = '4',
        var a = 'user4'
        var b = '123321'
        var c = 'user1'
        var d = '123123123123'
        var e = '男'
        var f = '19'
        var g = '2020-5-1'
        var h = '1997-12-1'
        const query1 = "insert into TB_USER (USER_Name,USER_Password,USER_Adders,USER_Phone,USER_Sex,USER_Age,USER_Datetime,USER_Birth) values('"+a+"','"+b+"','"+c+"','"+d+"','"+e+"','"+f+"','"+g+"','"+h+"')"

//     const query1 = "insert into yhb (username,password,keys) values('ganggang','1231','3')"
// insert into TB_USER (USER_Name,USER_Password,USER_Adders,USER_Phone,USER_Sex,USER_Age,USER_Datetime,USER_Birth)  

    sql.query(connectionString, query1, (err, result1) => {
        // callback(result1);
        console.log(result1)
});
        // console.log(data_table)
// }
// module.exports = a
// const query1 = "SELECT * FROM Table_1";
// var a = ''
// sql.query(connectionString, query1, (err, result) => {
//     // console.log(result);
//     a = result
//     exports.a = result
// });

