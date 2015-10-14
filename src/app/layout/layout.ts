/// <reference path="../../../typings/angularjs/angular.d.ts" />

export class LayoutController {

    constructor() {
    }
}

export default (): angular.IDirective => {
    return {
        scope: {},
        controller: LayoutController,
        controllerAs: "vm",
        bindToController: true,
        templateUrl: "layout/layout.html"
    };
}