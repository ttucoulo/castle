var cheerio = require('cheerio');
var request = require('request');

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
console.log(url);

var listeRestaurants = [{
    'restaurant': '',
    'isstarred': '', 
    'price': ''
}];

var p1 = new Promise(function(resolve, reject) {
request(url,function(err,resp,body){
  var $=cheerio.load(body);
  var page = -1;
  //on récupère le nom des restaurants d'une page
  $(".mr-pager-item").each(function(i){
    if(max(page, $(this).text()) == parseInt($(this).text())){
      page = parseInt($(this).text());
    }
    console.log('token retenu : ' + page);
  })
  resolve(page);
});
});
p1.then((page)=>{
for(var i = 1; i < page + 1; i++){
  var urlparpage = url + '/page-'+ i.toString();
  console.log(urlparpage);

  request(urlparpage,function(err,resp,body){
    var $=cheerio.load(body);

    //on récupère le nom des restaurants d'une page
    $(".poi_card-display-title").each(function(i){

      console.log('restaurant numero : ', i + 1);
      console.log($(this).text(), '\n \n');
    })
    });
}
});



  
