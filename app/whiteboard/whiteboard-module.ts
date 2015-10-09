import * as angular from "angular";
//noinspection TypeScriptCheckImport
import uiRouter from "angular-ui-router";

import {routes} from "./whiteboard-config";
import whiteboard from "./whiteboard";
import note from "./note";
import noteEdit from "./note-edit";
import notesService from "./notes-service";

export default name = "app.whiteboard";
const module = angular.module(name, [
    uiRouter
]);

module
    .config(routes)
    .directive("wbWhiteboard", whiteboard)
    .directive("wbNote", note)
    .directive("wbNoteEdit", noteEdit)
    .service("notesService", notesService);