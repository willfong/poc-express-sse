var express = require('express');
var bodyParser = require('body-parser');

var app = express(); 
app.use(express.static('./static'));

app.use(bodyParser.json()); // ???

// See every request that comes in
app.use(function(req, res, next){
    console.log(req.url);
    next();
});

// Standard routes
app.get('/echo', (req, res) => res.send('Hello World!'));

app.use( function(req, res){ 
    res.status(404); 
    res.send('404 - File Not Found. Who made the typo? You.'); 
    console.log("404: "+req.url);
});
  
app.use( function(err, req, res, next){
    console.error( err.stack); 
    res.status(500); 
    res.send('500 - Server Error. My bad, sorry about that.'); 
    console.log("500: "+req.url);
}); 

app.set('port', process.env.PORT || 5000); 
app.set('ip', process.env.IP || '127.0.0.1'); 

app.listen( app.get('port'), app.get('ip'), function(){ 
    console.log( 'Express started on http://' + app.get('ip') + ':' + app.get('port') + '; press Ctrl-C to terminate.' ); 
});
