
export function routes($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
        .state("search", {
            url: "/search",
            template: '<wb-search></wb-search>'
        })
}