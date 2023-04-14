import { createNote } from "./createNote";
import { refs } from "./refs";
export function submitForm(e) {
    e.preventDefault()
   createNote(e)
}
