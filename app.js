const input = document.querySelector('#task');
const taskList = document.querySelector('#task-list');
const form = document.querySelector('#add-task');
const ul = document.getElementById("task-list");

let tasks = {}

document.addEventListener("DOMContentLoaded", function(event) {
  drawTasks()
});

function drawTasks(){

  if (getTaskFromLocalStorage('tasks')) {
    tasks = JSON.parse(getTaskFromLocalStorage('tasks'))
  }
  
  if (Object.values(tasks).length === 0) {
    taskList.innerHTML = `<center><strong>Ops, you dont have task.</strong></center>`
  }else{

  taskList.innerHTML = ``

  Object.values(tasks).forEach(task => {

      let li = document.createElement("li");
      let li_text = document.createTextNode(task.task);   

      let button = document.createElement("button")
      let task_text = document.createTextNode("Remove task");   

      button.setAttribute("class", "btn");
      button.setAttribute("id", task.id); 
      button.appendChild(task_text)

      li.appendChild(button);
      li.appendChild(li_text);

      li.setAttribute("id", "test"); 
      li.setAttribute("class", "done");
      li.setAttribute("id", task.id); 

      if(task.isCompleted  == true){
        li.setAttribute("style", "text-decoration: line-through;");
      }

      ul.appendChild(li);

  })}
}

taskList.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    delete tasks[e.target.id]
    taskToSave = JSON.stringify(tasks)
    saveInLocalStorage('tasks', taskToSave)
    drawTasks()
  
   }else if(e.target.tagName === 'LI'){
    tasks[e.target.id].isCompleted  = true;
    let taskToSave = JSON.stringify(tasks)
    saveInLocalStorage('tasks', taskToSave)
    drawTasks()
  
  } 
});

form.addEventListener('submit', function(e){
  e.preventDefault();
  const newTask = document.createElement('li');
  const removeBtn = document.createElement('button');

  if (input.value.trim() === '') {
    alert("You cannot enter a empty task");
    
  }else{
  const task = {
      id: Date.now(),
      task: input.value,
      isCompleted: false
  }

  tasks[task.id] = task
  
  taskToSave = JSON.stringify(tasks)
  saveInLocalStorage('tasks', taskToSave)
  drawTasks()
  input.value = '';
}
})



