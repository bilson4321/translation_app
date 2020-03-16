"use strict";

var CollapsibleComponent = {
  template:`
          <ul>
            <li ng-repeat="x in $ctrl.object">
              <button>{{x}}</button><br>
            </li>
          </ul>
            `,
  bindings:{
              jsonObject : '='
            },
  controller:'CollapsibleController'
};

module.exports = CollapsibleComponent;
