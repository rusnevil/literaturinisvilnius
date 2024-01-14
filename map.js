
document.addEventListener('DOMContentLoaded', function () {
    var taskas1 = [54.6827187, 25.2841365,17];
    var taskas2 = [54.6827651, 25.2906257,17];
    var taskas3 = [54.6861006, 25.2720107,15];
    var taskas4 = [54.68608, 25.2695429,17];
    var taskas5 = [54.6858486, 24.0682518,9];
    var taskas6 = [54.6825131, 25.2807105,19];
    var taskas7 = [54.6785995, 25.2914876,18];
    var taskas8 = [54.6737304, 25.2725952,17];
    var taskas9 = [54.687560, 25.280587];
    var taskas10 = [54.6806367, 25.2704031,17];
    var taskas11 = [54.6770984, 25.2910624,18];
    var taskas12 = [54.6817402, 25.2894156,17];
    var taskas13 = [54.6761491, 25.284038,20.38];
    var taskas14 = [54.6823146, 25.2906399,20.39];
    var vilniusCenter = [54.687560, 25.280587];
    var icon1 = L.icon({
        iconUrl: './images/unnamed.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon2 = L.icon({
        iconUrl: './images/2.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon3 = L.icon({
        iconUrl: './images/3.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon4 = L.icon({
        iconUrl: './images/4.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon5 = L.icon({
        iconUrl: './images/5.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon6 = L.icon({
        iconUrl: './images/6.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon7 = L.icon({
        iconUrl: './images/7.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon8 = L.icon({
        iconUrl: './images/8.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon9 = L.icon({
        iconUrl: './images/9.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon10 = L.icon({
        iconUrl: './images/10.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon11 = L.icon({
        iconUrl: './images/11.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon12 = L.icon({
        iconUrl: './images/12.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon13 = L.icon({
        iconUrl: './images/13.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });
    var icon14 = L.icon({
        iconUrl: './images/14.png',
        iconSize:     [45, 60], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });

    
    var map = L.map('map-container').setView(vilniusCenter, 13);

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    
    L.marker(taskas1, {icon: icon1}).addTo(map)
    .bindPopup('Vilnius Location 2')
    .openPopup();

    L.marker(taskas2, {icon: icon2}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();

     L.marker(taskas3, {icon: icon3}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();

    L.marker(taskas4, {icon: icon4}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();

    L.marker(taskas5, {icon: icon5}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();

    L.marker(taskas6, {icon: icon6}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();

    L.marker(taskas7, {icon: icon7}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();

    L.marker(taskas8, {icon: icon8}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();
   
    L.marker(taskas9, {icon: icon9}).addTo(map)
        .bindPopup(`
        <p class="pirmastaskastxt"> <img class="pirmastaskasimg" src="./images/vincaskudirkasklp.webp">
        <p class="txtname">Vincas Kudirka</p>
        Vincas Kudirka (1858-1899)- prozininkas, poetas, publicistas, vertėjas,
        vienas Tautinio sąjūdžio ideologų, įvertinęs socialinio kriticizmo tradiciją
        lietuvių kultūroje. Tėvo verčiamas 1877m. įstojo į kunigų seminariją, tačiau
        vėliau buvo pašalintas dėl pašaukimo stokos. Jis savo lėšomis pabaigė Marijampolės
        gimnaziją ir išvyko į Varšuvą studijuoti istorijos-filologijos. Dar būdamas studentu, 
        įkvėptas laikraščio „Aušra“, įsitraukė į tautinio atgimimo judėjimą.
        <a href="./moreinfoabt1.html">Skaityti daugiau</a></p>        
        ` )
        .openPopup();

    L.marker(taskas10, {icon: icon10}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();

    L.marker(taskas11, {icon: icon11}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();

    L.marker(taskas12, {icon: icon12}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();

    L.marker(taskas13, {icon: icon13}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();

    L.marker(taskas14, {icon: icon14}).addTo(map)
        .bindPopup('Vilnius Location 2')
        .openPopup();
});
