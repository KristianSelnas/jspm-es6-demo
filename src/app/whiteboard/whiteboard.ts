//noinspection TypeScriptCheckImport
import {Note, NotesService} from "../notes/notes-service";
import * as noteEvents from "../notes/note-events";

export class WhiteboardController {

    notes: Array<Note> = [];

    constructor(private notesService: NotesService, private $rootScope: angular.IRootScopeService) {
        this.notesService.getNotes().then((n)=> this.notes = n);
        this.$rootScope.$on(noteEvents.NOTE_ADDED, (e:angular.IAngularEvent, note:Note) => this.onNoteAdded(note));
        this.$rootScope.$on(noteEvents.NOTE_UPDATED, (e:angular.IAngularEvent, note:Note) => this.onNoteUpdated(note));
        this.$rootScope.$on(noteEvents.NOTE_DELETED, (e:angular.IAngularEvent, note:Note) => this.onNoteDeleted(note));
    }

    onNoteAdded(note: Note) {
        this.notes.push(note);
    }

    onNoteUpdated(note: Note) {
        this.notes.splice(this.getIndex(note), 1, note);
    }

    onNoteDeleted(note: Note) {
        this.notes.splice(this.getIndex(note), 1);
    }

    private getIndex(note) {
        return this.notes.findIndex((n:Note)=>n.getId() == note.getId());
    };
}

export default (): angular.IDirective => {
    return {
        scope: {},
        controller: WhiteboardController,
        controllerAs: "vm",
        bindToController: true,
        templateUrl: "app/whiteboard/whiteboard.html"
    };
}