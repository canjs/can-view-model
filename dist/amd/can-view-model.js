/*can-view-model@3.0.0-pre.1#can-view-model*/
define(function (require, exports, module) {
    'use strict';
    var domData = require('can-util/dom/data');
    var SimpleMap = require('can-simple-map');
    module.exports = function (el, attr, val) {
        var scope = domData.get.call(el, 'viewModel');
        if (!scope) {
            scope = new SimpleMap();
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