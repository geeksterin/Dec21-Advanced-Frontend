import navBar from './nav.js';
let container_elem = document.getElementById('nav_container');

let nav_html = (new navBar()).render();
container_elem.innerHTML = nav_html;