// question 1:
let style = document.querySelector('h1');
style.classList.add('heading');


// question 2:
document.addEventListener('dblclick', function() {
    const currentTime = new Date();
    alert(currentTime);
});


// question 3:
const checkbox = document.querySelector('#toggle');
const text = document.querySelector('#email_input');
checkbox.addEventListener('click', function() {
    if (checkbox.checked) {
        emailBox.classList.remove('hidden'); //<-- here removes hidden because its default is hidden
    } else {
        emailBox.classList.add('hidden');
    }
});
