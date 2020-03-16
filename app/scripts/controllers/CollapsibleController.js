"use strict";

var CollapsibleController = function($scope) {
    var ctrl=this;
    
    ctrl.$onInit=function(){
        ctrl.object=[];
        var i=0;
        for (var prop in ctrl.jsonObject) {
            ctrl.object[i]=prop;
            i++;
        }
    };
};

module.exports = CollapsibleController;
