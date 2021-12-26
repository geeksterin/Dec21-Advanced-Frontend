let close_btn = document.getElementById('close_sidenav');

close_btn.addEventListener('click', function() {
    let sidenav = document.getElementById('sidenav');
    sidenav.classList.add('d-none');
});

let open_btn = document.getElementById('open_sidenav');
open_btn.addEventListener('click', function() {
    let sidenav = document.getElementById('sidenav');
    sidenav.classList.remove('d-none');
})