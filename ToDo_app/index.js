let addToDoBtn = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoBtn.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    if(paragraph.style.textDecoration !== "line-through"){
    paragraph.style.textDecoration = "line-through";
    paragraph.style.color= 'rgb(1, 153, 13)';
    } else {
      paragraph.style.textDecoration = "none";
      paragraph.style.color= 'rgb(197, 62, 0)';
    }
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});

