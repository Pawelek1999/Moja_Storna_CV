const toggles = document.querySelectorAll('.nav_button');

toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const parentItem = btn.closest('.nav_item_with_submenu');
    parentItem.classList.toggle('nav_item--open');
  });
});