
document.addEventListener('DOMContentLoaded', function () {
    var taskas1 = [54.6827187, 25.2841365,17];
    var taskas2 = [54.6827651, 25.2906257,17];
    var taskas3 = [54.6861006, 25.2720107,15];
    var taskas4 = [54.68608, 25.2695429,17];
    var taskas5 = [54.6853391, 25.2872653,17];
    var taskas6 = [54.6825131, 25.2807105,19];
    var taskas7 = [54.6785995, 25.2914876,18];
    var taskas8 = [54.6737304, 25.2725952,17];
    var taskas9 = [54.687560, 25.280587];
    var taskas10 = [54.6806367, 25.2704031,17];
    var taskas11 = [54.6770984, 25.2910624,18];
    var taskas12 = [54.6817402, 25.2894156,17];
    var taskas13 = [54.6761491, 25.284038,20.38];
    var taskas14 = [54.6871411,25.2786244,18];
    var taskas15 = [54.6823146, 25.2906399,20.39];
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
    var icon15 = L.icon({
        iconUrl: './images/15.png',
        iconSize:     [45, 52], 
        iconAnchor:   [20, 52], 
        popupAnchor:  [5, -55] 
    });

    
    var map = L.map('map-container').setView(taskas1, 14);

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    
    L.marker(taskas1, {icon: icon1}).addTo(map)
    .bindPopup(`
    <p class="maptxt"> <img class="mapimg" src="./images/kdpaminklas.png">
    <p class="txtname">Kristijonas Donelaitis</p>
    Kristijonas Doneláitis (1714 01 01 – 1780 02 18) gyveno dabar jau išnykusiuose Lazdynėliuose, buvo lietuvių poetas, 
    evangelikų liuteronų kunigas. Lietuvių grožinės literatūros pradininkas. Donelaitis buvo išsilavinęs Apšvietos žmogus. 
    1740 baigė Karaliaučiaus universiteto Evangelikų liuteronų teologijos fakultetą, lankė lietuvių kalbos seminarą. 
    1740–42 buvo Stalupėnų mokyklos kantorius, 1742–43 rektorius. Nuo 1743 iki gyvenimo pabaigos buvo Tolminkiemio klebonas. 
    <a href="./donelaitis.html">Skaityti daugiau</a></p>        
    ` )
    .openPopup();

    L.marker(taskas2, {icon: icon2}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/amsklpt.jpg">
        <p class="txtname">Adomas Mickevičius</p>
        Adomas Mickevičius (Adam Mickiewicz, 1798–1855) – iškiliausias XIX a. Lietuvos poetas, lenkų literatūros klasikas, 
        reikšminga Europos Romantizmo figūra. Gimė Naugarduke smulkiųjų bajorų šeimoje. 1807–1815 m. Adomas Mickevičius mokėsi 
        Naugarduko apskrities mokykloje, vadovaujamoje vienuolių dominikonų, ją baigęs įstojo į Vilniaus universitetą – 
        iš pradžių į Fizikos ir matematikos, vėliau perėjo į Literatūros ir laisvųjų menų fakultetą. 
        <a href="./mickevicius.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();

     L.marker(taskas3, {icon: icon3}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/vkmmuziejus2.jpg">
        <p class="txtname">Vincas Krėvė-Mickevičius</p>
        Vincas Krėvė (1882–1954) – reikšmingiausias XX a. pradžios lietuvių rašytojas, literatūros klasikas. Krėvė esmingai 
        praplėtė ir pagilino lietuvių literatūros problematiką filosofiniu žmogaus būties traktavimu, praturtino literatūros 
        stilistinę ir žanrinę raišką, susiejo lietuvių literatūrą su Europos literatūros kontekstais. Jis gimė 1882 m. spalio 
        19 d. Subartonyse. Pasimokęs Merkinės pradinėje mokykloje bei pasiruošęs privačiai, Peterburge išlaikė 4 klasių kurso 
        egzaminą, 1898 m. įstojo į Vilniaus kunigų seminariją, kurioje mokėsi 2 metus, bet dėl nesutarimų su seminarijos vadovybe 
        iš jos pasitraukė. 
        <a href="./kreve.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();

    L.marker(taskas4, {icon: icon4}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/vmmuziejus.jpg">
        <p class="txtname">Vincas Mykolaitis-Putinas</p>
        Vincas Mykolaitis-Putinas gimė 1893 m. sausio 6 d. ūkininkų šeimoje, Pilotiškių kaime. Jis turėjo dar šešis brolius ir dvi seseris. Tėvas buvo labai griežtas, ambicingas, kieto charakterio. Motina jautresnė, švelnesnio būdo, niekada nerodydavo savo pykčio. Vincas dvi žiemas lankė Gudelių pradžios mokyklą, po to mokėsi Marijampolės gimnazijoje ir baigęs keturias klases, paskatintas tėvų, įstojo į Seinių kunigų seminariją. Besimokydamas pirmoje gimnazijos klasėje, pradėjo dainuoti mokinių chore, o vėliau ir Marijampolės lietuvių chore.
        <a href="./putinas.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();

    L.marker(taskas5, {icon: icon5}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/jmkatedra.jpg">
        <p class="txtname">Justinas Marcinkevičius</p>
        Justinas Marcinkevičius (1930 03 - 2011 02 16) - lietuvių rašytojas, vertėjas. Mokėsi Alksniakiemio pradžios mokykloje, vėliau Prienų „Žiburio“ gimnazijoje, kur sukūrė savo pirmuosius kūrinius: parašė poemėles apie Vilniaus krašto išvadavimą iš Lenkų, apie jo kaimo draugų, partizanų, žūtį ir trečiąją mokyklos teatrui apie tuometinį gyvenimą. Iš šių trijų poemėlių, ne viena neišliko. 1948 m. su prokuratūra buvo pradėto mokinių tardymai dėl įtarimų, kad yra susidariusi mokinių grupė propaguojanti laisvės idėjas.
        <a href="./marcinkevicius.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();

    L.marker(taskas6, {icon: icon6}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/jvpaminklas.jpg">
        <p class="txtname">Judita Vaičiūnaitė</p>
        Judita Vaičiūnaitė (1937–2001) – poetė, „Poezijos pavasario“ laureatė, DLK Gedimino ordininkė. Iki septyniolikos metų gyveno Kaune, mirus tėvui išsikraustė į Vilnių, 1959 m. Vilniaus universitete baigė lituanistiką. Studijų metai Vaičiūnaitę suvedė su dviem geriausiais literatūriniais bičiuliais Aušra Sluckaite ir Tomu Venclova. Ji dirbo „Literatūros ir meno“, „Kalba Vilnius”, „Naujojo dienovidžio” redakcijose.
        <a href="./vaiciunaite.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();

    L.marker(taskas7, {icon: icon7}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/cmlaiptai.jpg">
        <p class="txtname">Česlovas Milošas</p>
        Česlovas Milošas (1944-2004) kilęs iš paskutinės Lietuvos Didžiosios Kunigaikštystės bajorų kartos. Būdamas dar mažas vaikas, prieš prasidedant I pasauliniam karui, su mama iškeliavo į Rusiją pas inžinieriumi dirbantį tėvą, ten praleido penkerius metus.
        <a href="./milosas.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();

    L.marker(taskas8, {icon: icon8}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/jipaminklas.jpg">
        <p class="txtname">Jurga Ivanauskaitė</p>
        Jurga Ivanauskaitė (1961–2007) –  prozininkė, eseistė, dramaturgė, poetė, dailininkė, fotografė. Populiariausia XX a., antrosios pusės lietuvių rašytoja. Gimė Vilniuje, mokėsi Vilniaus 22-ojoje vidurinėje mokykloje.  1978 m. paskelbė pirmuosius eilėraščius žurnale „Moksleivis“. 1980 m. baigė M. K. Čiurlionio vidurinę meno mokyklą, 1985 m. – grafikos studijas Vilniaus dailės akademijoje, tais pačiais metais išleido pirmąją novelių knygą „Pakalnučių metai“. 
        <a href="./ivanauskaite.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();
   
    L.marker(taskas9, {icon: icon9}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/vincaskudirkasklp.webp">
        <p class="txtname">Vincas Kudirka</p>
        Vincas Kudirka (1858-1899)- prozininkas, poetas, publicistas, vertėjas,
        vienas Tautinio sąjūdžio ideologų, įvertinęs socialinio kriticizmo tradiciją
        lietuvių kultūroje. Tėvo verčiamas 1877m. įstojo į kunigų seminariją, tačiau
        vėliau buvo pašalintas dėl pašaukimo stokos. Jis savo lėšomis pabaigė Marijampolės
        gimnaziją ir išvyko į Varšuvą studijuoti istorijos-filologijos. Dar būdamas studentu, 
        įkvėptas laikraščio „Aušra“, įsitraukė į tautinio atgimimo judėjimą.
        <a href="./kudirka.html">Skaityti daugiau</a></p>        
        ` )
        .openPopup();

    L.marker(taskas10, {icon: icon10}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/rgskulptura.jpg">
        <p class="txtname">Romenas Gari</p>
        1914 m. gegužės 8 d., Vilniaus mieste Leibos ir Minos Kacew šeimoje gimė sūnus Romenas. Deja, Romeno tėvų santuoka buvo nesėkminga, tad berniukas augo atskirai nuo tėvo. Jiedu su motina buvo apsistoję Pohulankos g. 16 (Jono Basanavičiaus g. 18), tuo tarpu tėvas jau su kita moterimi kūrė šeimą.
        <a href="./gary.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();

    L.marker(taskas11, {icon: icon11}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/ksportretas.jpg">
        <p class="txtname">Kristina Sabaliauskaitė</p>
        Kristina Sabaliauskaitė, gimusi 1974 m. sausio 1 d. Vilniuje – dailės istorikė, menotyros mokslų daktarė, rašytoja. K. Sabaliauskaitė kilusi iš senos vilniečių šeimos. Autorės senelis dar nemokančiai skaityti Kristinai pasakodavo Šventojo Rašto, Odisėjo istorijas, skaitydavo Nibelungų giesmę, graikų mitus, perpasakodavo klasikos kūrinių siužetus. Tokioje aplinkoje ir suformavo būsimos rašytojos asmenybė.
        <a href="./sabaliauskaite.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();

    L.marker(taskas12, {icon: icon12}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/jkportretas.jpg">
        <p class="txtname">Jurgis Kunčinas</p>
        Jurgis Kunčinas gimė 1947 m. sausio 13 d. Alytuje. Kartu su dar dviem broliais augo mokytojų šeimoje, mokėsi tuometinėje Alytaus 2-ojoje vidurinėje. Vilniaus universitete studijavo vokiečių kalbą, bet studijų nebaigė – buvo pašalintas iš ketvirto kurso. Dirbo pačius įvairiausius darbus: ligoninės sanitaru, kroviku, žurnalistu, bendrabučio auklėtoju, vertėju gamyklose ir įvairių leidinių redakcijose.
        <a href="./kuncinas.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();

    L.marker(taskas13, {icon: icon13}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/imatminimas.jpg">
        <p class="txtname">Icchoka Meras</p>
        Icchokas Meras, gimęs 1934 m. Kelmėje – prozininkas ir scenarijų autorius, diplomuotas radijo ir televizijos inžinierius. Vaikystėje per holokaustą neteko tėvų ir pats per stebuklą likęs gyvas buvo priglobtas ir užaugintas lietuvių šeimoje. Vaikystės išgyvenimai iš dalies atsispindi pirmojoje jo apsakymų knygoje Geltonas lopas, parašytoje 1960 m. Pirmosios Mero knygos: „Geltonas lopas“, „Lygiosios trunka akimirką“, „Žemė visada gyva“, „Ant ko laikosi pasaulis“, Lietuvoje buvo sutiktos gana santūriai. 
        <a href="./meras.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();

    L.marker(taskas14, {icon: icon14}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/tvportretas.jpg">
        <p class="txtname">Tomas Venclova</p>
        Tomas Venclova – vienas žymiausių XX a. antrosios pusės lietuvių poetų, eseistų ir literatūros kritikų. Gimė 1937 m. Klaipėdoje. Per karą tėvui pasitraukus į Rusiją, augo pas senelį, klasikinės filologijos profesorių Merkelį Račkauską. Nuo 1947 m. mokėsi Vilniaus 1-oje berniukų gimnazijoje. Šeštajame dešimtmetyje Vilniaus universitete studijavo antikines kalbas ir lituanistiką, vėliau ilgesnį laiką gyveno ir mokėsi Maskvoje, Peterburge, Tartu. 
        <a href="./venclova.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();

        L.marker(taskas15, {icon: icon15}).addTo(map)
        .bindPopup(`
        <p class="maptxt"> <img class="mapimg" src="./images/lg.jpg">
        <p class="txtname">Literatų gatvė</p>
        Literatų gatvė – viena seniausių gatvių Vilniaus senamiestyje, žinoma dėl sienų, papuoštų meno kūriniais, susijusiais su rašytojais ir poetais. Gatvė gavo savo dabartinį pavadinimą tik XX a. pradžioje dėl joje įsikūrusių spaustuvių, knygynų bei antikvariatų. Dar viena versija dėl Literatų gatvės pavadinimo kilmės yra susijusi su rašytoju Adomu Mickevičiumi. 
        <a href="./gatve.html">Skaityti daugiau</a></p>        
        `)
        .openPopup();
});