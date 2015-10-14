/// <reference path="../../../typings/angularjs/angular.d.ts" />

import {Note, NotesService} from "./notes-service";
import * as noteEvents from "./note-events";

export class NoteEditController {

    private note: Note;

    constructor(private notesService: NotesService, private $state:angular.ui.IStateService, private $scope: angular.IAnchorScrollProvider, private $stateParams: angular.ui.IStateParamsService) {
        let noteId = $stateParams["id"];
        if (noteId) {
            notesService.getNote(noteId).then((note: Note)=> this.note = note);
        } else {
            this.note = new Note();
        }
    }

    saveOrUpdate() {
        if (this.note.isNew()) {
            this.notesService.addNote(this.note).then((newNote) => {
                this.$scope.$emit(noteEvents.NOTE_ADDED, newNote);
                this.$state.go("whiteboard");
            });
        } else {
            this.notesService.updateNote(this.note).then((updatedNote) => {
                this.$scope.$emit(noteEvents.NOTE_UPDATED, updatedNote);
                this.$state.go("whiteboard");
            });
        }
    }
}

export default (): angular.IDirective => {
    return {
        scope: {
            note: "="
        },
        controller: NoteEditController,
        controllerAs: "vm",
        bindToController: true,
        templateUrl: "notes/note-edit.html"
    };
}