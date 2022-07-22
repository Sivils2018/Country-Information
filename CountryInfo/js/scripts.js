/*!
* Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
//  

$("#submit").click(function getCountryName() {
    let country = false;
    $.ajax({
        url: "https://restcountries.com/v2/name/" + $("#countryName").val() + "?fullText=true",
        method: "GET",
        dataType: "json",
        data:{name: $("#countryName").val()},
    }).done(function(data){
        $("#countryC").text("Capitol: " + data[0].name);
        $("#countryCT").text("Country: " + data[0].capital);
        $("#countryCurC").text("Currency code: " + data[0].currencies[0].code);
        $("#countryCN").text("Currency name: " + data[0].currencies[0].name);
        $("#countryCS").text("Currency symbol: " + data[0].currencies[0].symbol);
        $("#countryPop").text("Current population: " + data[0].population);
        $("#countryFlag").attr({src:(data[0].flags.png)});
        country = true
    
    })
    if(country){

    }
    else{
        $("#countryC").text("Invalid Country")
        $("#countryCT").text("Capitol: ");
        $("#countryCurC").text("Currency code: ");
        $("#countryCN").text("Currency name: ");
        $("#countryCS").text("Currency symbol: ");
        $("#countryPop").text("Current population: ");
        $("#countryFlag").attr({src:("")})
    }
})
$("#capName").change(function getCapitalName(){
    $.ajax({
        url: "https://restcountries.com/v2/capital/" + $("#capName").val(),
        method: "GET",
        dataType: "json"
    }).done(function(data){
        $("#countryC").text("Capitol: " + data[0].name);
        $("#countryCT").text("Country: " + data[0].capital);
        $("#countryCurC").text("Currency code: " + data[0].currencies[0].code);
        $("#countryCN").text("Currency name: " + data[0].currencies[0].name);
        $("#countryCS").text("Currency symbol: " + data[0].currencies[0].symbol);
        $("#countryPop").text("Current population: " + data[0].population);
        $("#countryFlag").attr({src:(data[0].flags.png)});
    })

$("#capName").change(function (){
 $("#countryName").val(""); })

$("#countryName").change(function (){
    $("#capName").val("-------")
})

$("reset").onclick.reset()
});
