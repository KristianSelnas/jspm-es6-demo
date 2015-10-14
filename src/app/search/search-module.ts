import * as angular from "angular";
//noinspection TypeScriptCheckImport
import uiRouter from "angular-ui-router";

import globalSearch from "./search";
import searchService from "./search-service";
import {routes} from "./search-config";

export default name = "app.search";
const module = angular.module(name, [
    uiRouter
]);

module
    .config(routes)
    .directive("wbSearch", globalSearch)
    .service("searchService", searchService);