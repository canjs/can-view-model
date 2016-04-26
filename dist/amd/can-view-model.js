/*can-view-model@3.0.0-pre.0#can-view-model*/
define(function (require, exports, module) {
    var domData = require('can-util/dom/data');
    var CanMap = require('can-map');
    module.exports = function (el, attr, val) {
        var scope = domData.get.call(el, 'viewModel');
        if (!scope) {
            scope = new CanMap();
            domData.set.call(el, 'viewModel', scope);
        }
        switch (arguments.length) {
        case 0:
        case 1:
            return scope;
        case 2:
            return scope.attr(attr);
        default:
            scope.attr(attr, val);
            return el;
        }
    };
});