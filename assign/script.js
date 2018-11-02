(function () {

  let input = document.querySelector('input');
  let addButton = document.querySelector('button');
  let list = document.querySelector('ul');
  let storageList = {};
  let idTracker = 0;

  class ToDo {
    constructor(value) {
      this.value = value;
    }

    create() {
      
    }

  }

  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.querySelector('input');
    console.log(input.value);
    if(input.value) {
      addItem(input.value);
    }
  })

  function editItem(li) {
    let input = document.createElement('input');
    input.type = 'text';
    input.onkeypress = function(e) {
      if(e.keyCode == 13) {
        li.querySelector('span').innerHTML = input.value;
        console.log(input.parentNode);
        input.parentNode.removeChild(input);
      }
    }

    li.appendChild(input);

  }

  function addItem(item) {
    let li = document.createElement('li');
    li.id = idTracker;
    let text = document.createTextNode(item);
    let span = document.createElement('span');
    span.append(text);

    let delButton = document.createElement('button');
    let delText = document.createTextNode('Delete');
    delButton.append(delText);

    let editButton = document.createElement('button');
    let editText = document.createTextNode('Edit');
    editButton.append(editText);

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';


    li.append(checkBox);
    li.append(span);
    li.append(delButton);
    li.append(editButton);

    let obj = {
      name : item,
      completed : checkBox.checked
    }

    storageList.id =
    list.append(li);

    li.addEventListener('click', (e) => {
      let li = e.target.closest('li');

      if(e.target.tagName === 'BUTTON') {
        var action = e.target.innerHTML;
        console.log(action);

        if(action === 'Delete') {
          list.removeChild(li);
        } else if (action === 'Edit') {
          editItem(li);
        }
      }

      if(e.target.tagName === 'INPUT') {
        if(e.target.checked) {
          li.classList.add('completed');
        } else {
          li.classList.remove('completed');
        }
      }
    });
  }



})();
