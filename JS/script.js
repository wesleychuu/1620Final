let togglebutton = document.getElementsByClassName("toggle")[0];

togglebutton.addEventListener('click', function(event) {
    let body = document.querySelector('body');
    body.classList.toggle('dark-theme');
});



let submitbutton = document.querySelector('#frm-btn');

submitbutton.addEventListener('click', function(event) {
    event.preventDefault();
    let form = document.querySelector('.myForm');
    myinfo = {
        name: form.elements[1].value,
        email: form.elements[2].value,
        message: form.elements[0].value
    };
    console.log(myinfo);
});

