// JavaScript untuk Filter AJAX
document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.filters-button-group button');
  var gridItems = document.querySelectorAll('.grid-item');

// Author : Idin Iskandar
// Template : Landing page phone store 
// created at : 07 Mei 2024

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filterValue = this.getAttribute('data-filter');
      gridItems.forEach(function (item) {
        if (filterValue == '*' || item.classList.contains(filterValue.replace('.', ''))) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
