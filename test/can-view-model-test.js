var QUnit = require('steal-qunit');
var viewModel = require('can-view-model');
var CanMap = require('can-map');
var DefineMap = require('can-define/map/map');
var SimpleMap = require('can-simple-map');
var types = require("can-util/js/types/types");


QUnit.module('can-view-model',{
	setup: function(){}
});

QUnit.test('basics', function(){

	var el = document.createElement('div');
	viewModel(el, "foo","bar");
	QUnit.equal( viewModel(el,"foo"), "bar");
	QUnit.ok(viewModel(el) instanceof SimpleMap, "is can-map");
});
