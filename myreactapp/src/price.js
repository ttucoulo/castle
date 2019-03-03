const rp = require('request-promise');
const cheerio = require('cheerio');
var request = require('request');



exports.returnPrice =async function returnPrice(link){
const option = {
    uri: link,
    transform: function (body){
      return cheerio.load(body);
    }
  };
let price;
let $ = await rp(option);
if(String($(".priceTag").children().children().first().attr("class"))!="priceLabel"){
	price=$(".price").text();
}
else{
        price=0;
}
  return price;
}


