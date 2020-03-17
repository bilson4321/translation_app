"use strict";

var BranchDirective = function($compile){
    return{
        restrict: 'E', // tells Angular to apply this to only html tag that is <branch>
        replace: true, // tells Angular to replace <branch> by the whole template
        scope: {
          b: '=src',
          selectNode:'='
        },    
        template: '<li><a>{{ b.name }}</a></li>',
        link: function(scope, element, attrs) {
          //// Check if there are any children, otherwise we'll have infinite execution
          
          var has_children = angular.isArray(scope.b.children);
          
          //// Manipulate HTML in DOM
          if (has_children) {        
            element.append('<tree src="b" select-node="selectNode"></tree>');
            
            // recompile Angular because of manual appending
            $compile(element.contents())(scope); 
          }
          
          //// Bind events
          element.on('click', function(event) {
              event.stopPropagation();   
              console.log("name",scope.b.name)       
              scope.selectNode(scope.b.name);
              if (has_children) {
                element.toggleClass('collapsed');
              }
          });      
        }
    };
};


module.exports = BranchDirective;
