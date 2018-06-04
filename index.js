global.rootPath = __dirname;

global.requireRoot = function(name) {
	return require(global.rootPath + '/app/' + name);
}

requireRoot('app.js');