import * as angular from "angular";
import layout from "./layout/layout-module";
import whiteboard from "./whiteboard/whiteboard-module";

export default name = "app";

const module = angular.module(name, [
    layout,
    whiteboard
]);

module.config( ($locationProvider: angular.ILocationProvider) => {
    $locationProvider.html5Mode(true);
});

