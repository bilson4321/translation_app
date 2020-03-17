"use strict";

var angular = require("angular");
var app = angular.module("myApp", []);

var WelcomeCtrl = require("./controllers/WelcomeCtrl");
var AppController = require("./controllers/AppController");
var TranslatorController=require("./controllers/TranslatorController");
var CollapsibleController=require("./controllers/CollapsibleController");

var TreeDirective=require("./directives/TreeDirective");
var BranchDirective=require("./directives/BranchDirective");

var AppComponent=require("./components/AppComponent");
var HeaderComponent=require("./components/HeaderComponent");
var TranslatorComponent=require("./components/TranslatorComponent");
var LanguageComponent=require("./components/LanguageComponent");
var CollapsibleComponent=require("./components/CollapsibleComponent");

var LanguageService=require("./services/LanguageTreeService");
var FileService=require("./services/FileService");

app.service("languageService",LanguageService)
    .service("fileService",FileService);

app.controller("WelcomeCtrl",["$scope",WelcomeCtrl])
    .controller("AppController",["$scope",AppController])
    .controller("TranslatorController",["$scope","languageService","fileService",TranslatorController])
    .controller("CollapsibleController",["$scope",CollapsibleController]);

app.directive('tree',TreeDirective)
    .directive('branch',["$compile",BranchDirective]);

app.component("app",AppComponent)
    .component("header",HeaderComponent)
    .component("translator",TranslatorComponent)
    .component("language",LanguageComponent)
    .component("collapsible",CollapsibleComponent);