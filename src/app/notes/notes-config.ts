/// <reference path="../../../typings/angular-ui-router/angular-ui-router.d.ts" />

export function routes($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
        .state("whiteboard.note", <angular.ui.IState> {
            url: "note/edit?id",
            views: {
                "note-edit": {
                    template: "<wb-note-edit></wb-note-edit>",
                }
            }
        })
}