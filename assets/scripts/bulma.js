//document.addEventListener('DOMContentLoaded', () => {

  // Get "navbar-burger" element
  const $navbarBurger = document.querySelector('.navbar-burger');

  console.log('$navbarBurger', $navbarBurger);

  // Add a click event on it
  $navbarBurger.addEventListener('click', () => {

    console.log('$navbarBurger click', 'click');

    // Get the target from the "data-target" attribute
    const target = $navbarBurger.dataset.target;
    const $target = document.getElementById(target);

    console.log('$target', $target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $navbarBurger.classList.toggle('is-active');
    $target.classList.toggle('is-active');

  });

//});
