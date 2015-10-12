
export function routes($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
        .state("whiteboard", {
            url: "/",
            template: '<wb-whiteboard></wb-whiteboard>'
        })
}