var cheerio = require('cheerio');
var request = require('request');
var url = 'https://www.relaischateaux.com/fr/site-map/etablissements';


request(url, function(err, resp, body) {
    var array=[];
    var $ = cheerio.load(body);
    $("#countryF").each(function(i){
        if ($(this).find("h3").text() === 'France'){
            $(this).find("li").each(function(j){
                $(this).find("a").each(function(k){
			if(k==0){
				array.push($(this).filter("a").text().trim());
				//console.log($(this).filter("a").text().trim());
				console.log($(this).attr("href"));
			}
		})
            })
        }
    }) 
});




