import ToDoList from './todoList.js';
import Store from './store.js';
(function () {

  let itemInput = document.querySelector('form > input');
  let addItemButton = document.querySelector('form > button');
  let main = document.querySelector('main');
  let localStorage = window.localStorage;

  // function retrieveTasks() {
  //   let tasks = localStorage.getItem('tasks');
  //   tasks = tasks ? JSON.parse(tasks) : {};
  //   return tasks;
  // }

  // function guidGenerator() {
  //   var S4 = function() {
  //      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  //   };
  //   return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  // }

  // function saveTasks(tasks) {
  //   if(!tasks){
  //     return;
  //   }
  //   let taskString = JSON.stringify(tasks);
  //   localStorage.setItem('tasks', taskString);
  //   console.log(retrieveTasks());
  // }

  // class Task {
  //
  //   constructor(task, onDelete, onEdit) {
  //     this.task = {};
  //     this.task.name = task.name || '';
  //     this.task.completed = task.completed || false;
  //     this.task.id = task.id || guidGenerator();
  //
  //     this.onDelete = onDelete.bind(this);
  //     this.onEdit = onEdit;
  //
  //     this.initializeView();
  //   }
  //
  //   toggleComplete() {
  //     this.task.completed = !this.task.completed;
  //
  //     if(this.task.completed) {
  //       this.taskNode.classList.add('completed');
  //     } else {
  //       this.taskNode.classList.remove('completed');
  //     }
  //     this.onEdit(this);
  //   }
  //
  //   getNode() {
  //     return this.taskNode;
  //   }
  //
  //   getTask() {
  //     return this.task;
  //   }
  //
  //   editTask() {
  //     const vm = this;
  //
  //     let li = this.taskNode;
  //     let span = li.querySelector('span');
  //     let input = document.createElement('input');
  //     input.value = vm.task.name;
  //     li.replaceChild(input, span);
  //     input.focus();
  //
  //
  //     input.onkeypress = function(e) {
  //       if(e.keyCode == 13) {
  //         li.replaceChild(span, input);
  //         span.innerHTML = input.value;
  //         vm.task.name = input.value;
  //         vm.onEdit(vm);
  //       }
  //     }
  //
  //   }
  //
  //   initializeView() {
  //     let vm = this;
  //     let taskView = document.createElement('li');
  //
  //     if(this.task.completed) {
  //       taskView.classList.add('completed');
  //     }
  //
  //     taskView.id = this.task.id;
  //     let span = document.createElement('span');
  //     let text = document.createTextNode(this.task.name);
  //     span.append(text);
  //     span.addEventListener('click', this.editTask.bind(this));
  //
  //     let deleteButton = document.createElement('button');
  //     deleteButton.innerHTML = 'Delete';
  //     deleteButton.addEventListener('click', this.onDelete.bind(this, this));
  //
  //     let checkBox = document.createElement('input');
  //     checkBox.type = 'checkbox';
  //     checkBox.checked = this.task.completed;
  //     checkBox.addEventListener('click', this.toggleComplete.bind(this));
  //
  //
  //
  //     taskView.append(checkBox);
  //     taskView.append(span);
  //     taskView.append(deleteButton);
  //
  //     this.taskNode =  taskView;
  //   }
  // }

  // class ToDoList {
  //
  //   constructor(taskList) {
  //     this.listNode = document.createElement('ul');
  //     this.taskList = {};
  //     this.initializeView(taskList);
  //   }
  //
  //   removeTask(task) {
  //     this.listNode.removeChild(task.getNode());
  //     let taskID = task.getTask().id;
  //     delete this.taskList[taskID];
  //     saveTasks(this.taskList);
  //   }
  //
  //   addTask(taskObj) {
  //     let task = new Task(taskObj, this.removeTask.bind(this), this.updateTask.bind(this));
  //     this.taskList[task.getTask().id] = task.getTask();
  //     this.listNode.append(task.getNode());
  //     saveTasks(this.taskList);
  //   }
  //
  //   updateTask(task) {
  //     let list = this.taskList;
  //     let taskID = task.getTask().id;
  //
  //     list[taskID] = task.getTask();
  //     saveTasks(list);
  //   }
  //
  //   getNode() {
  //     return this.listNode;
  //   }
  //
  //   initializeView(taskList) {
  //     console.log(taskList);
  //     let id;
  //     for(id in taskList) {
  //       this.addTask(taskList[id]);
  //     }
  //   }
  // }

  let tasks = Store.retrieveTasks();
  //console.log(tasks);
  let todoList = new ToDoList(tasks);
  main.append(todoList.getNode());

  addItemButton.addEventListener('click', function(e) {
    e.preventDefault();
    todoList.addTask({name : itemInput.value});
    itemInput.value = '';
  })
})();
