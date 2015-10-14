//noinspection TypeScriptCheckImport
import {SearchService, SearchResult, SearchQuery} from "./search-service";

export class GlobalSearchController {

    searchQuery:string;
    maxHits: number;

    searchResults: Array<SearchResult> = [];

    constructor(private searchService: SearchService) {
    }

    search() {
        this.searchService.search(new SearchQuery(this.searchQuery, this.maxHits))
            .then((res)=> {
                this.searchResults = res;
            });
    }
}

export default (): angular.IDirective => {
    return {
        scope: {},
        controller: GlobalSearchController,
        controllerAs: "vm",
        bindToController: true,
        templateUrl: "app/search/search.html"
    };
}