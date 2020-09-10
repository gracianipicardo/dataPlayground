google.charts.load('current', {
       'packages': ['geochart'],
       'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
     });
     google.charts.setOnLoadCallback(drawMarkersMap);

      function drawMarkersMap() {
      var data = google.visualization.arrayToDataTable([
        ['Latitude', 'Longitud', 'Place', 'No. of items'],
        [40.4,-3.6833,'Madrid',3853],
[41.3984,2.1741,'Barcelona',413],
[37.3772,-5.9869,'Sevilla',66],
[39.4667,-0.3667,'Valencia',48],
[41.6333,-0.8833,'Zaragoza',37],
[41.65,-4.7167,'Valladolid',12],
[43.2609,-2.9388,'Bilbao',8],
[36.5336,-6.2994,'Cádiz',8],
[36.7167,-4.4167,'Málaga',8],
[43.3167,-1.9833,'San Sebastián',7],
[37.8833,-4.7667,'Córdoba',5],
[37.9833,-1.1167,'Murcia',5],
[43.5411,-5.6644,'Gijón',4],
[37.1833,-3.6,'Granada',4],
[36.6833,-6.1333,'Jerez de la Frontera (Cádiz)',4],
[35.3167,-2.95,'Melilla',4],
[38.8833,-6.9667,'Badajoz',3],
[39.4833,-6.3667,'Cáceres',3],
[43.3667,-5.8333,'Oviedo',3],
[39.5667,2.65,'Palma de Mallorca',3],
[39.8667,-4.0167,'Toledo',3],
[40.4833,-3.3667,'Alcalá de Henares (Madrid)',2],
[37.6,-0.9833,'Cartagena (Murcia)',2],
[40.0667,-2.1333,'Cuenca',2],
[40.6333,-3.1667,'Guadalajara',2],
[37.2583,-6.9508,'Huelva',2],
[42.1387,-0.4094,'Huesca',2],
[42.4667,-2.45,'Logroño',2],
[41.7263,1.8258,'Manresa (Barcelona)',2],
[28.45,-16.2333,'Santa Cruz de Tenerife',2],
[43.4647,-3.8044,'Santander',2],
[40.8,0.5167,'Tortosa (Tarragona)',2],
[38.98335,-1.8,'Albacete',1],
[38.35,-0.4833,'Alicante',1],
[36.8333,-2.45,'Almería',1],
[40.0333,-3.6,'Aranjuez',1],
[37.9833,-3.4667,'Baeza (Jaén)',1],
[41.626,1.0114,'Bellpuig (Lérida)',1],
[43.4833,-8.2333,'El Ferrol',1],
[36.15,-5.35,'Gibraltar',1],
[42.569,-0.5499,'Jaca',1],
[37.7667,-3.7833,'Jaen',1],
[43.3667,-8.3833,'A Coruña',1],
[28.3333,-16.8333,'Las Palmas',1],
[41.6167,0.6222,'Lérida',1],
[38.0833,-3.6333,'Linares (Jaén)',1],
[43.5333,-6.5333,'Luarca (Asturias)',1],
[39.8833,4.25,'Mahón',1],
[38.9167,-6.3333,'Mérida (Badajoz)',1],
[37.4333,-4.1833,'Priego de Córdoba',1],
[40.9667,-5.65,'Salamanca',1],
[40.5833,-4.1167,'San Lorenzo del Escorial (Madrid)',1],
[28.6833,-17.75,'Santa Cruz de la Palma',1],
[41.7667,-2.4667,'Soria',1],
[39.2,-0.3167,'Sueca (Valencia)',1],
[40.0167,-3,'Tarancón (Cuenca)',1],
[41.1167,1.25,'Tarragona',1],
[40.45,-3.7,'Tetuán de Chamartín',1],
[37.35,-2.4333,'Tíjola (Almería)',1],
[42.2333,-8.7167,'Vigo',1]
      ]);

      var options = {
        region: 'ES',
        displayMode: 'markers',
        colorAxis: {colors: ['pink', 'blue']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    };
