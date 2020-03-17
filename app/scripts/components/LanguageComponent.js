"use strict";

var LanguageComponent = {
  template:`
            <div>
              <div>
                <textarea rows="20" cols="40" ng-model="$ctrl.languageText">
                </textarea><br>
              </div>
            </div>
            `,
  bindings:{
          languageText:'='
  }
};

module.exports = LanguageComponent;
