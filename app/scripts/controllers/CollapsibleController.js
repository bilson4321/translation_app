"use strict";

var CollapsibleController = function($scope) {
    // var ctrl=this;
    
    // ctrl.$onInit=function(){
    //     ctrl.object=[];
    //     var i=0;
    //     for (var prop in ctrl.jsonObject) {
    //         ctrl.object[i]=prop;
    //         i++;
    //     }
    // };
    
    $scope.showData=function(){
        $scope.data=$scope.model.jsonObject;
        console.log($scope.model.jsonObject);
    }
    $scope.selectNode=function(data){
        console.log("data",data)
    }
};

module.exports = CollapsibleController;
