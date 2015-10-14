/// <reference path="../../../typings/angularjs/angular.d.ts" />

import {Note, default as NotesService} from "./notes-service";
import * as noteEvents from "./note-events";

export class NoteController {

    note: Note;

    constructor(private notesService: NotesService, private $scope: angular.IScope) { }

    deleteNote() {
        this.notesService.deleteNote(this.note.getId()).then((success:boolean)=> {
            if (success) {
                this.$scope.$emit(noteEvents.NOTE_DELETED, this.note);
            }
        });
    }

}

export default (): angular.IDirective => {
    return {
        scope: {
            note: "="
        },
        controller: NoteController,
        controllerAs: "vm",
        bindToController: true,
        templateUrl: "notes/note.html"
    };
}