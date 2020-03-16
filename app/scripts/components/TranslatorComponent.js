"use strict";

var TranslatorComponent = {
  template:`
            <div style="padding:15px 60px">
              <div>
                <collapsible json-object="jsonObject" select-node="selectNode"></collapsible>
                <div>
                  <label>Add Category:</label>
                  <input type="text" ng-model="newNode">
                  <input type="button" ng-click="addElement()" value="Add">
                </div>
                <div>
                  <label>Selected Item:</label>
                  <input type="text" ng-model="selectedNode.name" ng-blur="arrayTree()">
                </div>
              </div>
              <div class="language">
                English
                <language language-text="selectedNode.data.english"></language>
              </div>
              <div class="language">
                Japanese
                <language language-text="selectedNode.data.japanese"></language>
              </div>
              <div>

                <button ng-click="addElement()">Add Element</button>
                <button ng-click="printTree()">Print Tree</button>
                <button ng-click="arrayTree()">Array Tree</button>
                <button ng-click="findElement('2')">FInd</button>
                <button ng-click="resetSelect()">reset</button>
              </div>
            </div>
            `,
  controller:'TranslatorController'
};

module.exports = TranslatorComponent;
