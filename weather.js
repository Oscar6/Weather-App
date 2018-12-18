$(function () {

    var url = 'https://api.openweathermap.org/data/2.5/forecast?zip=77627,us';
    var apiKey = '538b6b2c93c624e744e7589cec1a735d';
    var searchInput = document.getElementById("search-city");

    $.get(url + '&appid='  + apiKey)
        .done((result) => {
console.log(result)
            var celsius = result.main.temp - 273.15;

            console.log(celsius);

            var degCel = Math.floor(celsius);

            var degF = degCel * 1.8 + 32;

            var degF2 = Math.floor(degF);
            console.log(degF2);

            $('#temp').html(`${degF2}º`);
        })
});