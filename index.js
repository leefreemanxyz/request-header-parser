var express = require('express');
var app = express();
//var router = express.Router();


app.get('/api/whoami', function (req, res) {
    console.log('Hello');
       //ip address
    var ipaddress = req.header('x-forwarded-for') ;
    console.log(req.header('user-agent'));
   //language
   var language = req.header('accept-language').split(',')[0];
   //operatingsystem
   var software = req.header('user-agent').split(') ')[0].split(' (')[1];
   var headerObj = {"ipaddress": ipaddress, "language": language, "software": software};
    res.json(headerObj)

});
app.listen(process.env.PORT);

