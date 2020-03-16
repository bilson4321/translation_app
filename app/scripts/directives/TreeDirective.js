"use strict";

var TreeDirective = {
    link: function($scope, iElm, iAttrs, controller) {

        /* These function will be called from the ControllerExp when it needs so.
         Function can do any things like manipulating the DOM, addin
         event listner ...
        */
        scope.manipulateDom1 = function(){
            // DOM manipualtion
        };

        scope.manipulateDom2 = function(){
            // DOM manipualtion
        };

        scope.manipulateDom3 = function(){
            // DOM manipualtion
        };
};

module.exports = TreeDirective;
