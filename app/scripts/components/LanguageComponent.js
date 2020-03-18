"use strict";

var LanguageComponent = {
  template:`
            <div>
              <div>
                <textarea rows="10" cols="20" ng-model="$ctrl.languageText">
                </textarea><br>
              </div>
            </div>
            `,
  bindings:{
          languageText:'='
  }
};

module.exports = LanguageComponent;
