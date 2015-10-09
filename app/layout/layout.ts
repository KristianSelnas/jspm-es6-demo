
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
        templateUrl: "app/layout/layout.html"
    };
}