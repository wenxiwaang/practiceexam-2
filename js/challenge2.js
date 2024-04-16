// question 1:
let billingAddress = document.querySelector('#billing');
document.addEventListener("DOMContentLoaded", function(){
    console.log(billingAddress.value);
})


// question 2:
let checkbox = document.querySelector('input[type="checkbox"]');
let autofill = document.querySelector('#home');

checkbox.addEventListener('click', function() {
    if (checkbox.checked) { 
        autofill.value = billingAddress.value;
        autofill.disabled = true;
    } else {
        autofill.value = "";
        autofill.disabled = false;
    }
})
