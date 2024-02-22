const optionButton = document.getElementById('optionButton');
const options = document.getElementById('options');

optionButton.addEventListener('click', function() {
    if (options.style.display == '' || options.style.display == 'none') {
        options.style.display = 'flex';
    }
    else {
        options.style.display = 'none';
    }
})