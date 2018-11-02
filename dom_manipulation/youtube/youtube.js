(function() {

  var input = document.querySelector('input');

  console.log(input);

  input.addEventListener('input', function(e)  {
    console.log(e.target.value);
    document.querySelector('span').innerHTML = e.target.value;
  });

})();
