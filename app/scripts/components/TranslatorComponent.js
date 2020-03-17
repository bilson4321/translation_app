"use strict";

var TranslatorComponent = {
  template:`
            <div style="padding:15px 60px">
              <div>
                <div>
                  <tree src="myList" select-node="selectNode"></tree>
                </div>
                <collapsible json-object="jsonObject" select-node="selectNode"></collapsible>
                <div>
                  <label>Add Category:</label>
                  <input type="text" ng-model="newNode">
                  <input type="button" ng-click="addElement()" value="Add">
                </div>
                <div>
                  <label>Selected Item:</label>
                  <input type="text" ng-model="selectedNode.name">
                </div>
              </div>
              <div class="language">
                English
                <language language-text="selectedNode.data.english"></language>
                <label>Download a English JSON File:</label>
                <button ng-click="downloadJson('english')">Download</button>
              </div>
              <div class="language">
                Japanese
                <language language-text="selectedNode.data.japanese" ></language>
                <label>Download a Japanense JSON File:</label>
                <button ng-click="downloadJson('japanese')">Download</button>
              </div>
              <div>

              <button ng-click="resetSelect()">reset</button>
              </div>
            </div>
            `,
  controller:'TranslatorController'
};

module.exports = TranslatorComponent;
