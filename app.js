var express = require('express');
// here whenever you do npm instal it goies 
//to package json
//it also helps using template
//which is done using ejs, by using the command "npm install ejs --save"
var app = express();
// The sequential order is really important
//Here first is home then rest pages
//ejs will be saved as a dependency
// it  will be node module folder

//now as we have downloaded we can use it 
//through functoin of express

app.set('view engine', 'ejs');
//now the view engine to ejs which we have 
//downloaded which is set by function of 
//express called set



//Here express looks directly into the
//views folder 
app.get('/', function(req,res){
res.render('home');
});

app.get('/sheikh', function(req,res){
    res.send("THis is a sheikh");
    });


    app.get('/sheikh/:epi?', function(req,res){
        var epinm = req.params.epi;
        res.send("THis is a sheikh" + epinm);
        });
 
//For not found page

app.get('*',function(req,res)
{
res.send("This is not the page you are looking for");
});

    app.listen(3000,
    function() {
    console.log("application is rnning");
});

