"use strict";

var TranslatorController = function($scope,languageService) {
  $scope.newCategory="";
  $scope.selectedCategory="last";
  $scope.englishObject={
                      "application_name": "Purchasing Manager",
                      "language": {
                        "dir": "ltr",
                        "name": "English",
                        "abbrev": "EN"
                        },
                      "common": {
                        "attachment": {
                                "attachments": "@:common.labels.attachments",
                                "filename": "@:common.labels.filename",
                                "size": "@:common.labels.size",
                                "delete-attachment": "@:common.confirmations.delete_attachment"
                                      },
                        "button": {
                                "award": "@:common.labels.award",
                                "activate": "Activate",
                                "apply": "Apply"
                                  }
                        }
                    }
  $scope.japanObject={
                      "application_name": "Vroozi",
                      "language": {
                            "dir": "ltr",
                            "name": "英語",
                            "abbrev": "JA"
                          },
                      "common": {
                          "attachment": {
                                "attachments": "添付ファイル",
                                "filename": "ファイル名",
                                "size": "サイズ",
                                "delete-attachment": "添付ファイルを削除する"
                              },
                          "button": {
                                "award": "@:common.labels.award",
                                "activate": "アクティブにする",
                                "apply": "適用する"
                              }
                          }
                      }
  $scope.jsonObject=[
            "application_name",
            "language",
            "common"
  ]
  $scope.addElement=function(){
    console.log(languageService.add($scope.newCategory));
  }
  $scope.findElement=function(){
    console.log("find");
    console.log(languageService.search($scope.selectedCategory));
  }
  $scope.printTree=function(){
    languageService.printTree();
  }
};

module.exports = TranslatorController;
