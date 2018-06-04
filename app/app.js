var config		= requireRoot('config');
var express 	= require('express');
var app 		= express();

app.set('view engine', 'pug');
app.set('views', rootPath + '/app/views');


/* Declare controllers */
app.use('/', requireRoot('controllers/home'));



app.listen(config.serverPort, function() {
	console.log('Application started: ' + (new Date()));
})