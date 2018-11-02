let input = document.querySelector('input');



function logInput() {
  console.log(input.value);
}

function debounce(task, wait) {
  let timer;
  return function() {
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(task, wait);
  }
}

let debounceLog = debounce(logInput, 1000);
console.log(debounceLog);
input.addEventListener('input', debounceLog);
