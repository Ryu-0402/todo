const addTaskButton = document.getElementById("add-btn");
const newTaskInput = document.getElementById("todo-input");
const taskList = document.getElementById("todo-list");

addTaskButton.addEventListener("click", function () {
  const taskText = newTaskInput.value.trim();

  if (taskText === "") {
    alert("ちゃんと書いてください");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click',function(){
    taskList.removeChild(li);
  })

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  newTaskInput.value = '';
});
