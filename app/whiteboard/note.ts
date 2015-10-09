//noinspection TypeScriptCheckImport
import {Note, NotesService} from "./notes-service";
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
        templateUrl: "app/whiteboard/note.html"
    };
}