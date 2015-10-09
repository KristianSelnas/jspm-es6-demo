import * as angular from "angular";
import searchModule from "../search/search-module";

import layout from "./layout";
import header from "./header"

export default name = "app.layout";
const module = angular.module(name, [
    searchModule
]);

module
    .directive("demoLayout", layout)
    .directive("demoHeader", header);
