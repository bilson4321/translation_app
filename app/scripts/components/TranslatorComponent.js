"use strict";

var TranslatorComponent = {
  template:`
            <div style="padding:15px 60px">
              <div>
                <collapsible json-object="jsonObject"></collapsible>
                <div>
                  <label>Add Category:</label>
                  <input type="text" ng-model="newCategory">
                  <input type="button" ng-click="addElement()" value="Add">
                </div>
              </div>
              <div class="language">
                English
                <language></language>
              </div>
              <div class="language">
                Japanese
                <language></language>
              </div>
              <div>

                <button ng-click="addElement()">Add Element</button>
                <button ng-click="printTree()">Print Tree</button>

                <button ng-click="findElement('2')">FInd</button>
              </div>
            </div>
            `,
  controller:'TranslatorController'
};

module.exports = TranslatorComponent;
