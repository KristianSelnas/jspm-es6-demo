import * as angular from "angular";
//noinspection TypeScriptCheckImport
import uiRouter from "angular-ui-router";

import {routes} from "./whiteboard-config";
import whiteboard from "./whiteboard";
import notesModule from "../notes/notes-module";

export default name = "app.whiteboard";
const module = angular.module(name, [
    uiRouter,
    notesModule
]);

module
    .config(routes)
    .directive("wbWhiteboard", whiteboard);