"use strict";

var TranslatorComponent = {
  template:`
            <div class="wrapper">
              <div class="container-left">
                <div class="tree-view">
                  <tree src="myList" select-node="selectNode"></tree>
                </div>
                <div class="input-group">
                  <label>Add Items:</label>
                  <input type="text" ng-model="newNode">
                  <input type="button" ng-click="addElement()" value="Add">
                </div>
              </div>
              <div class="container-right">
                <div class="input-group">
                  <label>Selected Item:</label><br/>
                  <input type="text" ng-model="selectedNode.name">
                </div>
                <div class="language">
                  English
                  <language language-text="selectedNode.data.english"></language>
                </div>
                <div class="language">
                  Japanese
                  <language language-text="selectedNode.data.japanese" ></language>
                </div>
                <div class="input-group">
                  <button class="download" ng-click="downloadJson('english')"><i class="fa fa-download" aria-hidden="true"></i> Download english json</button>
                  <button class="download" ng-click="downloadJson('japanese')"><i class="fa fa-download" aria-hidden="true"></i> Download japanense json</button>
                </div>
              </div> 
            </div>
            `,
  controller:'TranslatorController'
};

module.exports = TranslatorComponent;
