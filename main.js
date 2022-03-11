const openDrawerBtn = document.querySelector('#drawer-btn');
const closeDrawerBtn = document.querySelector('#drawer__close');
const drawer = document.querySelector('.drawer__nav');

openDrawerBtn.addEventListener('click', toggleDrawer);
closeDrawerBtn.addEventListener('click', toggleDrawer);
function toggleDrawer() {
   if (drawer.classList.contains('drawer__nav-open')) {
      drawer.classList.remove('drawer__nav-open');
   } else {
      drawer.classList.add('drawer__nav-open');
   }
}
