var mysql = require("mysql");
var express = require("express");
const { append } = require("vary");
const { connect } = require("http2");
console.log('1');
var app = express();

var connection = mysql.createConnection({
    //properties :

    host : 'localhost',
    user : 'root',
    port : '3306',
    password :  '',
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
});

// connection.connect(function(error){
//      if(error){
//          console.log('Error Connecting DataBase!');
//      }
//      else{
//          console.log('Database is connected!');
//      }
// });

console.log('1');

app.get('/createDB', function(req, resp){
     // About MySQL
     console.log('2');
     connection.query("CREATE DATABASE GameTime", function(error){
         if(error){
             console.log("Error in Query.");
         }
         else{
             console.log("Database is created successfully.");
         }
     });
})

/*
connection.connect(function(err) {
    if (err) console.log(2);
    console.log("Connected!");
    con.query("CREATE DATABASE GameTime", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
*/


console.log('1');
app.listen('4500', ()=>{
    
    console.log('Server Started on port 4500');
})
console.log('1');
