import { refs } from "./refs";

export function renderNotes(notes) {
const markup = notes.map(note => `<li class="task-list-item">
<button class="task-list-item-btn" data-id="${note.id}">Удалить</button>
 <h3>${note.taskName}</h3>
<p>${note.taskText}</p>
</li>`).join('');

refs.list.innerHTML = '';
refs.list.insertAdjacentHTML('beforeend',markup);
}

