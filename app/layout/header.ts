
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
        templateUrl: "app/layout/header.html"
    };
}