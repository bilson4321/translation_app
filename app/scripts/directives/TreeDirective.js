"use strict";

var TreeDirective = function()
{
    return{
        restrict: 'E', // tells Angular to apply this to only html tag that is <tree>
        replace: true, // tells Angular to replace <tree> by the whole template
        scope: {
          t: '=src',
          selectNode: '='
        },    
        template: '<ul><branch ng-repeat="c in t.children" src="c" select-node="selectNode"></branch></ul>'    
    };
};


module.exports = TreeDirective;
