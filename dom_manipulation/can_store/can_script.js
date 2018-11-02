(function() {

  let products;
  let main = document.querySelector('main');
  fetch('products.json').then((response) => {
    if(response.ok) {
      return response.json();
    }
  }).then((data) => {
    products = data;
    render();
  })

  function typeFilter(type) {
    return function(items) {
      if(type === 'all'){
        return items;
      }
      return items.filter(item => item.type === type);
    }
  }

  function searchFilter(searchTerm) {
    return function(items) {
      if(!searchTerm) {
        return items;
      }
      return items.filter(item => item.name.toLowerCase().includes(searchTerm))
    }
  }

  function applyFilters(items, ...filters) {
    filters.forEach((filter) => {
      items = filter(items);
    })
    return items;
  }

  function renderItem(item) {
    let section = document.createElement('section');
    section.classList.add(item.type);

    let heading = document.createElement('h2');
    heading.innerHTML = item.name;

    let image = document.createElement('img');
    image.src = 'images/'+item.image;

    let price = document.createElement('p');
    price.innerHTML = '$' + item.price;

    section.appendChild(heading);
    section.appendChild(image);
    section.appendChild(price);

    main.appendChild(section);
  }

  let filterButton = document.querySelector('button');

  filterButton.addEventListener('click', function(e) {
    e.preventDefault();
    render();
  });


  function render() {
    let category = document.querySelector('#category').value;
    let searchTerm = document.querySelector('#searchTerm').value;

    let filterByType = typeFilter(category.toLowerCase());
    let filterBySearchTerm = searchFilter(searchTerm.toLowerCase());


    let displayProducts = applyFilters(products, filterByType, filterBySearchTerm);

    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    displayProducts.forEach((product) => {
      renderItem(product);
    });

    if(displayProducts.length === 0) {
      main.innerHTML = `<p>No results to display!!</p>`
    }
  }

})();
