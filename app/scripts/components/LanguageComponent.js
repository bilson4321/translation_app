"use strict";

var LanguageComponent = {
  template:`
            <div>
              <div>
                <textarea rows="20" cols="40" ng-model="$ctrl.languageText">
                </textarea><br>
                <label>Select a JSON File:</label>
                <input type="file">
              </div>
            </div>
            `,
  bindings:{
          languageText:'='
  }
};

module.exports = LanguageComponent;
