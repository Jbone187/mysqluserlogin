module.exports = function(req,res) {

let mysql = require('mysql');
let bcrypt = require('bcrypt');


let con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "jasengreen_login"
});


con.connect(function(err){
  if(!err) {
      console.log("Database is connected");
  } else {
      console.log("Error while connecting with database");
  }
  });


    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
 
  let query = 'INSERT INTO users SET ?';

  let today = new Date();


  let users = {
      "email":req.body.email,
      "password":hash,
      "created":today,
      "modified":today
  }
  
  
  con.query(query, users, function (error, results, fields) {
      if (error) {
        console.log("error ocurred",error);
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      }else{
        console.log('The solution is: ', results);
       
             res.redirect("/");
      };

      });
    });

  });
    

};

