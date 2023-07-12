setInterval(function () {
    var button = document.getElementById('return_button');
    if (window.scrollY > window.innerHeight) {
        button.classList.add('visible');
        button.disabled = false;
    } else {
        button.classList.remove('visible');
        button.disabled = true;
    }
}, 500);