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

function iniciarMap(){
    let coord = {lat: -34.646202, lng: -58.486498};
    let map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
    let marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}

iniciarMap();