import * as angular from "angular";
import layout from "./layout/layout-module";
import whiteboard from "./whiteboard/whiteboard-module";
import "./templates/templates"

export default name = "app";

const module = angular.module(name, [
    "templates",
    layout,
    whiteboard
]);

module.config( ($locationProvider: angular.ILocationProvider) => {
    $locationProvider.html5Mode(true);
});

