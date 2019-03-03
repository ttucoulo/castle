var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');
var url = 'https://www.relaischateaux.com/fr/site-map/etablissements';


request(url, function(err, resp, body) {
    var array=[];
    var $ = cheerio.load(body);
    $("#countryF").each(function(i){
        if ($(this).find("h3").text() === 'France'){
		var name="";
		var link="";
		var chef="";
		var price="0";
            $(this).find("li").each(function(j){
		name=$(this).children().first().filter("a").text().trim();
		link=$(this).children().first().filter("a").attr("href").trim();
		chef=$(this).children().first().next().filter("a").text().trim();
		request(link, function(err, resp, body) {
			if(String($(".priceTag").children().children().first().attr("class"))!="priceLabel"){
				price=$(".price").text();
			}
		});
		array.push({ "name": name,"chef": chef,"link":link, "restaurant ": "blabla" ,"price":price });
            })
        }
    }) 
	var arrayRestaurants=JSON.stringify(array);
	fs.writeFile("restaurantRelaisCheateaux.json",arrayRestaurants, function doneWriting(err){
		if(err) console.error(err);
	});
});


var json1 = require('./restaurantRelaisCheateaux.json');
var json2 = require('./michelinRestau.json'); 
var json3=[];
	for(var i=0;i<json1.length;i++){
		for(var j=0; j<json2.length; j++) {
			if(json1[i].name===json2[j].restaurant) {
				json3.push({"hotel Name ": json1[i].name,"hotel Price":json1[i].price,"Link for Reservation":json1[i].link})
		}

	}
}

//console.log(json3);
fs.writeFileSync("MixJson",JSON.stringify(json3));

