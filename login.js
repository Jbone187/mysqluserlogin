module.exports = function(req, res){

    let mysql = require('mysql');
    let bcrypt = require('bcrypt');

let con = mysql.createConnection({
  host: "192.151.151.76",
  user: "jasengreen_login_user",
  password: "Mary2424!!",
  database: "jasengreen_login"
});

// Login
let email = req.body.email;

let password = req.body.password;

 con.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      });
    };
     
      if(results.length >0){

        bcrypt.compare(password, results[0].password, function(err, answer) {

          if(answer){

            console.log(res);
            
             res.redirect("/login.html");

            }else{
              res.send({
                "code":204,
                "success":"Email and password does not match"
                  });
            };

            });
        };

    });

  };