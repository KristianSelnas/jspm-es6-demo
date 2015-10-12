export class SearchQuery {

    searchString: string;
    maxHits: number;

    constructor(searchString: string, maxHits = 10) {
        this.searchString = searchString;
        this.maxHits = maxHits;
    }


}

export class SearchResult {
    title: string;
    url: string;

    constructor(title: string, url: string) {
        this.title = title;
        this.url = url;
    }

}


export default class SearchService {

    constructor(private $q: angular.IQService) { }

    search(query: SearchQuery): angular.IPromise<Array<SearchResult>> {
        const defer = this.$q.defer();
        const res = [];
        for (let i = 0; i<query.maxHits; i++) {
            res.push(new SearchResult(`${query.searchString} ${i}`, `/page${i}`));
        }
        defer.resolve(res);
        return defer.promise;
    }
}