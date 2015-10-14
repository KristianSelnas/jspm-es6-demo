/// <reference path="../../../typings/angularjs/angular.d.ts" />

export class Note {

    constructor(private title?: string, private text?: string, private color = "color1", private id = -1) { }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getText() {
        return this.text;
    }

    getColor() {
        return this.color;
    }

    isNew() {
        return this.id == -1;
    }

    asJson() {
        return {
            "id": this.id,
            "title": this.title,
            "text": this.text,
            "color": this.color
        }
    }

    static fromJson(data) {
        return new Note(data.title, data.text, data.color, data.id);
    }
}


export default class NotesService {

    private apiUrl = "http://localhost:8081/api/notes";

    constructor(private $http: angular.IHttpService) { }

    getNotes(): angular.IPromise<Array<Note>> {
        return this.$http.get(this.apiUrl).then((res:angular.IHttpPromiseCallbackArg)=> res.data.map((n)=> Note.fromJson(n)));
    }

    addNote(note: Note): angular.IPromise<Note> {
        return this.$http.post(this.apiUrl, note.asJson()).then((res:angular.IHttpPromiseCallbackArg)=> Note.fromJson(res.data));
    }

    updateNote(note: Note): angular.IPromise<Note> {
        return this.$http.put(this.apiUrl+"/"+note.getId(), note.asJson()).then((res:angular.IHttpPromiseCallbackArg)=> Note.fromJson(res.data));
    }

    getNote(noteId: number): angular.IPromise<Note> {
        return this.$http.get(this.apiUrl+"/"+noteId).then((res:angular.IHttpPromiseCallbackArg)=> Note.fromJson(res.data));
    }

    deleteNote(noteId:number): angular.IPromise<boolean> {
        return this.$http.delete(this.apiUrl+"/"+noteId).success(()=> true).error(()=> false);
    }
}