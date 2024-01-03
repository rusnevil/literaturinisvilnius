
document.addEventListener('DOMContentLoaded', function () {
    // Coordinates for two locations in Vilnius, Lithuania
    var vilniusCoordinates1 = [54.6872, 25.2797];
    var vilniusCoordinates2 = [54.6961, 25.2986];

    // Create a map centered at Vilnius with an initial zoom level
    var map = L.map('map-container').setView(vilniusCoordinates1, 13);

    // Add an OpenStreetMap tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker to the map at the first location in Vilnius
    L.marker(vilniusCoordinates1).addTo(map)
        .bindPopup(`
        <p class="pirmastaskastxt"> <img class="pirmastaskasimg" src="./images/image4.jpg">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, 
 vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
  congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris
   ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a l
   acus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper 
   ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec <a href="./moreinfoabt1.html">Read more</a></p>        
        ` )
        .openPopup();

    // Add another marker to the map at the second location in Vilnius
    L.marker(vilniusCoordinates2).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();
});
