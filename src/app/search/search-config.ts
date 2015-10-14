/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts" />

export function routes($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
        .state("search", {
            url: "/search",
            template: '<wb-search></wb-search>'
        })
}