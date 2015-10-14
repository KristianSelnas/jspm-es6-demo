/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts" />

export class HeaderController {

    constructor(private $state: angular.ui.IStateService) {
    }

    search(query: string) {
        this.$state.go("search");
    }
}

export default (): angular.IDirective => {
    return {
        scope: {},
        controller: HeaderController,
        controllerAs: "vm",
        bindToController: true,
        templateUrl: "layout/header.html"
    };
}