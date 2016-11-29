/*can-view-model@3.1.1#can-view-model*/
define(function (require, exports, module) {
    'use strict';
    var domData = require('can-util/dom/data');
    var SimpleMap = require('can-simple-map');
    var types = require('can-util/js/types');
    var ns = require('can-util/namespace');
    var getDocument = require('can-util/dom/document');
    module.exports = ns.viewModel = function (el, attr, val) {
        el = typeof el === 'string' ? getDocument().querySelector(el) : el;
        var scope = domData.get.call(el, 'viewModel');
        if (!scope) {
            scope = types.DefaultMap ? new types.DefaultMap() : new SimpleMap();
            domData.set.call(el, 'viewModel', scope);
        }
        switch (arguments.length) {
        case 0:
        case 1:
            return scope;
        case 2:
            return 'attr' in scope ? scope.attr(attr) : scope[attr];
        default:
            if ('attr' in scope) {
                scope.attr(attr, val);
            } else {
                scope[attr] = val;
            }
            return el;
        }
    };
});