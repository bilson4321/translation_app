"use strict";

var CollapsibleComponent = {
  template:`
          <button ng-click="showData()">Show</button>
          <ul>
            <li ng-repeat="x in model.jsonObject">
              <button ng-click="model.selectNode(x)">{{x}}</button><br>
            </li>
          </ul>
            `,
  bindings:{
              jsonObject : '=',
              selectNode : '='
            },
  controllerAs:'model',
  controller:'CollapsibleController'
};

module.exports = CollapsibleComponent;
