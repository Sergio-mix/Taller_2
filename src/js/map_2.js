//Esta clase toma las coordenadas que se digitaron en la clase to_register.html y lo que hace es mostrarla en la clase de lsitar animales que es la que se encuentra el mapa donde se muestran las localizaciones de las pets que se hallan registrado



let map = L.map('map').setView([4.6585446, -74.1039554], 11.20);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


    L.marker([4.6585446, -74.1039554]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();