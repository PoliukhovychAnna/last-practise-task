export function createNote(e) {
     const {
       elements: { taskName, taskText },
     } = e.currentTarget;
     const dataNote = {
       id: Date.now(),
     };

     if (!taskName.value || !taskText.value) {
       alert('Fill all fields!');
       return;
     }
      new FormData(e.currentTarget).forEach((value, name) => {
       dataNote[name] = value;
      });
    return dataNote
}