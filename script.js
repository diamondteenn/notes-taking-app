document.addEventListener("DOMContentLoaded", function () {
  const noteInput = document.getElementById("note-input");
  const addNoteButton = document.getElementById("add-note");
  const notesContainer = document.getElementById("notes");

  addNoteButton.addEventListener("click", function () {
    const noteContent = noteInput.innerHTML.trim();
    if (noteContent) {
      const noteCard = document.createElement("div");
      noteCard.className = "card";
      const noteCardBody = document.createElement("div");
      noteCardBody.className = "card-body";
      const noteText = document.createElement("div");
      noteText.className = "card-text";
      noteText.innerHTML = noteContent;
      noteCardBody.appendChild(noteText);
      noteCard.appendChild(noteCardBody);
      notesContainer.appendChild(noteCard);
      noteInput.innerHTML = "";
    }
  });
});
