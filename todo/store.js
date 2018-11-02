export default class Store {

  static retrieveTasks() {
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : {};
    return tasks;
  }

  static saveTasks(tasks) {
    if(!tasks){
      return;
    }
    let taskString = JSON.stringify(tasks);
    localStorage.setItem('tasks', taskString);
  }
}
