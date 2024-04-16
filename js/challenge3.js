// questions 1:
document.addEventListener('DOMContentLoaded', function() {
    let secondcap = document.querySelectorAll('figcaption')[1];
    alert(secondcap.innerText);
})

// question 2:
document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let images = document.querySelectorAll('.thumbnail');

    images.forEach(function(image, index) {
        if (!image.hasAttribute('tabindex')) {
            image.setAttribute('tabindex', '0');
        }

        image.addEventListener('mouseover', function() {
            display.style.backgroundImage = `url(${image.src})`;
            display.textContent = image.alt;
            image.style.opacity = '0';
        });

        image.addEventListener('mouseout', function() {
            display.style.backgroundImage = '';
            display.textContent = 'Hover over an image';
            image.style.opacity = '1';
        });

        image.addEventListener('focus', function() {
            display.style.backgroundImage = `url(${image.src})`;
            display.textContent = image.alt;
            image.style.opacity = '0';
        });

        image.addEventlistener('blur', function() {
            display.style.backgroundImage = '';
            display.textContent = 'Hover over an image';
            image.style.opacity = '1';
        });
    });
});


// const imagetwo = document.querySelector('.thumbnail:not([tabindex = "0"])');
// imagetwo.setAttribute('tabindex', '0');


// display = document.getElementById('display');
// var images = document.getElementsByClassName('thumbnail');
// for (var i=0; i < images.length; i++) {
//     images[i].addEventListener('mouseover', function() {
//         display.style.backgroundImage = "url('" + this.src + "')";
//         display.textContent = this.alt;
//         this.style.display = 'none';
//     });
//     images[i].addEventListener('mouseout', function() {
//         display.style.backgroundImage = ''; // Clear the background image
//         display.textContent = 'Hover over an image'; // Clear the text content
//         this.style.display = 'flex'; // Show the thumbnail image again
//     }); 
//     images[i].addEventListener('focus', function() {
//         display.style.backgroundImage = "url('" + this.src + "')";
//         display.textContent = this.alt;
//         this.style.opacity = 0;
//     });
//     images[i].addEventListener('blur', function() {
//         display.style.backgroundImage = '';
//         display.textContent = 'Hover over an image';;
//         this.style.opacity = 1;
//     });
// }

// const imagetwo = document.querySelector('.thumbnail:not([tabindex = "0"])');
// imagetwo.setAttribute('tabindex', '0');