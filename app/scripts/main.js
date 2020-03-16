"use strict";

var angular = require("angular");
var app = angular.module("myApp", []);

var WelcomeCtrl = require("./controllers/WelcomeCtrl");
var AppController = require("./controllers/AppController");
var TranslatorController=require("./controllers/TranslatorController");
var CollapsibleController=require("./controllers/CollapsibleController");

var AppComponent=require("./components/AppComponent");
var HeaderComponent=require("./components/HeaderComponent");
var TranslatorComponent=require("./components/TranslatorComponent");
var LanguageComponent=require("./components/LanguageComponent");
var CollapsibleComponent=require("./components/CollapsibleComponent");

var LanguageService=require("./services/LanguageTreeService");

app.service("languageService",LanguageService);

app.controller("WelcomeCtrl",["$scope",WelcomeCtrl])
    .controller("AppController",["$scope",AppController])
    .controller("TranslatorController",["$scope","languageService",TranslatorController])
    .controller("CollapsibleController",["$scope",CollapsibleController]);

app.component("app",AppComponent)
    .component("header",HeaderComponent)
    .component("translator",TranslatorComponent)
    .component("language",LanguageComponent)
    .component("collapsible",CollapsibleComponent);