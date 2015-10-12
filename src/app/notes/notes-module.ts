import * as angular from "angular";
//noinspection TypeScriptCheckImport
import uiRouter from "angular-ui-router";

import {routes} from "./notes-config";
import note from "./note";
import noteEdit from "./note-edit";
import notesService from "./notes-service";

export default name = "app.notes";
const module = angular.module(name, [
    uiRouter
]);

module
    .config(routes)
    .directive("wbNote", note)
    .directive("wbNoteEdit", noteEdit)
    .service("notesService", notesService);