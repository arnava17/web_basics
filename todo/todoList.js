import Task from './item.js';
import Store from './store.js'
export default class ToDoList {

  constructor(taskList) {
    this.listNode = document.createElement('ul');
    this.taskList = {};
    this.initializeView(taskList);
  }

  removeTask(task) {
    this.listNode.removeChild(task.getNode());
    let taskID = task.getTask().id;
    delete this.taskList[taskID];
    Store.saveTasks(this.taskList);
  }

  addTask(taskObj) {
    let task = new Task(taskObj, this.removeTask.bind(this), this.updateTask.bind(this));
    this.taskList[task.getTask().id] = task.getTask();
    this.listNode.append(task.getNode());
    Store.saveTasks(this.taskList);
  }

  updateTask(task) {
    let list = this.taskList;
    let taskID = task.getTask().id;

    list[taskID] = task.getTask();
    Store.saveTasks(list);
  }

  getNode() {
    return this.listNode;
  }

  initializeView(taskList) {
    console.log(taskList);
    let id;
    for(id in taskList) {
      this.addTask(taskList[id]);
    }
  }
}
