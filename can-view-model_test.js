var QUnit = require('steal-qunit');
var viewModel = require('can-view-model');
var SimpleMap = require('can-simple-map');
var CanMap = require('can-map');
var DefineMap = require("can-define/map/map");
var types = require('can-types');

QUnit.module('can-view-model');

QUnit.test('basics', function(){
	var DefaultMap = types.DefaultMap;
	types.DefaultMap = undefined;
	var el = document.createElement('div');
	viewModel(el, 'foo', 'bar');
	QUnit.equal(viewModel(el,'foo'), 'bar');
	QUnit.ok(viewModel(el) instanceof SimpleMap, 'is can-map');
	types.DefaultMap = DefaultMap;
});

QUnit.test('a selector can be passed as the first argument (#6)', function(){
	var DefaultMap = types.DefaultMap;
	types.DefaultMap = undefined;
	var el = document.createElement('div');
	el.className = 'the-el';
	document.getElementById('qunit-fixture').appendChild(el);
	viewModel('.the-el', 'foo', 'bar');
	QUnit.equal(viewModel('.the-el', 'foo'), 'bar');
	QUnit.ok(viewModel(el) instanceof SimpleMap, 'is can-map');
	types.DefaultMap = DefaultMap;
});

QUnit.test('set custom can-simple-map on element (#5)', function(){
	var vm, elVm;
	var CustomMap = SimpleMap.extend({});
	var el = document.createElement('div');
	document.getElementById('qunit-fixture').appendChild(el);
	vm = new CustomMap({ foo: 'bar' });
	elVm = viewModel(el, vm);
	QUnit.equal(viewModel(el,'foo'), 'bar');
});

QUnit.test('set custom can-map on element (#5)', function(){
	var vm, elVm;
	var CustomMap = CanMap.extend({});
	var el = document.createElement('div');
	document.getElementById('qunit-fixture').appendChild(el);
	vm = new CustomMap({ foo: 'bar' });
	elVm = viewModel(el, vm);
	QUnit.equal(viewModel(el,'foo'), 'bar');
});

QUnit.test('set custom can-define-map on element (#5)', function(){
	var vm, elVm;
	var CustomMap = DefineMap.extend({});
	var el = document.createElement('div');
	document.getElementById('qunit-fixture').appendChild(el);
	vm = new CustomMap({ foo: 'bar' });
	elVm = viewModel(el, vm);
	QUnit.equal(viewModel(el,'foo'), 'bar');
});

QUnit.test('Allow passing array like (jQuery) element', function(){
	var DefaultMap = types.DefaultMap;
	var $el = {};
	types.DefaultMap = undefined;
	var el = document.createElement('div');
	el.className = 'the-el';
	$el[0] = el;
	$el.length = 1;
	document.getElementById('qunit-fixture').appendChild(el);
	viewModel($el, 'foo', 'bar');
	QUnit.equal(viewModel('.the-el', 'foo'), 'bar', 'It reads view scope from html element');
	QUnit.equal(viewModel($el, 'foo'), 'bar', 'It reads view scope from array like (jQuery) element');
	QUnit.ok(viewModel(el) instanceof SimpleMap, 'is can-map');
	types.DefaultMap = DefaultMap;
});

QUnit.test('elements with length property not treated as arraylikes (#31)', function() {
	var el = document.createElement('select');
	document.getElementById('qunit-fixture').appendChild(el);
	QUnit.equal(el.length, 0, "Select has length property (0 for empty)");
	QUnit.deepEqual(viewModel(el).get(), {}, "viewModel created on empty select");
	var opt = document.createElement('option');
	el.appendChild(opt);
	QUnit.equal(el.length, 1, "Select has length 1");
	QUnit.deepEqual(viewModel(el).get(), {}, "viewModel created on non-empty select");
});
