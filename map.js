
document.addEventListener('DOMContentLoaded', function () {
    // Coordinates for two locations in Vilnius, Lithuania
    var taskas1 = [54.687560, 25.280587];
    var taskas2 = [54.6961, 25.2986];

    // Create a map centered at Vilnius with an initial zoom level
    var map = L.map('map-container').setView(taskas1, 13);

    // Add an OpenStreetMap tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker to the map at the first location in Vilnius
    L.marker(taskas1).addTo(map)
        .bindPopup(`
        <p class="pirmastaskastxt"> <img class="pirmastaskasimg" src="./images/vincaskudirkasklp.webp"><p class="txtname">Vincas Kudirka</p>
        Vincas Kudirka (1858-1899)- prozininkas, poetas, publicistas, vertėjas,
        vienas Tautinio sąjūdžio ideologų, įvertinęs socialinio kriticizmo tradiciją
        lietuvių kultūroje. Tėvo verčiamas 1877m. įstojo į kunigų seminariją, tačiau
        vėliau buvo pašalintas dėl pašaukimo stokos. Jis savo lėšomis pabaigė Marijampolės
        gimnaziją ir išvyko į Varšuvą studijuoti istorijos-filologijos. Dar būdamas studentu, 
        įkvėptas laikraščio „Aušra“, įsitraukė į tautinio atgimimo judėjimą.
        <a href="./moreinfoabt1.html">Skaityti daugiau</a></p>        
        ` )
        .openPopup();

    // Add another marker to the map at the second location in Vilnius
    L.marker(taskas2).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();
});
