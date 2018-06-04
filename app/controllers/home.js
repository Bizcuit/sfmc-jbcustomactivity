var express 		= require('express');
var utils			= requireRoot('modules/utils');
var config			= requireRoot('config');

var router 			= express.Router();

router.get('/:action(\\w+)/', function(req, res){
	console.log(req.params.action);

	res.render('home/index.pug', {action: req.params.action});
});

module.exports = router;