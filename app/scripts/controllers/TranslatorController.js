"use strict";

var TranslatorController = function($scope,languageService) {
  $scope.newNode="";
  $scope.selectedNode=null;
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
  $scope.jsonObject=[];

  $scope.addElement=function(){
    if($scope.selectedNode===null)
    {
      languageService.add($scope.newNode);
    }
    else{
      languageService.add($scope.newNode,$scope.selectedNode.name);
    }
    $scope.newNode='';
    $scope.arrayTree();
  }
  $scope.selectNode=function(name){
   $scope.selectedNode=languageService.search(name);
   console.log("selectedNode",$scope.selectedNode);
  }
  $scope.printTree=function(){
    languageService.printTree();
  }
  $scope.arrayTree=function(){
    $scope.jsonObject=languageService.treeFirstLevel();
  }
  $scope.resetSelect=function(){
    $scope.selectedNode=null;
  }
};

module.exports = TranslatorController;
