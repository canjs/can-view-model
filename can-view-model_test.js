var QUnit = require('steal-qunit');
var viewModel = require('./can-view-model');

require('can-map');

QUnit.module('can-view-model');

QUnit.test('basics', function(){
	var el = document.createElement('div');
	viewModel(el, "foo","bar");
	QUnit.equal( viewModel(el,"foo"), "bar");
});
