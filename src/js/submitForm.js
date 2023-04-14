import { createNote } from "./createNote";
import { refs } from "./refs";
import localStorageAPI from "./localStorageAPI";
export function submitForm(e) {
    e.preventDefault();
    localStorageAPI.saveData(createNote(e));
    refs.form.reset();
}
