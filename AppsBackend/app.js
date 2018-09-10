// Module dependencies
'use strict';
var express  = require('express'),
mysql        = require('mysql'),
bodyParser   = require('body-parser');

// require the bcrypt module
const bcrypt = require('bcrypt');

// Local and server mysql hosts.
 var mysqlHost = '127.0.0.1'; // Local

// Database setup
var con = mysql.createConnection({
  host : mysqlHost,
  user: "root",
  password: "test@123",
  multipleStatements: true,
  connectionLimit: 15,
  queueLimit: 50,
  acquireTimeout: 1000000
});

// Application initialization and Configuration
var app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


// Main route sends our HTML file
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

// Authenticate the user.
app.post('/authenticate', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var sqlQuery = "SELECT * FROM affine_app.aa_user WHERE username = '" + username + "'";

  console.log(sqlQuery);
  con.query(sqlQuery, function (error, results, fields) {
    if ( error ) {
    console.log(error);
      res.json({
        status:false,
        message:'there is some error with query'
      });
    } else {
      if ( results.length > 0 ) {
        bcrypt.compare(password, results[0].password, function(err, ress) {
          // console.log(ress);
          console.log(ress);
          if ( ress ) {
            con.query('SELECT Employee_Name FROM affine_app.employee_details WHERE Employee_Id = ?', [results[0].username], function (error1, results1, fields1) {
              if ( error1 ) {
                res.json({
                  status: true,
                  message: 'User Employee Not found!',
                  role: results[0].role,
                  empid: results[0].username,
                  empname: results[0].username
                });
              } else {
                if ( results1.length > 0 ) {
                  res.json({
                    status: true,
                    message: 'User authentication is successful!',
                    role: results[0].role,
                    empid: results[0].username,
                    empname: results1[0].Employee_Name
                  });
                } else {
                  res.json({
                    status: true,
                    message: 'User not found!',
                    role: results[0].role,
                    empid: results[0].username,
                    empname: results[0].username
                  });
                }
              }
            });
          } else {
            res.json({
              status:false,
              message:"Username and password does not match."
            });
          }

        });

      } else {
        res.json({
          status:false,
          message:"Username does not exists."
        });
      }
    }
  });
});

// Change user password.
// app.post('/api/changePassword', function (req, res) {
//     var un = req.body.username,
//         cp = req.body.Current_Password,
//         np = req.body.New_Password;
//
//         knex1.select('id', 'username', 'password')
//         .from('aa_user')
//         .where('username', un)
//         .timeout(10000, {cancel: true})
//         .map(function (row) { return row; })
//         .then(function(userDetails = []){
//             // console.log( userDetails[0].password );
//
//             if ( userDetails.length ) {
//                 bcrypt.compare(cp, userDetails[0].password, function(err, ress) {
//
//                     // console.log( ress );
//
//                     if ( ress ) {
//                         var salt = bcrypt.genSaltSync(10);
//                         var hash = bcrypt.hashSync(np, salt);
//
//                         knex1('aa_user')
//                         .where('id', userDetails[0].id)
//                         .update({
//                             password: hash,
//                             updated_at: new Date()
//                         })
//                         .then(function(response){
//                             // console.log(response);
//                             res.setHeader('Content-Type', 'application/json');
//                             res.status(200).send({
//                                 result: 'success',
//                                 message:'Your password has been changed. Please log in again.'
//                             });
//                         });
//
//                   } else {
//                     res.setHeader('Content-Type', 'application/json');
//                     res.status(200).send({
//                         result: 'failure',
//                         message:'Current password is not valid to change your password.'
//                     });
//                   }
//
//                 });
//             } else {
//                 res.setHeader('Content-Type', 'application/json');
//                 res.status(200).send({
//                     result: 'failure',
//                     message:'Sorry, could not change your password. Please contact the administrator.'
//                 });
//             }
//         })
//         .catch(function (err) {
//             console.log('Error: %s', err.toString());
//             res.setHeader('Content-Type', 'application/json');
//             res.status(200).send({
//                 result: 'failure',
//                 message:'Some error occured. Please contact the administrator.'
//             });
//         });
// });


// Begin listening
app.listen(3100, function() {
    console.log("Express server listening on port 3100");
});
