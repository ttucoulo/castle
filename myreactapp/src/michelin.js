var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');

var url = '';

url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin';

function max(a,b){
  if(parseInt(a).toString() === 'NaN' && parseInt(b).toString() === 'NaN'){
    return 0;
  }
  if(parseInt(a).toString() === 'NaN' && parseInt(b).toString() !== 'NaN'){
    return b;
  }
  if(parseInt(a).toString() !== 'NaN' && parseInt(b).toString() === 'NaN'){
    return a;
  }
  else{
    if (a > b){
      return a;
      }
      else
      {
      return b;
    }
  }
}

var p1 = new Promise(function(resolve, reject) {
request(url,function(err,resp,body){
  var $=cheerio.load(body);
  var page = -1;
  $(".mr-pager-item").each(function(i){
    if(max(page, $(this).text()) == parseInt($(this).text())){
      page = parseInt($(this).text());
    }
  })
  resolve(page);
});
});
p1.then((page)=>{
var array=[];
var urlparpage="";
for(var i = 1; i < page + 1; i++){
  urlparpage = url + '/page-'+ i.toString();

  request(urlparpage,function(err,resp,body){
    var $=cheerio.load(body);
    $(".poi_card-display-title").each(function(i){
	array.push({ "restaurant": $(this).text().trim()});
    })
	var restauMichelin=JSON.stringify(array);
	fs.writeFile("michelinRestau.json",restauMichelin, function doneWriting(err){
		if(err) console.error(err);
	});
    });
}
});



  
