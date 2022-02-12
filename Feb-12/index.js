console.clear();

import navBar from './nav.js';

let nav_html = (new navBar()).render();
document.getElementById('nav_container').innerHTML = nav_html;