import { renderNotes } from "./renderNotes";
import { createNote } from "./createNote";
import { refs } from "./refs";
import localStorageAPI from "./localStorageAPI";
export function submitForm(e) {
    e.preventDefault();
    localStorageAPI.saveData(createNote(e));
    renderNotes(localStorageAPI.getNotes());
    refs.form.reset();
}
