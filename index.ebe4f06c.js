const e={form:document.querySelector("#task-form"),list:document.querySelector("#task-list")};function t(e){const{elements:{taskName:t,taskText:a}}=e.currentTarget,r={id:Date.now()};if(t.value&&a.value)return new FormData(e.currentTarget).forEach(((e,t)=>{r[t]=e})),r;alert("Fill all fields!")}var a={saveData:function(e){const t=JSON.parse(localStorage.getItem("NOTES"))||[];t.push(e),localStorage.setItem("NOTES",JSON.stringify(t))}};e.form.addEventListener("submit",(function(r){r.preventDefault(),a.saveData(t(r)),e.form.reset()}));
//# sourceMappingURL=index.ebe4f06c.js.map
