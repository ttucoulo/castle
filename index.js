
var cheerio = require('cheerio');
var request = require('request');
var url = 'https://www.relaischateaux.com/fr/site-map/etablissements';

var Frenchlist = [{
    'restaurant': '',
    'chef': '',
    'hote': '',
  }];

request(url, function(err, resp, body) {
    var $ = cheerio.load(body);


    $("#countryF").each(function(i){
        console.log('pays : ', $(this).find("h3").text());
        console.log("iteration - ", i);

        if ($(this).find("h3").text() === 'France'){
            console.log("ok france");

            $(this).find("li").each(function(j){

                $(this).find("a").each(function(k){
			console.log($(this).attr("href"));
		})
            })
        }
    })
});



/*
if(k == 0){
    var elt = $("a:first");
    console.log(elt);
}

if(k == 1){
    Frenchlist[j].chef = $(this)('li').html();
}
if(k == 2){
    Frenchlist[j].Host = $(this)('li').html();
}*/
