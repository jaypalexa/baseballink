document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurger = document.querySelector('.navbar-burger');
  $navbarBurger.addEventListener('click', () => {
    const target = $navbarBurger.dataset.target;
    const $target = document.getElementById(target);
    $navbarBurger.classList.toggle('is-active');
    $target.classList.toggle('is-active');
  });
});

let dropdown = document.querySelector('#dropdown-magazine');
dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdown.classList.toggle('is-active');
});