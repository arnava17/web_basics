export default class Task {

  constructor(task, onDelete, onEdit) {
    this.task = {};
    this.task.name = task.name || '';
    this.task.completed = task.completed || false;
    this.task.id = task.id || this.guidGenerator();

    this.onDelete = onDelete.bind(this);
    this.onEdit = onEdit;

    this.initializeView();
  }

  guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

  toggleComplete() {
    this.task.completed = !this.task.completed;

    if(this.task.completed) {
      this.taskNode.classList.add('completed');
    } else {
      this.taskNode.classList.remove('completed');
    }
    this.onEdit(this);
  }

  getNode() {
    return this.taskNode;
  }

  getTask() {
    return this.task;
  }

  editTask() {
    const vm = this;

    let li = this.taskNode;
    let span = li.querySelector('span');
    let input = document.createElement('input');
    input.value = vm.task.name;
    li.replaceChild(input, span);
    input.focus();


    input.onkeypress = function(e) {
      if(e.keyCode == 13) {
        li.replaceChild(span, input);
        span.innerHTML = input.value;
        vm.task.name = input.value;
        vm.onEdit(vm);
      }
    }

  }

  initializeView() {
    let vm = this;
    let taskView = document.createElement('li');

    if(this.task.completed) {
      taskView.classList.add('completed');
    }

    taskView.id = this.task.id;
    let span = document.createElement('span');
    let text = document.createTextNode(this.task.name);
    span.append(text);
    span.addEventListener('click', this.editTask.bind(this));

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', this.onDelete.bind(this, this));

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = this.task.completed;
    checkBox.addEventListener('click', this.toggleComplete.bind(this));



    taskView.append(checkBox);
    taskView.append(span);
    taskView.append(deleteButton);

    this.taskNode =  taskView;
  }
}
