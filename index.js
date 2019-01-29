
var cheerio = require('cheerio');
var request = require('request');
var url = 'https://www.relaischateaux.com/fr/site-map/etablissements';
var url1="https://restaurant.michelin.fr/magazine/les-restaurants-etoiles-du-guide-michelin-2019";
var Frenchlist = [{
    'restaurant': '',
    'chef': '',
    'hote': '',
  }];
/*
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

*/
request(url1,function(err,resp,body){
var $=cheerio.load(body);
console.log($(".field field--name-body field--type-text-with-summury field--label-hidden").children().children()._root.children());//.each(function(i){
//console.log(i);


//});
});
