let togglebutton = document.getElementsByClassName("toggle")[0];

togglebutton.addEventListener('click', function(event) {
    let body = document.querySelector('body');
    body.classList.toggle('dark-theme');
})