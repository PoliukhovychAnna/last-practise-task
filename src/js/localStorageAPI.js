const LOCAL_STORAGE_KEY = "NOTES"

function saveData(note) {
    const notes = getNotes();
    notes.push(note);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
}

function getNotes () {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}



export default { saveData, getNotes }

