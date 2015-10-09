
export function routes($stateProvider: angular.ui.IStateProvider) {
    $stateProvider
        .state("whiteboard", {
            url: "/",
            template: '<wb-whiteboard></wb-whiteboard>'
        })
        .state("whiteboard.note", <angular.ui.IState>{
            url: "note/edit?id",
            views: {
                "note-edit": {
                    template: "<wb-note-edit></wb-note-edit>",
                }
            }
        })
}