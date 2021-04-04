// var cool = require ("cool-ascii-faces");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const { DefaultDeserializer } = require("v8");

var app = express();
var PORT = (process.env.PORT || 10000);
var BASE_API_PATH = "/api/v1";

// app.get("/cool",(request,response) => {
// 	response.send(cool());
// 	console.log("New request to /cool hasta arrived");
// });

app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "public")));


var sales = [
		{"location":"andalusia","year":"2019","sales-total":"109275","sales-protected-housing":"5806","sales-new":"9165","sales-secondhand":"98636"},
		{"location":"aragon","year":"2019","sales-total":"15365","sales-protected-housing":"369","sales-new":"1816","sales-secondhand":"13459"},
		{"location":"principality of asturias","year":"2019","sales-total":"10120","sales-protected-housing":"693","sales-new":"657","sales-secondhand":"9333"},
		{"location":"balearic islands","year":"2019","sales-total":"15692","sales-protected-housing":"111","sales-new":"1301","sales-secondhand":"14388"},
		{"location":"canary islands","year":"2019","sales-total":"24630","sales-protected-housing":"945","sales-new":"1670","sales-secondhand":"22886"},
		{"location":"cantabria","year":"2019","sales-total":"7250","sales-protected-housing":"240","sales-new":"742","sales-secondhand":"6435"},
		{"location":"castilla-la mancha","year":"2019","sales-total":"24082","sales-protected-housing":"907","sales-new":"1988","sales-secondhand":"21882"},
		{"location":"castile and leon","year":"2019","sales-total":"25852","sales-protected-housing":"1130","sales-new":"1712","sales-secondhand":"23825"},
		{"location":"catalonia","year":"2019","sales-total":"89237","sales-protected-housing":"1647","sales-new":"6455","sales-secondhand":"82341"},
		{"location":"valencian community","year":"2019","sales-total":"84737","sales-protected-housing":"4097","sales-new":"7688","sales-secondhand":"76815"},
		{"location":"extremadura","year":"2019","sales-total":"9686","sales-protected-housing":"765","sales-new":"360","sales-secondhand":"9213"},
		{"location":"galicia","year":"2019","sales-total":"20462","sales-protected-housing":"487","sales-new":"1828","sales-secondhand":"18560"},
		{"location":"community of madrid","year":"2019","sales-total":"78634","sales-protected-housing":"3628","sales-new":"9211","sales-secondhand":"68036"},
		{"location":"region of murcia","year":"2019","sales-total":"19296","sales-protected-housing":"536","sales-new":"1551","sales-secondhand":"17723"},
		{"location":"community of navarre","year":"2019","sales-total":"6521","sales-protected-housing":"323","sales-new":"1114","sales-secondhand":"5271"},
		{"location":"basque country","year":"2019","sales-total":"23644","sales-protected-housing":"1367","sales-new":"3059","sales-secondhand":"19870"},
		{"location":"la rioja","year":"2019","sales-total":"4292","sales-protected-housing":"279","sales-new":"277","sales-secondhand":"3991"},
		{"location":"ceuta","year":"2019","sales-total":"1218","sales-protected-housing":"71","sales-new":"129","sales-secondhand":"1043"},
		{"location":"andalusia","year":"2018","sales-total":"110425","sales-protected-housing":"5575","sales-new":"9065","sales-secondhand":"100435"},
		{"location":"aragon","year":"2018","sales-total":"15499","sales-protected-housing":"409","sales-new":"1882","sales-secondhand":"13515"},
		{"location":"principality of asturias","year":"2018","sales-total":"10186","sales-protected-housing":"707","sales-new":"823","sales-secondhand":"9194"},
		{"location":"balearic islands","year":"2018","sales-total":"17466","sales-protected-housing":"122","sales-new":"1160","sales-secondhand":"16302"},
		{"location":"canary islands","year":"2018","sales-total":"25269","sales-protected-housing":"525","sales-new":"1519","sales-secondhand":"23703"},
		{"location":"cantabria","year":"2018","sales-total":"7072","sales-protected-housing":"222","sales-new":"787","sales-secondhand":"6226"},
		{"location":"castilla-la mancha","year":"2018","sales-total":"23626","sales-protected-housing":"1071","sales-new":"2127","sales-secondhand":"21222"},
		{"location":"castile and leon","year":"2018","sales-total":"25957","sales-protected-housing":"1059","sales-new":"1581","sales-secondhand":"24071"},
		{"location":"catalonia","year":"2018","sales-total":"89685","sales-protected-housing":"1731","sales-new":"6647","sales-secondhand":"82596"},
		{"location":"valencian community","year":"2018","sales-total":"88792","sales-protected-housing":"4128","sales-new":"7270","sales-secondhand":"81061"},
		{"location":"extremadura","year":"2018","sales-total":"9280","sales-protected-housing":"813","sales-new":"334","sales-secondhand":"8800"},
		{"location":"galicia","year":"2018","sales-total":"19786","sales-protected-housing":"527","sales-new":"1912","sales-secondhand":"17805"},
		{"location":"community of madrid","year":"2018","sales-total":"85294","sales-protected-housing":"3940","sales-new":"9451","sales-secondhand":"74574"},
		{"location":"region of murcia","year":"2018","sales-total":"18213","sales-protected-housing":"508","sales-new":"1494","sales-secondhand":"16656"},
		{"location":"community of navarre","year":"2018","sales-total":"7156","sales-protected-housing":"596","sales-new":"1439","sales-secondhand":"5367"},
		{"location":"basque country","year":"2018","sales-total":"23166","sales-protected-housing":"1409","sales-new":"2835","sales-secondhand":"19781"},
		{"location":"la rioja","year":"2018","sales-total":"4659","sales-protected-housing":"304","sales-new":"430","sales-secondhand":"4139"},
		{"location":"ceuta","year":"2018","sales-total":"1357","sales-protected-housing":"252","sales-new":"181","sales-secondhand":"963"},
		{"location":"andalusia","year":"2017","sales-total":"96440","sales-protected-housing":"4703","sales-new":"6615","sales-secondhand":"89004"},
		{"location":"aragon","year":"2017","sales-total":"13988","sales-protected-housing":"573","sales-new":"1469","sales-secondhand":"12291"},
		{"location":"principality of asturias","year":"2017","sales-total":"9216","sales-protected-housing":"739","sales-new":"869","sales-secondhand":"8133"},
		{"location":"balearic islands","year":"2017","sales-total":"18390","sales-protected-housing":"127","sales-new":"1435","sales-secondhand":"16947"},
		{"location":"canary islands","year":"2017","sales-total":"25868","sales-protected-housing":"572","sales-new":"1548","sales-secondhand":"24207"},
		{"location":"cantabria","year":"2017","sales-total":"6638","sales-protected-housing":"223","sales-new":"695","sales-secondhand":"5874"},
		{"location":"castilla-la mancha","year":"2017","sales-total":"20642","sales-protected-housing":"1039","sales-new":"2684","sales-secondhand":"17653"},
		{"location":"castile and leon","year":"2017","sales-total":"22890","sales-protected-housing":"1228","sales-new":"1461","sales-secondhand":"21025"},
		{"location":"catalonia","year":"2017","sales-total":"85567","sales-protected-housing":"1747","sales-new":"5729","sales-secondhand":"79236"},
		{"location":"valencian community","year":"2017","sales-total":"79132","sales-protected-housing":"3515","sales-new":"7171","sales-secondhand":"71674"},
		{"location":"extremadura","year":"2017","sales-total":"8090","sales-protected-housing":"962","sales-new":"302","sales-secondhand":"7544"},
		{"location":"galicia","year":"2017","sales-total":"17555","sales-protected-housing":"546","sales-new":"1888","sales-secondhand":"15524"},
		{"location":"community of madrid","year":"2017","sales-total":"80613","sales-protected-housing":"4013","sales-new":"7755","sales-secondhand":"71738"},
		{"location":"region of murcia","year":"2017","sales-total":"15447","sales-protected-housing":"491","sales-new":"1372","sales-secondhand":"14005"},
		{"location":"community of navarre","year":"2017","sales-total":"6040","sales-protected-housing":"450","sales-new":"1132","sales-secondhand":"4734"},
		{"location":"basque country","year":"2017","sales-total":"20909","sales-protected-housing":"1168","sales-new":"2325","sales-secondhand":"17994"},
		{"location":"la rioja","year":"2017","sales-total":"3748","sales-protected-housing":"262","sales-new":"258","sales-secondhand":"3415"},
		{"location":"ceuta","year":"2017","sales-total":"1088","sales-protected-housing":"56","sales-new":"207","sales-secondhand":"866"},
		{"location":"andalusia","year":"2016","sales-total":"83508","sales-protected-housing":"4612","sales-new":"6315","sales-secondhand":"76094"},
		{"location":"aragon","year":"2016","sales-total":"11688","sales-protected-housing":"712","sales-new":"1356","sales-secondhand":"9966"},
		{"location":"principality of asturias","year":"2016","sales-total":"7602","sales-protected-housing":"524","sales-new":"605","sales-secondhand":"6919"},
		{"location":"balearic islands","year":"2016","sales-total":"15882","sales-protected-housing":"101","sales-new":"1350","sales-secondhand":"14525"},
		{"location":"canary islands","year":"2016","sales-total":"22283","sales-protected-housing":"507","sales-new":"1419","sales-secondhand":"20735"},
		{"location":"cantabria","year":"2016","sales-total":"5250","sales-protected-housing":"240","sales-new":"626","sales-secondhand":"4523"},
		{"location":"castilla-la mancha","year":"2016","sales-total":"16265","sales-protected-housing":"871","sales-new":"1943","sales-secondhand":"14049"},
		{"location":"castile and leon","year":"2016","sales-total":"20509","sales-protected-housing":"1156","sales-new":"1491","sales-secondhand":"18612"},
		{"location":"catalonia","year":"2016","sales-total":"75152","sales-protected-housing":"1378","sales-new":"4888","sales-secondhand":"69837"},
		{"location":"valencian community","year":"2016","sales-total":"67820","sales-protected-housing":"2882","sales-new":"6535","sales-secondhand":"60925"},
		{"location":"extremadura","year":"2016","sales-total":"7197","sales-protected-housing":"926","sales-new":"303","sales-secondhand":"6623"},
		{"location":"galicia","year":"2016","sales-total":"15604","sales-protected-housing":"634","sales-new":"2133","sales-secondhand":"13264"},
		{"location":"community of madrid","year":"2016","sales-total":"67366","sales-protected-housing":"3830","sales-new":"6104","sales-secondhand":"59755"},
		{"location":"region of murcia","year":"2016","sales-total":"13638","sales-protected-housing":"414","sales-new":"1702","sales-secondhand":"11882"},
		{"location":"community of navarre","year":"2016","sales-total":"4946","sales-protected-housing":"302","sales-new":"850","sales-secondhand":"3992"},
		{"location":"basque country","year":"2016","sales-total":"18730","sales-protected-housing":"1733","sales-new":"2532","sales-secondhand":"15075"},
		{"location":"la rioja","year":"2016","sales-total":"3255","sales-protected-housing":"308","sales-new":"232","sales-secondhand":"2992"},
		{"location":"ceuta","year":"2016","sales-total":"1043","sales-protected-housing":"34","sales-new":"180","sales-secondhand":"856"},
		{"location":"andalusia","year":"2015","sales-total":"76743","sales-protected-housing":"3885","sales-new":"8238","sales-secondhand":"67443"},
		{"location":"aragon","year":"2015","sales-total":"11317","sales-protected-housing":"343","sales-new":"1466","sales-secondhand":"9749"},
		{"location":"principality of asturias","year":"2015","sales-total":"6516","sales-protected-housing":"537","sales-new":"554","sales-secondhand":"5865"},
		{"location":"balearic islands","year":"2015","sales-total":"12952","sales-protected-housing":"61","sales-new":"1336","sales-secondhand":"11608"},
		{"location":"canary islands","year":"2015","sales-total":"19846","sales-protected-housing":"440","sales-new":"1850","sales-secondhand":"17896"},
		{"location":"cantabria","year":"2015","sales-total":"4660","sales-protected-housing":"163","sales-new":"672","sales-secondhand":"3929"},
		{"location":"castilla-la mancha","year":"2015","sales-total":"14288","sales-protected-housing":"1058","sales-new":"1624","sales-secondhand":"12180"},
		{"location":"castile and leon","year":"2015","sales-total":"18306","sales-protected-housing":"1174","sales-new":"1525","sales-secondhand":"16248"},
		{"location":"catalonia","year":"2015","sales-total":"61108","sales-protected-housing":"1162","sales-new":"4747","sales-secondhand":"55981"},
		{"location":"valencian community","year":"2015","sales-total":"59605","sales-protected-housing":"2123","sales-new":"6760","sales-secondhand":"52644"},
		{"location":"extremadura","year":"2015","sales-total":"6323","sales-protected-housing":"788","sales-new":"450","sales-secondhand":"5556"},
		{"location":"galicia","year":"2015","sales-total":"14633","sales-protected-housing":"525","sales-new":"2663","sales-secondhand":"11794"},
		{"location":"community of madrid","year":"2015","sales-total":"57431","sales-protected-housing":"3255","sales-new":"5244","sales-secondhand":"50611"},
		{"location":"region of murcia","year":"2015","sales-total":"12788","sales-protected-housing":"380","sales-new":"1404","sales-secondhand":"11336"},
		{"location":"community of navarre","year":"2015","sales-total":"4533","sales-protected-housing":"443","sales-new":"644","sales-secondhand":"3559"},
		{"location":"basque country","year":"2015","sales-total":"16568","sales-protected-housing":"2033","sales-new":"2365","sales-secondhand":"12688"},
		{"location":"la rioja","year":"2015","sales-total":"3124","sales-protected-housing":"206","sales-new":"321","sales-secondhand":"2759"},
		{"location":"ceuta","year":"2015","sales-total":"972","sales-protected-housing":"30","sales-new":"209","sales-secondhand":"755"}
];
//carga inicial de datos
app.get(BASE_API_PATH + "/sales/loadInitialData", (req, res) => {
	//res.send(JSON.stringify(sales));
	console.log(`Loaded initial data: ${JSON.stringify(sales)}`);
	return res.sendStatus(200);
});

//GET a la lista de recursos
app.get(BASE_API_PATH + "/sales", (req, res) => {
	if (sales.length !=0) {
		console.log(`Request sales`);
		return res.send(JSON.stringify(sales));
	}
	else {
		console.log("No data found");
		return res.sendStatus(404);	
	}
});
//POST a la lista de recursos
app.post(BASE_API_PATH + "/sales", (req, res) => {
	var newSales = req.body;
	var location = req.body.location;
	var year = parseInt(req.body.year);

	//con datos
	if (sales.length != 0){
		for (var status of sales){
			if (status.location == location && status.year == year){
				console.log (`Location ${location} and Year ${year} are already in the database`);
				return res.sendStatus(403);
			}
		}
		if (!newSales.location ||
			!newSales.year ||
			!newSales['sales-total'] ||
			!newSales['sales-protected-housing'] ||
			!newSales['sales-new'] ||
			!newSales['sales-secondhand']){
				console.log(`Number of parameters is incorrect`);
				return res.sendStatus(400);
			}
			/*else if (newSales['sales-total'] != (/^([0-9])*$/) ||
			newSales['sales-protected-housing']!=/^([0-9])*$/ ||
			newSales['sales-new']!=/^([0-9])*$/ ||
			newSales['sales-secondhand']!=/^([0-9])*$/){
				console.log(`Only numbers are allowed`);
				console.log(`${newSales['sales-total']}`);
				console.log(`${newSales['sales-protected-housing']}`);
				console.log(`${newSales['sales-new']}`);
				console.log(`${newSales['sales-secondhand']}`);
				return res.sendStatus(400);
			}*/
		
		console.log(`new sales to be added: <${JSON.stringify(newSales, null, 2)}>`);
		sales.push(newSales);
		return res.sendStatus(201);
	}
	//sin datos
	else if (!newSales.location ||
		!newSales.year ||
		!newSales['sales-total'] ||
		!newSales['sales-protected-housing'] ||
		!newSales['sales-new'] ||
		!newSales['sales-secondhand']){
			console.log(`Number of parameters is incorrect`);
			return res.sendStatus(400);
		}
	else {
		console.log(`new sales to be added: <${JSON.stringify(newSales, null, 2)}>`);
		sales.push(newSales);
		return res.sendStatus(201);
	}
});
//GET a un recurso
app.get(BASE_API_PATH + "/sales/:location/:year", (req, res) => {
	var location = req.params.location;
	var year = parseInt(req.params.year);

	console.log(`get data by location: ${location} and year ${year}`);
	for (var status of sales){
		if (status.location == location && status.year == year){
			return res.status(200).json(status);
		}
	}
	console.log (`Data not found`);
	return res.sendStatus(404);
});

//DELETE a un recurso
app.delete(BASE_API_PATH + "/sales/:location/:year", (req,res) => {
	var location = req.params.location;
	var year = parseInt(req.params.year);
	
	if (sales.length!=0){
		for (var i=0; i<sales.length;i++){
			if(sales[i]["location"]==location && sales[i]["year"]==year){
				console.log (`DELETE location ${location} and year ${year}`);
				sales.splice(i,1)
				return res.sendStatus(200);
			} 
		}
		console.log (`No data found`);
		return res.sendStatus(404);
	}
	else {
		console.log (`Database is empty`);
		return res.sendStatus(404);
	}

}); 

//PUT a un recurso
app.put(BASE_API_PATH + "/sales/:location/:year", (req,res) => {
	var location = req.params.location;
	var year = parseInt(req.params.year);
	var newSales = req.body;

	console.log(`Edit ${newSales.location} Selected ${location}`);
	console.log(`Edit ${newSales.year} Selected ${year}`);

	if (sales.length == 0){
		console.log (`Database is empty`);
		return res.sendStatus(404);
	}
	else {
		if (!newSales.location ||
			!newSales.year ||
			!newSales['sales-total'] ||
			!newSales['sales-protected-housing'] ||
			!newSales['sales-new'] ||
			!newSales['sales-secondhand']){
				console.log(`Number of parameters is incorrect`);
				return res.sendStatus(400);
			}
		else{
			for (var i=0; i<sales.length; i++){
				if (sales[i]["location"]==location && sales[i]["year"]==year){
					sales[i] = newSales;
					console.log(`PUT success`);
					return res.sendStatus(200);
				}
			}
		}
	}
	console.log(`Data not found`);
	return res.sendStatus(404);           

});

//POST a un recurso
app.post(BASE_API_PATH + "/sales/:location/:year", (req,res) => {
	console.log ("Unable to POST to a specific resource");
	return res.sendStatus(405);
});
//PUT a una lista de recursos
app.put(BASE_API_PATH + "/sales", (req,res) => {
	console.log("Unable to PUT to a list of resources");
	return res.sendStatus(405);
  });
  
  //DELETE a una lista de recursos
  app.delete(BASE_API_PATH + "/sales", (req,res) => {
	  if (sales.length==0){
		  console.log("Array is empty");
		  return res.sendStatus(404);
	  }
	  else{
		sales = [];
		console.log("DELETE sales success");
		return res.sendStatus(200);
	  }
  });

var evictions = [];

var rentals =
	[
		{ "location": "andalusia", "year": "2019", "price-square-meter": "8.5", "annual-variation": "7", "all-time-high": "9.5", "max-variation": "-9.9" },
		{ "location": "aragon", "year": "2019", "price-square-meter": "7.8", "annual-variation": "9.1", "all-time-high": "8.2", "max-variation": "-4" },
		{ "location": "principality of asturias", "year": "2019", "price-square-meter": "7.2", "annual-variation": "4.6", "all-time-high": "10.8", "max-variation": "-33.2" },
		{ "location": "balearic islands", "year": "2019", "price-square-meter": "12.6", "annual-variation": "2", "all-time-high": "14", "max-variation": "-9.6" },
		{ "location": "canary islands", "year": "2019", "price-square-meter": "10", "annual-variation": "3.3", "all-time-high": "10.3", "max-variation": "-2.7" },
		{ "location": "cantabria", "year": "2019", "price-square-meter": "7.6", "annual-variation": "4.3", "all-time-high": "12.7", "max-variation": "-40.2" },
		{ "location": "castile and leon", "year": "2019", "price-square-meter": "6.5", "annual-variation": "5.8", "all-time-high": "7", "max-variation": "-7.7" },
		{ "location": "castilla-la mancha", "year": "2019", "price-square-meter": "5.4", "annual-variation": "6.6", "all-time-high": "5.8", "max-variation": "-6.6" },
		{ "location": "catalonia", "year": "2019", "price-square-meter": "14.2", "annual-variation": "4.4", "all-time-high": "15.2", "max-variation": "-6.8" },
		{ "location": "valencian community", "year": "2019", "price-square-meter": "7.5", "annual-variation": "7.4", "all-time-high": "9.4", "max-variation": "-19.9" },
		{ "location": "basque country", "year": "2019", "price-square-meter": "11.9", "annual-variation": "5.1", "all-time-high": "12.3", "max-variation": "-3.9" },
		{ "location": "extremadura", "year": "2019", "price-square-meter": "5", "annual-variation": "5.3", "all-time-high": "5.4", "max-variation": "-6.5" },
		{ "location": "galicia", "year": "2019", "price-square-meter": "6.6", "annual-variation": "0.7", "all-time-high": "8.7", "max-variation": "-24.8" },
		{ "location": "la rioja", "year": "2019", "price-square-meter": "6.5", "annual-variation": "8.7", "all-time-high": "6.8", "max-variation": "-4.2" },
		{ "location": "community of madrid", "year": "2019", "price-square-meter": "14.7", "annual-variation": "3.6", "all-time-high": "15.4", "max-variation": "-4" },
		{ "location": "melilla", "year": "2019", "price-square-meter": "8.4", "annual-variation": "-0.6", "all-time-high": "9.5", "max-variation": "-11.3" },
		{ "location": "region of murcia", "year": "2019", "price-square-meter": "6.1", "annual-variation": "7.5", "all-time-high": "7.1", "max-variation": "-13.9" },
		{ "location": "community of navarre", "year": "2019", "price-square-meter": "8.5", "annual-variation": "10.6", "all-time-high": "8.8", "max-variation": "-3.4" },
		{ "location": "andalusia", "year": "2018", "price-square-meter": "8", "annual-variation": "96", "all-time-high": "9.5", "max-variation": "-15.7" },
		{ "location": "aragon", "year": "2018", "price-square-meter": "7.2", "annual-variation": "6.6", "all-time-high": "8.2", "max-variation": "-12" },
		{ "location": "principality of asturias", "year": "2018", "price-square-meter": "6.9", "annual-variation": "3.9", "all-time-high": "10.8", "max-variation": "-36.1" },
		{ "location": "balearic islands", "year": "2018", "price-square-meter": "12.4", "annual-variation": "4.2", "all-time-high": "14", "max-variation": "-11.4" },
		{ "location": "canary islands", "year": "2018", "price-square-meter": "9.7", "annual-variation": "10.8", "all-time-high": "10.3", "max-variation": "-5.9" },
		{ "location": "cantabria", "year": "2018", "price-square-meter": "7.3", "annual-variation": "7.7", "all-time-high": "12.7", "max-variation": "-42.6" },
		{ "location": "castile and leon", "year": "2018", "price-square-meter": "6.1", "annual-variation": "6.1", "all-time-high": "7", "max-variation": "-12.8" },
		{ "location": "castilla-la mancha", "year": "2018", "price-square-meter": "5.1", "annual-variation": "6.6", "all-time-high": "5.8", "max-variation": "-12.4" },
		{ "location": "catalonia", "year": "2018", "price-square-meter": "13.6", "annual-variation": "-0.5", "all-time-high": "15.2", "max-variation": "-10.8" },
		{ "location": "valencian community", "year": "2018", "price-square-meter": "7", "annual-variation": "7.2", "all-time-high": "9.4", "max-variation": "-25.4" },
		{ "location": "basque country", "year": "2018", "price-square-meter": "11.3", "annual-variation": "3.5", "all-time-high": "12.3", "max-variation": "-8.5" },
		{ "location": "extremadura", "year": "2018", "price-square-meter": "4.8", "annual-variation": "0.4", "all-time-high": "5.4", "max-variation": "-11.2" },
		{ "location": "galicia", "year": "2018", "price-square-meter": "6.1", "annual-variation": "5.5", "all-time-high": "8.7", "max-variation": "-29.7" },
		{ "location": "la rioja", "year": "2018", "price-square-meter": "6", "annual-variation": "0.9", "all-time-high": "6.8", "max-variation": "-11.9" },
		{ "location": "community of madrid", "year": "2018", "price-square-meter": "14.2", "annual-variation": "9.6", "all-time-high": "15.4", "max-variation": "-7.3" },
		{ "location": "melilla", "year": "2018", "price-square-meter": "8.5", "annual-variation": "-2", "all-time-high": "9.5", "max-variation": "-10.8" },
		{ "location": "region of murcia", "year": "2018", "price-square-meter": "5.7", "annual-variation": "7.1", "all-time-high": "7.1", "max-variation": "-19.9" },
		{ "location": "community of navarre", "year": "2018", "price-square-meter": "7.7", "annual-variation": "10.9", "all-time-high": "8.8", "max-variation": "-12.6" },
		{ "location": "andalusia", "year": "2017", "price-square-meter": "7.3", "annual-variation": "11.2", "all-time-high": "9.5", "max-variation": "-23.1" },
		{ "location": "aragon", "year": "2016", "price-square-meter": "6.7", "annual-variation": "5.6", "all-time-high": "8.2", "max-variation": "-17.5" },
		{ "location": "principality of asturias", "year": "2016", "price-square-meter": "6.6", "annual-variation": "5.6", "all-time-high": "10.8", "max-variation": "-38.5" },
		{ "location": "balearic islands", "year": "2016", "price-square-meter": "11.9", "annual-variation": "16.8", "all-time-high": "14", "max-variation": "-14.9" },
		{ "location": "canary islands", "year": "2016", "price-square-meter": "8.7", "annual-variation": "19.8", "all-time-high": "10.3", "max-variation": "-15" },
		{ "location": "cantabria", "year": "2016", "price-square-meter": "6.8", "annual-variation": "3.4", "all-time-high": "12.7", "max-variation": "-46.7" },
		{ "location": "castile and leon", "year": "2016", "price-square-meter": "5.8", "annual-variation": "5.9", "all-time-high": "7", "max-variation": "-17.8" },
		{ "location": "castilla-la mancha", "year": "2016", "price-square-meter": "4.8", "annual-variation": "4.8", "all-time-high": "5.8", "max-variation": "-17.8" },
		{ "location": "catalonia", "year": "2016", "price-square-meter": "13.7", "annual-variation": "13.4", "all-time-high": "15.2", "max-variation": "-10.3" },
		{ "location": "valencian community", "year": "2016", "price-square-meter": "6.5", "annual-variation": "10.9", "all-time-high": "9.4", "max-variation": "-30.4" },
		{ "location": "basque country", "year": "2016", "price-square-meter": "10.9", "annual-variation": "6.4", "all-time-high": "12.3", "max-variation": "-11.6" },
		{ "location": "extremadura", "year": "2016", "price-square-meter": "4.8", "annual-variation": "5", "all-time-high": "5.4", "max-variation": "-11.6" },
		{ "location": "galicia", "year": "2016", "price-square-meter": "5.8", "annual-variation": "4.8", "all-time-high": "8.7", "max-variation": "-33.3" },
		{ "location": "la rioja", "year": "2016", "price-square-meter": "5.5", "annual-variation": "5.7", "all-time-high": "6.8", "max-variation": "-19.2" },
		{ "location": "community of madrid", "year": "2016", "price-square-meter": "13", "annual-variation": "10.6", "all-time-high": "15.4", "max-variation": "-15.5" },
		{ "location": "melilla", "year": "2016", "price-square-meter": "8.7", "annual-variation": "7", "all-time-high": "9.5", "max-variation": "-9" },
		{ "location": "region of murcia", "year": "2016", "price-square-meter": "5.3", "annual-variation": "7.9", "all-time-high": "7.1", "max-variation": "-25.2" },
		{ "location": "community of navarre", "year": "2016", "price-square-meter": "6.9", "annual-variation": "6.9", "all-time-high": "8.8", "max-variation": "-21.2" },
		{ "location": "andalusia", "year": "2015", "price-square-meter": "6.5", "annual-variation": "6", "all-time-high": "9.5", "max-variation": "-30.8" },
		{ "location": "aragon", "year": "2015", "price-square-meter": "6.4", "annual-variation": "5.5", "all-time-high": "8.2", "max-variation": "-21.8" },
		{ "location": "principality of asturias", "year": "2015", "price-square-meter": "6.3", "annual-variation": "5", "all-time-high": "10.8", "max-variation": "-41.8" },
		{ "location": "balearic islands", "year": "2015", "price-square-meter": "10.2", "annual-variation": "23.8", "all-time-high": "14", "max-variation": "-27.2" },
		{ "location": "canary islands", "year": "2015", "price-square-meter": "7.3", "annual-variation": "6.2", "all-time-high": "10.3", "max-variation": "-29" },
		{ "location": "cantabria", "year": "2015", "price-square-meter": "6.6", "annual-variation": "6.8", "all-time-high": "12.7", "max-variation": "-48.5" },
		{ "location": "castile and leon", "year": "2015", "price-square-meter": "5.4", "annual-variation": "4", "all-time-high": "7", "max-variation": "-22.4" },
		{ "location": "castilla-la mancha", "year": "2015", "price-square-meter": "4.5", "annual-variation": "2", "all-time-high": "5.8", "max-variation": "-21.6" },
		{ "location": "catalonia", "year": "2015", "price-square-meter": "12", "annual-variation": "19.9", "all-time-high": "15.2", "max-variation": "-20.9" },
		{ "location": "valencian community", "year": "2015", "price-square-meter": "5.9", "annual-variation": "9.5", "all-time-high": "9.4", "max-variation": "-37.3" },
		{ "location": "basque country", "year": "2015", "price-square-meter": "10.3", "annual-variation": "5", "all-time-high": "12.3", "max-variation": "-16.9" },
		{ "location": "extremadura", "year": "2015", "price-square-meter": "4.5", "annual-variation": "6.8", "all-time-high": "5.4", "max-variation": "-15.8" },
		{ "location": "galicia", "year": "2015", "price-square-meter": "5.6", "annual-variation": "2.7", "all-time-high": "8.7", "max-variation": "-36.4" },
		{ "location": "la rioja", "year": "2015", "price-square-meter": "5.2", "annual-variation": "3.3", "all-time-high": "6.8", "max-variation": "-23.6" },
		{ "location": "community of madrid", "year": "2015", "price-square-meter": "11.7", "annual-variation": "9.6", "all-time-high": "15.4", "max-variation": "-23.6" },
		{ "location": "melilla", "year": "2015", "price-square-meter": "8.1", "annual-variation": "-3.3", "all-time-high": "9.5", "max-variation": "-15" },
		{ "location": "region of murcia", "year": "2015", "price-square-meter": "4.9", "annual-variation": "1", "all-time-high": "7.1", "max-variation": "-30.7" },
		{ "location": "community of navarre", "year": "2015", "price-square-meter": "6.5", "annual-variation": "2.8", "all-time-high": "8.8", "max-variation": "-26.3" }
	];

app.get(BASE_API_PATH + "/rentals", (req, res) => {
	res.send(JSON.stringify(rentals));
});

app.post(BASE_API_PATH + "/rentals", (req, res) => {
	var newRentals = req.params;
	console.log(`new rentals to be added: <${JSON.stringify(newRentals, null, 2)}>`);

	contacts.push(newRentals);
	res.status(201);
});

app.get("/info/rentals", (req, res) => {
	res.send(`<!DOCTYPE html>
	<html lang="es">
	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- <link rel="stylesheet" href="style.css"> -->
		<link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet">
		<title>Rentals</title>
	</head>
	
	<body>
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
	
			body {
				font-family: 'Poppins', sans-serif;
				color: rgb(226, 226, 226);
				background: #e2e2e2;
			}
	
			a {
				text-decoration: none;
				color: #e2e2e2;
				transition: 0.2s ease-in-out;
			}
	
			a:hover {
				color: #fdfd96;
	
			}
	
			p {
				font-size: 16px;
				line-height: 20px;
			}
	
			h1,
			h2,
			h3,
			b {
				padding: 5px;
				color: #fdfd96;
			}
	
			.main {
				margin: auto;
				padding: 15px;
				display: grid;
				grid-template-columns: 1fr;
				width: 80%;
			}
	
			.container {
				padding: 30px;
				background: #191919;
				margin-top: 50px;
				border-radius: 5px;
				-webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
				-moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	
			}
	
			.team,
			.description,
			.api {
				margin: 15px;
				padding: 15px;
			}
	
			/* TABLE STYLE */
	
			table {
				background: #191919;
				font-size: 12px;
				margin: 45px;
				width: 90%;
				text-align: left;
				border-collapse: collapse;
			}
	
			th {
				font-size: 16px;
				font-weight: bold;
				padding: 8px;
				border-top: 4px solid #242323;
				border-bottom: 4px solid #242323;
				color: #fdfd96;
			}
	
			td {
				padding: 8px;
				border-bottom: 4px solid #242323;
				color: #e2e2e2;
				border-top: 1px solid transparent;
				transition: 0.2s ease-in-out;
			}
	
			tr:hover td {
				background: #242323;
				color: #fdfd96;
			}
		</style>
		<div class="main">
			<div class="container">
				<p>Alquileres de pisos: comunidad, año, precio por metro cuadrado, porcentaje de variación anual de precio, máximo histórico de precio del metro cuadrado, y variación del precio máximo</p>
				<table>
					<thead>
						<tr>
							<th>location</th>
							<th>year</th>
							<th>price-square-meter</th>
							<th>annual-variation</th>
							<th>all-time-high</th>
							<th>max-variation</th>
						</tr>
					</thead>
					<tbody>
						<tr style="height: 20px">
							<th>andalusia</th>
							<td>2019</td>
							<td>8,5</td>
							<td>7</td>
							<td>9,5</td>
							<td>-9,9</td>
						</tr>
						<tr style="height: 20px">
							<th>aragon</th>
							<td>2019</td>
							<td>7,8</td>
							<td>9,1</td>
							<td>8,2</td>
							<td>-4</td>
						</tr>
						<tr style="height: 20px">
							<th>principality of asturias</th>
							<td>2019</td>
							<td>7,2</td>
							<td>4,6</td>
							<td>10,8</td>
							<td>-33,2</td>
						</tr>
						<tr style="height: 20px">
							<th>balearic islands</th>
							<td>2019</td>
							<td>12,6</td>
							<td>2</td>
							<td>14</td>
							<td>-9,6</td>
						</tr>
						<tr style="height: 20px">
							<th>canary islands</th>
							<td>2019</td>
							<td>10</td>
							<td>3,3</td>
							<td>10,3</td>
							<td>-2,7</td>
						</tr>
						<tr style="height: 20px">
							<th>cantabria</th>
							<td>2019</td>
							<td>7,6</td>
							<td>4,3</td>
							<td>12,7</td>
							<td>-40,2</td>
						</tr>
						<tr style="height: 20px">
							<th>castile and leon</th>
							<td>2019</td>
							<td>6,5</td>
							<td>5,8</td>
							<td>7</td>
							<td>-7,7</td>
						</tr>
						<tr style="height: 20px">
							<th>castilla-la mancha</th>
							<td>2019</td>
							<td>5,4</td>
							<td>6,6</td>
							<td>5,8</td>
							<td>-6,6</td>
						</tr>
						<tr style="height: 20px">
							<th>catalonia</th>
							<td>2019</td>
							<td>14,2</td>
							<td>4,4</td>
							<td>15,2</td>
							<td>-6,8</td>
						</tr>
						<tr style="height: 20px">
							<th>valencian community</th>
							<td>2019</td>
							<td>7,5</td>
							<td>7,4</td>
							<td>9,4</td>
							<td>-19,9</td>
						</tr>
						<tr style="height: 20px">
							<th>basque country</th>
							<td>2019</td>
							<td>11,9</td>
							<td>5,1</td>
							<td>12,3</td>
							<td>-3,9</td>
						</tr>
						<tr style="height: 20px">
							<th>extremadura</th>
							<td>2019</td>
							<td>5</td>
							<td>5,3</td>
							<td>5,4</td>
							<td>-6,5</td>
						</tr>
						<tr style="height: 20px">
							<th>galicia</th>
							<td>2019</td>
							<td>6,6</td>
							<td>0,7</td>
							<td>8,7</td>
							<td>-24,8</td>
						</tr>
						<tr style="height: 20px">
							<th>la rioja</th>
							<td>2019</td>
							<td>6,5</td>
							<td>8,7</td>
							<td>6,8</td>
							<td>-4,2</td>
						</tr>
						<tr style="height: 20px">
							<th>community of madrid</th>
							<td>2019</td>
							<td>14,7</td>
							<td>3,6</td>
							<td>15,4</td>
							<td>-4</td>
						</tr>
						<tr style="height: 20px">
							<th>melilla</th>
							<td>2019</td>
							<td>8,4</td>
							<td>-0,6</td>
							<td>9,5</td>
							<td>-11,3</td>
						</tr>
						<tr style="height: 20px">
							<th>region of murcia</th>
							<td>2019</td>
							<td>6,1</td>
							<td>7,5</td>
							<td>7,1</td>
							<td>-13,9</td>
						</tr>
						<tr style="height: 20px">
							<th>community of navarre</th>
							<td>2019</td>
							<td>8,5</td>
							<td>10,6</td>
							<td>8,8</td>
							<td>-3,4</td>
						</tr>
						<tr style="height: 20px">
							<th>andalusia</th>
							<td>2018</td>
							<td>8</td>
							<td>96</td>
							<td>9,5</td>
							<td>-15,7</td>
						</tr>
						<tr style="height: 20px">
							<th>aragon</th>
							<td>2018</td>
							<td>7,2</td>
							<td>6,6</td>
							<td>8,2</td>
							<td>-12</td>
						</tr>
						<tr style="height: 20px">
							<th>principality of asturias</th>
							<td>2018</td>
							<td>6,9</td>
							<td>3,9</td>
							<td>10,8</td>
							<td>-36,1</td>
						</tr>
						<tr style="height: 20px">
							<th>balearic islands</th>
							<td>2018</td>
							<td>12,4</td>
							<td>4,2</td>
							<td>14</td>
							<td>-11,4</td>
						</tr>
						<tr style="height: 20px">
							<th>canary islands</th>
							<td>2018</td>
							<td>9,7</td>
							<td>10,8</td>
							<td>10,3</td>
							<td>-5,9</td>
						</tr>
						<tr style="height: 20px">
							<th>cantabria</th>
							<td>2018</td>
							<td>7,3</td>
							<td>7,7</td>
							<td>12,7</td>
							<td>-42,6</td>
						</tr>
						<tr style="height: 20px">
							<th>castile and leon</th>
							<td>2018</td>
							<td>6,1</td>
							<td>6,1</td>
							<td>7</td>
							<td>-12,8</td>
						</tr>
						<tr style="height: 20px">
							<th>castilla-la mancha</th>
							<td>2018</td>
							<td>5,1</td>
							<td>6,6</td>
							<td>5,8</td>
							<td>-12,4</td>
						</tr>
						<tr style="height: 20px">
							<th>catalonia</th>
							<td>2018</td>
							<td>13,6</td>
							<td>-0,5</td>
							<td>15,2</td>
							<td>-10,8</td>
						</tr>
						<tr style="height: 20px">
							<th>valencian community</th>
							<td>2018</td>
							<td>7</td>
							<td>7,2</td>
							<td>9,4</td>
							<td>-25,4</td>
						</tr>
						<tr style="height: 20px">
							<th>basque country</th>
							<td>2018</td>
							<td>11,3</td>
							<td>3,5</td>
							<td>12,3</td>
							<td>-8,5</td>
						</tr>
						<tr style="height: 20px">
							<th>extremadura</th>
							<td>2018</td>
							<td>4,8</td>
							<td>0,4</td>
							<td>5,4</td>
							<td>-11,2</td>
						</tr>
						<tr style="height: 20px">
							<th>galicia</th>
							<td>2018</td>
							<td>6,1</td>
							<td>5,5</td>
							<td>8,7</td>
							<td>-29,7</td>
						</tr>
						<tr style="height: 20px">
							<th>la rioja</th>
							<td>2018</td>
							<td>6</td>
							<td>0,9</td>
							<td>6,8</td>
							<td>-11,9</td>
						</tr>
						<tr style="height: 20px">
							<th>community of madrid</th>
							<td>2018</td>
							<td>14,2</td>
							<td>9,6</td>
							<td>15,4</td>
							<td>-7,3</td>
						</tr>
						<tr style="height: 20px">
							<th>melilla</th>
							<td>2018</td>
							<td>8,5</td>
							<td>-2</td>
							<td>9,5</td>
							<td>-10,8</td>
						</tr>
						<tr style="height: 20px">
							<th>region of murcia</th>
							<td>2018</td>
							<td>5,7</td>
							<td>7,1</td>
							<td>7,1</td>
							<td>-19,9</td>
						</tr>
						<tr style="height: 20px">
							<th>community of navarre</th>
							<td>2018</td>
							<td>7,7</td>
							<td>10,9</td>
							<td>8,8</td>
							<td>-12,6</td>
						</tr>
						<tr style="height: 20px">
							<th>andalusia</th>
							<td>2017</td>
							<td>7,3</td>
							<td>11,2</td>
							<td>9,5</td>
							<td>-23,1</td>
						</tr>
						<tr style="height: 20px">
							<th>aragon</th>
							<td>2016</td>
							<td>6,7</td>
							<td>5,6</td>
							<td>8,2</td>
							<td>-17,5</td>
						</tr>
						<tr style="height: 20px">
							<th>principality of asturias</th>
							<td>2016</td>
							<td>6,6</td>
							<td>5,6</td>
							<td>10,8</td>
							<td>-38,5</td>
						</tr>
						<tr style="height: 20px">
							<th>balearic islands</th>
							<td>2016</td>
							<td>11,9</td>
							<td>16,8</td>
							<td>14</td>
							<td>-14,9</td>
						</tr>
						<tr style="height: 20px">
							<th>canary islands</th>
							<td>2016</td>
							<td>8,7</td>
							<td>19,8</td>
							<td>10,3</td>
							<td>-15</td>
						</tr>
						<tr style="height: 20px">
							<th>cantabria</th>
							<td>2016</td>
							<td>6,8</td>
							<td>3,4</td>
							<td>12,7</td>
							<td>-46,7</td>
						</tr>
						<tr style="height: 20px">
							<th>castile and leon</th>
							<td>2016</td>
							<td>5,8</td>
							<td>5,9</td>
							<td>7</td>
							<td>-17,8</td>
						</tr>
						<tr style="height: 20px">
							<th>castilla-la mancha</th>
							<td>2016</td>
							<td>4,8</td>
							<td>4,8</td>
							<td>5,8</td>
							<td>-17,8</td>
						</tr>
						<tr style="height: 20px">
							<th>catalonia</th>
							<td>2016</td>
							<td>13,7</td>
							<td>13,4</td>
							<td>15,2</td>
							<td>-10,3</td>
						</tr>
						<tr style="height: 20px">
							<th>valencian community</th>
							<td>2016</td>
							<td>6,5</td>
							<td>10,9</td>
							<td>9,4</td>
							<td>-30,4</td>
						</tr>
						<tr style="height: 20px">
							<th>basque country</th>
							<td>2016</td>
							<td>10,9</td>
							<td>6,4</td>
							<td>12,3</td>
							<td>-11,6</td>
						</tr>
						<tr style="height: 20px">
							<th>extremadura</th>
							<td>2016</td>
							<td>4,8</td>
							<td>5</td>
							<td>5,4</td>
							<td>-11,6</td>
						</tr>
						<tr style="height: 20px">
							<th>galicia</th>
							<td>2016</td>
							<td>5,8</td>
							<td>4,8</td>
							<td>8,7</td>
							<td>-33,3</td>
						</tr>
						<tr style="height: 20px">
							<th>la rioja</th>
							<td>2016</td>
							<td>5,5</td>
							<td>5,7</td>
							<td>6,8</td>
							<td>-19,2</td>
						</tr>
						<tr style="height: 20px">
							<th>community of madrid</th>
							<td>2016</td>
							<td>13</td>
							<td>10,6</td>
							<td>15,4</td>
							<td>-15,5</td>
						</tr>
						<tr style="height: 20px">
							<th>melilla</th>
							<td>2016</td>
							<td>8,7</td>
							<td>7</td>
							<td>9,5</td>
							<td>-9</td>
						</tr>
						<tr style="height: 20px">
							<th>region of murcia</th>
							<td>2016</td>
							<td>5,3</td>
							<td>7,9</td>
							<td>7,1</td>
							<td>-25,2</td>
						</tr>
						<tr style="height: 20px">
							<th>community of navarre</th>
							<td>2016</td>
							<td>6,9</td>
							<td>6,9</td>
							<td>8,8</td>
							<td>-21,2</td>
						</tr>
						<tr style="height: 20px">
							<th>andalusia</th>
							<td>2015</td>
							<td>6,5</td>
							<td>6</td>
							<td>9,5</td>
							<td>-30,8</td>
						</tr>
						<tr style="height: 20px">
							<th>aragon</th>
							<td>2015</td>
							<td>6,4</td>
							<td>5,5</td>
							<td>8,2</td>
							<td>-21,8</td>
						</tr>
						<tr style="height: 20px">
							<th>principality of asturias</th>
							<td>2015</td>
							<td>6,3</td>
							<td>5</td>
							<td>10,8</td>
							<td>-41,8</td>
						</tr>
						<tr style="height: 20px">
							<th>balearic islands</th>
							<td>2015</td>
							<td>10,2</td>
							<td>23,8</td>
							<td>14</td>
							<td>-27,2</td>
						</tr>
						<tr style="height: 20px">
							<th>canary islands</th>
							<td>2015</td>
							<td>7,3</td>
							<td>6,2</td>
							<td>10,3</td>
							<td>-29</td>
						</tr>
						<tr style="height: 20px">
							<th>cantabria</th>
							<td>2015</td>
							<td>6,6</td>
							<td>6,8</td>
							<td>12,7</td>
							<td>-48,5</td>
						</tr>
						<tr style="height: 20px">
							<th>castile and leon</th>
							<td>2015</td>
							<td>5,4</td>
							<td>4</td>
							<td>7</td>
							<td>-22,4</td>
						</tr>
						<tr style="height: 20px">
							<th>castilla-la mancha</th>
							<td>2015</td>
							<td>4,5</td>
							<td>2</td>
							<td>5,8</td>
							<td>-21,6</td>
						</tr>
						<tr style="height: 20px">
							<th>catalonia</th>
							<td>2015</td>
							<td>12</td>
							<td>19,9</td>
							<td>15,2</td>
							<td>-20,9</td>
						</tr>
						<tr style="height: 20px">
							<th>valencian community</th>
							<td>2015</td>
							<td>5,9</td>
							<td>9,5</td>
							<td>9,4</td>
							<td>-37,3</td>
						</tr>
						<tr style="height: 20px">
							<th>basque country</th>
							<td>2015</td>
							<td>10,3</td>
							<td>5</td>
							<td>12,3</td>
							<td>-16,9</td>
						</tr>
						<tr style="height: 20px">
							<th>extremadura</th>
							<td>2015</td>
							<td>4,5</td>
							<td>6,8</td>
							<td>5,4</td>
							<td>-15,8</td>
						</tr>
						<tr style="height: 20px">
							<th>galicia</th>
							<td>2015</td>
							<td>5,6</td>
							<td>2,7</td>
							<td>8,7</td>
							<td>-36,4</td>
						</tr>
						<tr style="height: 20px">
							<th>la rioja</th>
							<td>2015</td>
							<td>5,2</td>
							<td>3,3</td>
							<td>6,8</td>
							<td>-23,6</td>
						</tr>
						<tr style="height: 20px">
							<th>community of madrid</th>
							<td>2015</td>
							<td>11,7</td>
							<td>9,6</td>
							<td>15,4</td>
							<td>-23,6</td>
						</tr>
						<tr style="height: 20px">
							<th>melilla</th>
							<td>2015</td>
							<td>8,1</td>
							<td>-3,3</td>
							<td>9,5</td>
							<td>-15</td>
						</tr>
						<tr style="height: 20px">
							<th>region of murcia</th>
							<td>2015</td>
							<td>4,9</td>
							<td>1</td>
							<td>7,1</td>
							<td>-30,7</td>
						</tr>
						<tr style="height: 20px">
							<th>community of navarre</th>
							<td>2015</td>
							<td>6,5</td>
							<td>2,8</td>
							<td>8,8</td>
							<td>-26,3</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</body>
	
	</html>`)
});

app.get("/info/sales", (req, res) => {
	res.send(`<!DOCTYPE html>
	<html lang="es">
	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- <link rel="stylesheet" href="style.css"> -->
		<link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet">
		<title>Sales</title>
	</head>
	
	<body>
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
	
			body {
				font-family: 'Poppins', sans-serif;
				color: rgb(226, 226, 226);
				background: #e2e2e2;
			}
	
			a {
				text-decoration: none;
				color: #e2e2e2;
				transition: 0.2s ease-in-out;
			}
	
			a:hover {
				color: #fdfd96;
	
			}
	
			p {
				font-size: 16px;
				line-height: 20px;
			}
	
			h1,
			h2,
			h3,
			b {
				padding: 5px;
				color: #fdfd96;
			}
	
			.main {
				margin: auto;
				padding: 15px;
				display: grid;
				grid-template-columns: 1fr;
				width: 80%;
			}
	
			.container {
				padding: 30px;
				background: #191919;
				margin-top: 50px;
				border-radius: 5px;
				-webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
				-moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	
			}
	
			.team,
			.description,
			.api {
				margin: 15px;
				padding: 15px;
			}
	
			/* TABLE STYLE */
	
			table {
				background: #191919;
				font-size: 12px;
				margin: 45px;
				width: 90%;
				text-align: left;
				border-collapse: collapse;
			}
	
			th {
				font-size: 16px;
				font-weight: bold;
				padding: 8px;
				border-top: 4px solid #242323;
				border-bottom: 4px solid #242323;
				color: #fdfd96;
			}
	
			td {
				padding: 8px;
				border-bottom: 4px solid #242323;
				color: #e2e2e2;
				border-top: 1px solid transparent;
				transition: 0.2s ease-in-out;
			}
	
			tr:hover td {
				background: #242323;
				color: #fdfd96;
			}
		</style>
		<div class="main">
			<div class="container">
				<p>Venta de pisos: comunidad, año, total de ventas, ventas de viviendas protegidas, ventas de pisos nuevos y ventas de casas de segunda mano</p>
				<table class="waffle" cellspacing="0" cellpadding="0">
					<thead>
						<tr>
							<th>location</th>
							<th>year</th>
							<th>sales-total</th>
							<th>sales-protected-housing</th>
							<th>sales-new</th>
							<th>sales-second-hand</th>
						</tr>
					</thead>
					<tbody>
						<tr style="height: 20px">
							<th class="s2">andalusia</th>
							<td class="s3">2019</td>
							<td class="s4">109.275</td>
							<td class="s4">5.806</td>
							<td class="s4">9.165</td>
							<td class="s4">98.636</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">aragon</th>
							<td class="s3">2019</td>
							<td class="s4">15.365</td>
							<td class="s4">369</td>
							<td class="s4">1.816</td>
							<td class="s4">13.459</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">principality of asturias</th>
							<td class="s3">2019</td>
							<td class="s4">10.120</td>
							<td class="s4">693</td>
							<td class="s4">657</td>
							<td class="s4">9.333</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">balearic islands</th>
							<td class="s3">2019</td>
							<td class="s4">15.692</td>
							<td class="s4">111</td>
							<td class="s4">1.301</td>
							<td class="s4">14.388</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">canary islands</th>
							<td class="s3">2019</td>
							<td class="s4">24.630</td>
							<td class="s4">945</td>
							<td class="s4">1.670</td>
							<td class="s4">22.886</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">cantabria</th>
							<td class="s3">2019</td>
							<td class="s4">7.250</td>
							<td class="s4">240</td>
							<td class="s4">742</td>
							<td class="s4">6.435</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castilla-la mancha</th>
							<td class="s3">2019</td>
							<td class="s4">24.082</td>
							<td class="s4">907</td>
							<td class="s4">1.988</td>
							<td class="s4">21.882</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castile and leon</th>
							<td class="s3">2019</td>
							<td class="s4">25.852</td>
							<td class="s4">1.130</td>
							<td class="s4">1.712</td>
							<td class="s4">23.825</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">catalonia</th>
							<td class="s3">2019</td>
							<td class="s4">89.237</td>
							<td class="s4">1.647</td>
							<td class="s4">6.455</td>
							<td class="s4">82.341</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">valencian community</th>
							<td class="s3">2019</td>
							<td class="s4">84.737</td>
							<td class="s4">4.097</td>
							<td class="s4">7.688</td>
							<td class="s4">76.815</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">extremadura</th>
							<td class="s3">2019</td>
							<td class="s4">9.686</td>
							<td class="s4">765</td>
							<td class="s4">360</td>
							<td class="s4">9.213</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">galicia</th>
							<td class="s3">2019</td>
							<td class="s4">20.462</td>
							<td class="s4">487</td>
							<td class="s4">1.828</td>
							<td class="s4">18.560</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of madrid</th>
							<td class="s3">2019</td>
							<td class="s4">78.634</td>
							<td class="s4">3.628</td>
							<td class="s4">9.211</td>
							<td class="s4">68.036</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">region of murcia</th>
							<td class="s3">2019</td>
							<td class="s4">19.296</td>
							<td class="s4">536</td>
							<td class="s4">1.551</td>
							<td class="s4">17.723</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of navarre</th>
							<td class="s3">2019</td>
							<td class="s4">6.521</td>
							<td class="s4">323</td>
							<td class="s4">1.114</td>
							<td class="s4">5.271</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">basque country</th>
							<td class="s3">2019</td>
							<td class="s4">23.644</td>
							<td class="s4">1.367</td>
							<td class="s4">3.059</td>
							<td class="s4">19.870</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">la rioja</th>
							<td class="s3">2019</td>
							<td class="s4">4.292</td>
							<td class="s4">279</td>
							<td class="s4">277</td>
							<td class="s4">3.991</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">ceuta</th>
							<td class="s3">2019</td>
							<td class="s4">1.218</td>
							<td class="s4">71</td>
							<td class="s4">129</td>
							<td class="s4">1.043</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">andalusia</th>
							<td class="s3">2018</td>
							<td class="s4">110.425</td>
							<td class="s4">5.575</td>
							<td class="s4">9.065</td>
							<td class="s4">100.435</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">aragon</th>
							<td class="s3">2018</td>
							<td class="s4">15.499</td>
							<td class="s4">409</td>
							<td class="s4">1.882</td>
							<td class="s4">13.515</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">principality of asturias</th>
							<td class="s3">2018</td>
							<td class="s4">10.186</td>
							<td class="s4">707</td>
							<td class="s4">823</td>
							<td class="s4">9.194</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">balearic islands</th>
							<td class="s3">2018</td>
							<td class="s4">17.466</td>
							<td class="s4">122</td>
							<td class="s4">1.160</td>
							<td class="s4">16.302</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">canary islands</th>
							<td class="s3">2018</td>
							<td class="s4">25.269</td>
							<td class="s4">525</td>
							<td class="s4">1.519</td>
							<td class="s4">23.703</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">cantabria</th>
							<td class="s3">2018</td>
							<td class="s4">7.072</td>
							<td class="s4">222</td>
							<td class="s4">787</td>
							<td class="s4">6.226</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castilla-la mancha</th>
							<td class="s3">2018</td>
							<td class="s4">23.626</td>
							<td class="s4">1.071</td>
							<td class="s4">2.127</td>
							<td class="s4">21.222</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castile and leon</th>
							<td class="s3">2018</td>
							<td class="s4">25.957</td>
							<td class="s4">1.059</td>
							<td class="s4">1.581</td>
							<td class="s4">24.071</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">catalonia</th>
							<td class="s3">2018</td>
							<td class="s4">89.685</td>
							<td class="s4">1.731</td>
							<td class="s4">6.647</td>
							<td class="s4">82.596</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">valencian community</th>
							<td class="s3">2018</td>
							<td class="s4">88.792</td>
							<td class="s4">4.128</td>
							<td class="s4">7.270</td>
							<td class="s4">81.061</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">extremadura</th>
							<td class="s3">2018</td>
							<td class="s4">9.280</td>
							<td class="s4">813</td>
							<td class="s4">334</td>
							<td class="s4">8.800</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">galicia</th>
							<td class="s3">2018</td>
							<td class="s4">19.786</td>
							<td class="s4">527</td>
							<td class="s4">1.912</td>
							<td class="s4">17.805</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of madrid</th>
							<td class="s3">2018</td>
							<td class="s4">85.294</td>
							<td class="s4">3.940</td>
							<td class="s4">9.451</td>
							<td class="s4">74.574</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">region of murcia</th>
							<td class="s3">2018</td>
							<td class="s4">18.213</td>
							<td class="s4">508</td>
							<td class="s4">1.494</td>
							<td class="s4">16.656</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of navarre</th>
							<td class="s3">2018</td>
							<td class="s4">7.156</td>
							<td class="s4">596</td>
							<td class="s4">1.439</td>
							<td class="s4">5.367</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">basque country</th>
							<td class="s3">2018</td>
							<td class="s4">23.166</td>
							<td class="s4">1.409</td>
							<td class="s4">2.835</td>
							<td class="s4">19.781</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">la rioja</th>
							<td class="s3">2018</td>
							<td class="s4">4.659</td>
							<td class="s4">304</td>
							<td class="s4">430</td>
							<td class="s4">4.139</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">ceuta</th>
							<td class="s3">2018</td>
							<td class="s4">1.357</td>
							<td class="s4">252</td>
							<td class="s4">181</td>
							<td class="s4">963</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">andalusia</th>
							<td class="s3">2017</td>
							<td class="s4">96.440</td>
							<td class="s4">4.703</td>
							<td class="s4">6.615</td>
							<td class="s4">89.004</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">aragon</th>
							<td class="s3">2017</td>
							<td class="s4">13.988</td>
							<td class="s4">573</td>
							<td class="s4">1.469</td>
							<td class="s4">12.291</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">principality of asturias</th>
							<td class="s3">2017</td>
							<td class="s4">9.216</td>
							<td class="s4">739</td>
							<td class="s4">869</td>
							<td class="s4">8.133</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">balearic islands</th>
							<td class="s3">2017</td>
							<td class="s4">18.390</td>
							<td class="s4">127</td>
							<td class="s4">1.435</td>
							<td class="s4">16.947</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">canary islands</th>
							<td class="s3">2017</td>
							<td class="s4">25.868</td>
							<td class="s4">572</td>
							<td class="s4">1.548</td>
							<td class="s4">24.207</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">cantabria</th>
							<td class="s3">2017</td>
							<td class="s4">6.638</td>
							<td class="s4">223</td>
							<td class="s4">695</td>
							<td class="s4">5.874</td>
						</tr>
						<tr style="height: 20px">
							<th class="s3">castilla-la mancha</th>
							<td class="s3">2017</td>
							<td class="s4">20.642</td>
							<td class="s4">1.039</td>
							<td class="s4">2.684</td>
							<td class="s4">17.653</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castile and leon</th>
							<td class="s3">2017</td>
							<td class="s4">22.890</td>
							<td class="s4">1.228</td>
							<td class="s4">1.461</td>
							<td class="s4">21.025</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">catalonia</th>
							<td class="s3">2017</td>
							<td class="s4">85.567</td>
							<td class="s4">1.747</td>
							<td class="s4">5.729</td>
							<td class="s4">79.236</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">valencian community</th>
							<td class="s3">2017</td>
							<td class="s4">79.132</td>
							<td class="s4">3.515</td>
							<td class="s4">7.171</td>
							<td class="s4">71.674</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">extremadura</th>
							<td class="s3">2017</td>
							<td class="s4">8.090</td>
							<td class="s4">962</td>
							<td class="s4">302</td>
							<td class="s4">7.544</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">galicia</th>
							<td class="s3">2017</td>
							<td class="s4">17.555</td>
							<td class="s4">546</td>
							<td class="s4">1.888</td>
							<td class="s4">15.524</td>
						</tr>
						<tr style="height: 20px">
							<th class="s3">community of madrid</th>
							<td class="s3">2017</td>
							<td class="s4">80.613</td>
							<td class="s4">4.013</td>
							<td class="s4">7.755</td>
							<td class="s4">71.738</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">region of murcia</th>
							<td class="s3">2017</td>
							<td class="s4">15.447</td>
							<td class="s4">491</td>
							<td class="s4">1.372</td>
							<td class="s4">14.005</td>
						</tr>
						<tr style="height: 20px">
							<th class="community of navarre">2017</th>
							<td class="s3">2017</td>
							<td class="s4">6.040</td>
							<td class="s4">450</td>
							<td class="s4">1.132</td>
							<td class="s4">4.734</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">basque country</th>
							<td class="s3">2017</td>
							<td class="s4">20.909</td>
							<td class="s4">1.168</td>
							<td class="s4">2.325</td>
							<td class="s4">17.994</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">la rioja</th>
							<td class="s3">2017</td>
							<td class="s4">3.748</td>
							<td class="s4">262</td>
							<td class="s4">258</td>
							<td class="s4">3.415</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">ceuta</th>
							<td class="s3">2017</td>
							<td class="s4">1.088</td>
							<td class="s4">56</td>
							<td class="s4">207</td>
							<td class="s4">866</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">andalusia</th>
							<td class="s3">2016</td>
							<td class="s4">83.508</td>
							<td class="s4">4.612</td>
							<td class="s4">6.315</td>
							<td class="s4">76.094</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">aragon</th>
							<td class="s3">2016</td>
							<td class="s4">11.688</td>
							<td class="s4">712</td>
							<td class="s4">1.356</td>
							<td class="s4">9.966</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">principality of asturias</th>
							<td class="s3">2016</td>
							<td class="s4">7.602</td>
							<td class="s4">524</td>
							<td class="s4">605</td>
							<td class="s4">6.919</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">balearic islands</th>
							<td class="s3">2016</td>
							<td class="s4">15.882</td>
							<td class="s4">101</td>
							<td class="s4">1.350</td>
							<td class="s4">14.525</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">canary islands</th>
							<td class="s3">2016</td>
							<td class="s4">22.283</td>
							<td class="s4">507</td>
							<td class="s4">1.419</td>
							<td class="s4">20.735</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">cantabria</th>
							<td class="s3">2016</td>
							<td class="s4">5.250</td>
							<td class="s4">240</td>
							<td class="s4">626</td>
							<td class="s4">4.523</td>
						</tr>
						<tr style="height: 20px">
							<th class="s3">castilla-la mancha</th>
							<td class="s3">2016</td>
							<td class="s4">16.265</td>
							<td class="s4">871</td>
							<td class="s4">1.943</td>
							<td class="s4">14.049</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castile and leon</th>
							<td class="s3">2016</td>
							<td class="s4">20.509</td>
							<td class="s4">1.156</td>
							<td class="s4">1.491</td>
							<td class="s4">18.612</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">catalonia</th>
							<td class="s3">2016</td>
							<td class="s4">75.152</td>
							<td class="s4">1.378</td>
							<td class="s4">4.888</td>
							<td class="s4">69.837</td>
						</tr>
						<tr style="height: 20px">
							<th class="s3">valencian community</th>
							<td class="s3">2016</td>
							<td class="s4">67.820</td>
							<td class="s4">2.882</td>
							<td class="s4">6.535</td>
							<td class="s4">60.925</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">extremadura</th>
							<td class="s3">2016</td>
							<td class="s4">7.197</td>
							<td class="s4">926</td>
							<td class="s4">303</td>
							<td class="s4">6.623</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">galicia</th>
							<td class="s3">2016</td>
							<td class="s4">15.604</td>
							<td class="s4">634</td>
							<td class="s4">2.133</td>
							<td class="s4">13.264</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of madrid</th>
							<td class="s3">2016</td>
							<td class="s4">67.366</td>
							<td class="s4">3.830</td>
							<td class="s4">6.104</td>
							<td class="s4">59.755</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">region of murcia</th>
							<td class="s3">2016</td>
							<td class="s4">13.638</td>
							<td class="s4">414</td>
							<td class="s4">1.702</td>
							<td class="s4">11.882</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of navarre</th>
							<td class="s3">2016</td>
							<td class="s4">4.946</td>
							<td class="s4">302</td>
							<td class="s4">850</td>
							<td class="s4">3.992</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">basque country</th>
							<td class="s3">2016</td>
							<td class="s4">18.730</td>
							<td class="s4">1.733</td>
							<td class="s4">2.532</td>
							<td class="s4">15.075</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">la rioja</th>
							<td class="s3">2016</td>
							<td class="s4">3.255</td>
							<td class="s4">308</td>
							<td class="s4">232</td>
							<td class="s4">2.992</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">ceuta</th>
							<td class="s3">2016</td>
							<td class="s4">1.043</td>
							<td class="s4">34</td>
							<td class="s4">180</td>
							<td class="s4">856</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">andalusia</th>
							<td class="s3">2015</td>
							<td class="s4">76.743</td>
							<td class="s4">3.885</td>
							<td class="s4">8.238</td>
							<td class="s4">67.443</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">aragon</th>
							<td class="s3">2015</td>
							<td class="s4">11.317</td>
							<td class="s4">343</td>
							<td class="s4">1.466</td>
							<td class="s4">9.749</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">principality of asturias</th>
							<td class="s3">2015</td>
							<td class="s4">6.516</td>
							<td class="s4">537</td>
							<td class="s4">554</td>
							<td class="s4">5.865</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">balearic islands</th>
							<td class="s3">2015</td>
							<td class="s4">12.952</td>
							<td class="s4">61</td>
							<td class="s4">1.336</td>
							<td class="s4">11.608</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">canary islands</th>
							<td class="s3">2015</td>
							<td class="s4">19.846</td>
							<td class="s4">440</td>
							<td class="s4">1.850</td>
							<td class="s4">17.896</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">cantabria</th>
							<td class="s3">2015</td>
							<td class="s4">4.660</td>
							<td class="s4">163</td>
							<td class="s4">672</td>
							<td class="s4">3.929</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castilla-la mancha</th>
							<td class="s3">2015</td>
							<td class="s4">14.288</td>
							<td class="s4">1.058</td>
							<td class="s4">1.624</td>
							<td class="s4">12.180</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">castile and leon</th>
							<td class="s3">2015</td>
							<td class="s4">18.306</td>
							<td class="s4">1.174</td>
							<td class="s4">1.525</td>
							<td class="s4">16.248</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">catalonia</th>
							<td class="s3">2015</td>
							<td class="s4">61.108</td>
							<td class="s4">1.162</td>
							<td class="s4">4.747</td>
							<td class="s4">55.981</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">valencian community</th>
							<td class="s3">2015</td>
							<td class="s4">59.605</td>
							<td class="s4">2.123</td>
							<td class="s4">6.760</td>
							<td class="s4">52.644</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">extremadura</th>
							<td class="s3">2015</td>
							<td class="s4">6.323</td>
							<td class="s4">788</td>
							<td class="s4">450</td>
							<td class="s4">5.556</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">galicia</th>
							<td class="s3">2015</td>
							<td class="s4">14.633</td>
							<td class="s4">525</td>
							<td class="s4">2.663</td>
							<td class="s4">11.794</td>
						</tr>
						<tr style="height: 20px">
							<th class="s3">community of madrid</th>
							<td class="s3">2015</td>
							<td class="s4">57.431</td>
							<td class="s4">3.255</td>
							<td class="s4">5.244</td>
							<td class="s4">50.611</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">region of murcia</th>
							<td class="s3">2015</td>
							<td class="s4">12.788</td>
							<td class="s4">380</td>
							<td class="s4">1.404</td>
							<td class="s4">11.336</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">community of navarre</th>
							<td class="s3">2015</td>
							<td class="s4">4.533</td>
							<td class="s4">443</td>
							<td class="s4">644</td>
							<td class="s4">3.559</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">basque country</th>
							<td class="s3">2015</td>
							<td class="s4">16.568</td>
							<td class="s4">2.033</td>
							<td class="s4">2.365</td>
							<td class="s4">12.688</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">la rioja</th>
							<td class="s3">2015</td>
							<td class="s4">3.124</td>
							<td class="s4">206</td>
							<td class="s4">321</td>
							<td class="s4">2.759</td>
						</tr>
						<tr style="height: 20px">
							<th class="s2">ceuta</th>
							<td class="s3">2015</td>
							<td class="s4">972</td>
							<td class="s4">30</td>
							<td class="s4">209</td>
							<td class="s4">755</td>
						</tr>
					</tbody>
				</table>
	</div>`);
});

app.get("/info/evictions", (req, res) => {
	res.send(`<!DOCTYPE html>
	<html lang="es">
	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- <link rel="stylesheet" href="style.css"> -->
		<link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet">
		<title>Evictions</title>
	</head>
	
	<body>
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
	
			body {
				font-family: 'Poppins', sans-serif;
				color: rgb(226, 226, 226);
				background: #e2e2e2;
			}
	
			a {
				text-decoration: none;
				color: #e2e2e2;
				transition: 0.2s ease-in-out;
			}
	
			a:hover {
				color: #fdfd96;
	
			}
	
			p {
				font-size: 16px;
				line-height: 20px;
			}
	
			h1,
			h2,
			h3,
			b {
				padding: 5px;
				color: #fdfd96;
			}
	
			.main {
				margin: auto;
				padding: 15px;
				display: grid;
				grid-template-columns: 1fr;
				width: 80%;
			}
	
			.container {
				padding: 30px;
				background: #191919;
				margin-top: 50px;
				border-radius: 5px;
				-webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
				-moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	
			}
	
			.team,
			.description,
			.api {
				margin: 15px;
				padding: 15px;
			}
	
			/* TABLE STYLE */
	
			table {
				background: #191919;
				font-size: 12px;
				margin: 45px;
				width: 90%;
				text-align: left;
				border-collapse: collapse;
			}
	
			th {
				font-size: 16px;
				font-weight: bold;
				padding: 8px;
				border-top: 4px solid #242323;
				border-bottom: 4px solid #242323;
				color: #fdfd96;
			}
	
			td {
				padding: 8px;
				border-bottom: 4px solid #242323;
				color: #e2e2e2;
				border-top: 1px solid transparent;
				transition: 0.2s ease-in-out;
			}
	
			tr:hover td {
				background: #242323;
				color: #fdfd96;
			}
		</style>
	<div class="main">
		<div class="container">
			<p>Ejecuciones hipotecarias: comunidad, año, total de desahucios, desahucios de fincas rústicas, desahucios de viviendas urbanas, desahucios de solares y otros desahucios</p>
			<table class="waffle" cellspacing="0" cellpadding="0">
				<thead>
					<tr>
						<th>location</th>
						<th>year</th>
						<th>evictions-total</th>
						<th>evictions-rustic</th>
						<th>evictions-household</th>
						<th>evictions-buildinglot</th>
						<th>evictions-other</th>
					</tr>
				</thead>
				<tbody>
					<tr style="height: 20px">
						<th class="s2">andalusia</th>
						<td class="s3">2019</td>
						<td class="s3">9834</td>
						<td class="s3">517</td>
						<td class="s3">5681</td>
						<td class="s3">598</td>
						<td class="s3">3038</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">aragon</th>
						<td class="s3">2019</td>
						<td class="s3">1152</td>
						<td class="s3">26</td>
						<td class="s3">473</td>
						<td class="s3">121</td>
						<td class="s3">532</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">principality of asturias</th>
						<td class="s3">2019</td>
						<td class="s3">920</td>
						<td class="s3">81</td>
						<td class="s3">338</td>
						<td class="s3">38</td>
						<td class="s3">463</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">balearic islands</th>
						<td class="s3">2019</td>
						<td class="s3">801</td>
						<td class="s3">15</td>
						<td class="s3">405</td>
						<td class="s3">21</td>
						<td class="s3">360</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">canary islands</th>
						<td class="s3">2019</td>
						<td class="s3">1266</td>
						<td class="s3">57</td>
						<td class="s3">630</td>
						<td class="s3">53</td>
						<td class="s3">526</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">cantabria</th>
						<td class="s3">2019</td>
						<td class="s3">618</td>
						<td class="s3">22</td>
						<td class="s3">376</td>
						<td class="s3">18</td>
						<td class="s3">202</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">castilla-la mancha</th>
						<td class="s3">2019</td>
						<td class="s3">3104</td>
						<td class="s3">424</td>
						<td class="s3">1642</td>
						<td class="s3">316</td>
						<td class="s3">722</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">castile and leon</th>
						<td class="s3">2019</td>
						<td class="s3">2680</td>
						<td class="s3">195</td>
						<td class="s3">791</td>
						<td class="s3">822</td>
						<td class="s3">872</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">catalonia</th>
						<td class="s3">2019</td>
						<td class="s3">12131</td>
						<td class="s3">169</td>
						<td class="s3">5757</td>
						<td class="s3">634</td>
						<td class="s3">5571</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">valencian community</th>
						<td class="s3">2019</td>
						<td class="s3">11644</td>
						<td class="s3">690</td>
						<td class="s3">5356</td>
						<td class="s3">248</td>
						<td class="s3">5350</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">extremadura</th>
						<td class="s3">2019</td>
						<td class="s3">950</td>
						<td class="s3">68</td>
						<td class="s3">452</td>
						<td class="s3">133</td>
						<td class="s3">297</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">galicia</th>
						<td class="s3">2019</td>
						<td class="s3">2667</td>
						<td class="s3">100</td>
						<td class="s3">1393</td>
						<td class="s3">114</td>
						<td class="s3">1060</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">community of madrid</th>
						<td class="s3">2019</td>
						<td class="s3">3303</td>
						<td class="s3">91</td>
						<td class="s3">1424</td>
						<td class="s3">85</td>
						<td class="s3">1703</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">region of murcia</th>
						<td class="s3">2019</td>
						<td class="s3">4374</td>
						<td class="s3">253</td>
						<td class="s3">2051</td>
						<td class="s3">106</td>
						<td class="s3">1964</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">community of navarre</th>
						<td class="s3">2019</td>
						<td class="s3">174</td>
						<td class="s3">42</td>
						<td class="s3">54</td>
						<td class="s3">5</td>
						<td class="s3">73</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">basque country</th>
						<td class="s3">2019</td>
						<td class="s3">218</td>
						<td class="s3">2</td>
						<td class="s3">81</td>
						<td class="s3">0</td>
						<td class="s3">135</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">la rioja</th>
						<td class="s3">2019</td>
						<td class="s3">495</td>
						<td class="s3">25</td>
						<td class="s3">143</td>
						<td class="s3">21</td>
						<td class="s3">306</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">ceuta</th>
						<td class="s3">2019</td>
						<td class="s3">12</td>
						<td class="s3">0</td>
						<td class="s3">3</td>
						<td class="s3">1</td>
						<td class="s3">8</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">melilla</th>
						<td class="s3">2019</td>
						<td class="s3">6</td>
						<td class="s3">0</td>
						<td class="s3">5</td>
						<td class="s3">0</td>
						<td class="s3">1</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">andalusia</th>
						<td class="s3">2018</td>
						<td class="s3">10123</td>
						<td class="s3">518</td>
						<td class="s3">5154</td>
						<td class="s3">431</td>
						<td class="s3">4020</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">aragon</th>
						<td class="s3">2018</td>
						<td class="s3">1073</td>
						<td class="s3">47</td>
						<td class="s3">466</td>
						<td class="s3">138</td>
						<td class="s3">422</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">principality of asturias</th>
						<td class="s3">2018</td>
						<td class="s3">1128</td>
						<td class="s3">158</td>
						<td class="s3">471</td>
						<td class="s3">74</td>
						<td class="s3">425</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">balearic islands</th>
						<td class="s3">2018</td>
						<td class="s3">802</td>
						<td class="s3">43</td>
						<td class="s3">387</td>
						<td class="s3">19</td>
						<td class="s3">353</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">canary islands</th>
						<td class="s3">2018</td>
						<td class="s3">3036</td>
						<td class="s3">77</td>
						<td class="s3">1433</td>
						<td class="s3">37</td>
						<td class="s3">1489</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">cantabria</th>
						<td class="s3">2018</td>
						<td class="s3">856</td>
						<td class="s3">51</td>
						<td class="s3">406</td>
						<td class="s3">78</td>
						<td class="s3">321</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">castilla-la mancha</th>
						<td class="s3">2018</td>
						<td class="s3">2919</td>
						<td class="s3">116</td>
						<td class="s3">1531</td>
						<td class="s3">442</td>
						<td class="s3">830</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">castile and leon</th>
						<td class="s3">2018</td>
						<td class="s3">2851</td>
						<td class="s3">179</td>
						<td class="s3">865</td>
						<td class="s3">521</td>
						<td class="s3">1286</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">catalonia</th>
						<td class="s3">2018</td>
						<td class="s3">8841</td>
						<td class="s3">180</td>
						<td class="s3">4561</td>
						<td class="s3">733</td>
						<td class="s3">3367</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">valencian community</th>
						<td class="s3">2018</td>
						<td class="s3">10076</td>
						<td class="s3">512</td>
						<td class="s3">5242</td>
						<td class="s3">378</td>
						<td class="s3">3944</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">extremadura</th>
						<td class="s3">2018</td>
						<td class="s3">952</td>
						<td class="s3">117</td>
						<td class="s3">463</td>
						<td class="s3">178</td>
						<td class="s3">194</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">galicia</th>
						<td class="s3">2018</td>
						<td class="s3">1972</td>
						<td class="s3">183</td>
						<td class="s3">1076</td>
						<td class="s3">64</td>
						<td class="s3">649</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">community of madrid</th>
						<td class="s3">2018</td>
						<td class="s3">4191</td>
						<td class="s3">82</td>
						<td class="s3">1646</td>
						<td class="s3">58</td>
						<td class="s3">2405</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">region of murcia</th>
						<td class="s3">2018</td>
						<td class="s3">3260</td>
						<td class="s3">212</td>
						<td class="s3">1424</td>
						<td class="s3">108</td>
						<td class="s3">1516</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">community of navarre</th>
						<td class="s3">2018</td>
						<td class="s3">342</td>
						<td class="s3">43</td>
						<td class="s3">173</td>
						<td class="s3">14</td>
						<td class="s3">112</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">basque country</th>
						<td class="s3">2018</td>
						<td class="s3">261</td>
						<td class="s3">7</td>
						<td class="s3">97</td>
						<td class="s3">35</td>
						<td class="s3">122</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">la rioja</th>
						<td class="s3">2018</td>
						<td class="s3">1156</td>
						<td class="s3">18</td>
						<td class="s3">495</td>
						<td class="s3">44</td>
						<td class="s3">599</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">ceuta</th>
						<td class="s3">2018</td>
						<td class="s3">10</td>
						<td class="s3">0</td>
						<td class="s3">6</td>
						<td class="s3">0</td>
						<td class="s3">4</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">melilla</th>
						<td class="s3">2018</td>
						<td class="s3">8</td>
						<td class="s3">0</td>
						<td class="s3">7</td>
						<td class="s3">0</td>
						<td class="s3">1</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">andalusia</th>
						<td class="s3">2017</td>
						<td class="s3">13.644</td>
						<td class="s3">706</td>
						<td class="s3">7.693</td>
						<td class="s3">1.054</td>
						<td class="s3">4.191</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">aragon</th>
						<td class="s3">2017</td>
						<td class="s3">1.122</td>
						<td class="s3">75</td>
						<td class="s3">513</td>
						<td class="s3">111</td>
						<td class="s3">423</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">principality of asturias</th>
						<td class="s3">2017</td>
						<td class="s3">561</td>
						<td class="s3">66</td>
						<td class="s3">284</td>
						<td class="s3">31</td>
						<td class="s3">180</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">balearic islands</th>
						<td class="s3">2017</td>
						<td class="s3">1.026</td>
						<td class="s3">54</td>
						<td class="s3">515</td>
						<td class="s3">24</td>
						<td class="s3">433</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">canary islands</th>
						<td class="s3">2017</td>
						<td class="s3">2.616</td>
						<td class="s3">66</td>
						<td class="s3">1.349</td>
						<td class="s3">100</td>
						<td class="s3">1.101</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">cantabria</th>
						<td class="s3">2017</td>
						<td class="s3">341</td>
						<td class="s3">19</td>
						<td class="s3">222</td>
						<td class="s3">6</td>
						<td class="s3">94</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">castilla-la mancha</th>
						<td class="s3">2017</td>
						<td class="s3">2.302</td>
						<td class="s3">429</td>
						<td class="s3">1.023</td>
						<td class="s3">158</td>
						<td class="s3">692</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">castile and leon</th>
						<td class="s3">2017</td>
						<td class="s3">2.425</td>
						<td class="s3">502</td>
						<td class="s3">695</td>
						<td class="s3">173</td>
						<td class="s3">1.055</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">catalonia</th>
						<td class="s3">2017</td>
						<td class="s3">7.206</td>
						<td class="s3">118</td>
						<td class="s3">4.107</td>
						<td class="s3">290</td>
						<td class="s3">2.691</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">valencian community</th>
						<td class="s3">2017</td>
						<td class="s3">10.212</td>
						<td class="s3">553</td>
						<td class="s3">5.356</td>
						<td class="s3">292</td>
						<td class="s3">4.011</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">extremadura</th>
						<td class="s3">2017</td>
						<td class="s3">657</td>
						<td class="s3">72</td>
						<td class="s3">354</td>
						<td class="s3">17</td>
						<td class="s3">214</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">galicia</th>
						<td class="s3">2017</td>
						<td class="s3">1.790</td>
						<td class="s3">180</td>
						<td class="s3">787</td>
						<td class="s3">49</td>
						<td class="s3">774</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">community of madrid</th>
						<td class="s3">2017</td>
						<td class="s3">3.885</td>
						<td class="s3">45</td>
						<td class="s3">2.147</td>
						<td class="s3">79</td>
						<td class="s3">1.614</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">region of murcia</th>
						<td class="s3">2017</td>
						<td class="s3">3.252</td>
						<td class="s3">349</td>
						<td class="s3">1.591</td>
						<td class="s3">110</td>
						<td class="s3">1.202</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">community of navarre</th>
						<td class="s3">2017</td>
						<td class="s3">206</td>
						<td class="s3">12</td>
						<td class="s3">129</td>
						<td class="s3">7</td>
						<td class="s3">58</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">basque country</th>
						<td class="s3">2017</td>
						<td class="s3">348</td>
						<td class="s3">6</td>
						<td class="s3">188</td>
						<td class="s3">9</td>
						<td class="s3">145</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">la rioja</th>
						<td class="s3">2017</td>
						<td class="s3">342</td>
						<td class="s3">31</td>
						<td class="s3">165</td>
						<td class="s3">13</td>
						<td class="s3">133</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">ceuta</th>
						<td class="s3">2017</td>
						<td class="s3">51</td>
						<td class="s3">0</td>
						<td class="s3">44</td>
						<td class="s3">1</td>
						<td class="s3">6</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">melilla</th>
						<td class="s3">2017</td>
						<td class="s3">13</td>
						<td class="s3">0</td>
						<td class="s3">9</td>
						<td class="s3">0</td>
						<td class="s3">4</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">andalusia</th>
						<td class="s3">2016</td>
						<td class="s3">20.611</td>
						<td class="s3">1.123</td>
						<td class="s3">11.581</td>
						<td class="s3">1.314</td>
						<td class="s3">6.593</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">aragon</th>
						<td class="s3">2016</td>
						<td class="s3">1.441</td>
						<td class="s3">65</td>
						<td class="s3">929</td>
						<td class="s3">66</td>
						<td class="s3">381</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">principality of asturias</th>
						<td class="s3">2016</td>
						<td class="s3">745</td>
						<td class="s3">66</td>
						<td class="s3">395</td>
						<td class="s3">13</td>
						<td class="s3">271</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">balearic islands</th>
						<td class="s3">2016</td>
						<td class="s3">1.418</td>
						<td class="s3">95</td>
						<td class="s3">761</td>
						<td class="s3">69</td>
						<td class="s3">493</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">canary islands</th>
						<td class="s3">2016</td>
						<td class="s3">3.668</td>
						<td class="s3">99</td>
						<td class="s3">1.952</td>
						<td class="s3">115</td>
						<td class="s3">1.502</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">cantabria</th>
						<td class="s3">2016</td>
						<td class="s3">629</td>
						<td class="s3">41</td>
						<td class="s3">340</td>
						<td class="s3">34</td>
						<td class="s3">214</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">castilla-la mancha</th>
						<td class="s3">2016</td>
						<td class="s3">2.835</td>
						<td class="s3">196</td>
						<td class="s3">1.521</td>
						<td class="s3">336</td>
						<td class="s3">782</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">castile and leon</th>
						<td class="s3">2016</td>
						<td class="s3">2.565</td>
						<td class="s3">298</td>
						<td class="s3">987</td>
						<td class="s3">323</td>
						<td class="s3">957</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">catalonia</th>
						<td class="s3">2016</td>
						<td class="s3">11.195</td>
						<td class="s3">167</td>
						<td class="s3">6.956</td>
						<td class="s3">446</td>
						<td class="s3">3.626</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">valencian community</th>
						<td class="s3">2016</td>
						<td class="s3">12.769</td>
						<td class="s3">687</td>
						<td class="s3">7.638</td>
						<td class="s3">253</td>
						<td class="s3">4.191</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">extremadura</th>
						<td class="s3">2016</td>
						<td class="s3">893</td>
						<td class="s3">92</td>
						<td class="s3">490</td>
						<td class="s3">52</td>
						<td class="s3">259</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">galicia</th>
						<td class="s3">2016</td>
						<td class="s3">1.564</td>
						<td class="s3">132</td>
						<td class="s3">727</td>
						<td class="s3">59</td>
						<td class="s3">646</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">community of madrid</th>
						<td class="s3">2016</td>
						<td class="s3">5.958</td>
						<td class="s3">95</td>
						<td class="s3">3.498</td>
						<td class="s3">105</td>
						<td class="s3">2.260</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">region of murcia</th>
						<td class="s3">2016</td>
						<td class="s3">4.893</td>
						<td class="s3">427</td>
						<td class="s3">2.582</td>
						<td class="s3">436</td>
						<td class="s3">1.448</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">community of navarre</th>
						<td class="s3">2016</td>
						<td class="s3">564</td>
						<td class="s3">4</td>
						<td class="s3">233</td>
						<td class="s3">24</td>
						<td class="s3">303</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">basque country</th>
						<td class="s3">2016</td>
						<td class="s3">520</td>
						<td class="s3">16</td>
						<td class="s3">214</td>
						<td class="s3">57</td>
						<td class="s3">233</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">la rioja</th>
						<td class="s3">2016</td>
						<td class="s3">620</td>
						<td class="s3">127</td>
						<td class="s3">284</td>
						<td class="s3">32</td>
						<td class="s3">177</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">ceuta</th>
						<td class="s3">2016</td>
						<td class="s3">14</td>
						<td class="s3">0</td>
						<td class="s3">11</td>
						<td class="s3">0</td>
						<td class="s3">3</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">melilla</th>
						<td class="s3">2016</td>
						<td class="s3">39</td>
						<td class="s3">0</td>
						<td class="s3">30</td>
						<td class="s3">0</td>
						<td class="s3">9</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">andalusia</th>
						<td class="s3">2015</td>
						<td class="s3">28.251</td>
						<td class="s3">1.658</td>
						<td class="s3">16.246</td>
						<td class="s3">1.294</td>
						<td class="s3">9.053</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">aragon</th>
						<td class="s3">2015</td>
						<td class="s3">2.315</td>
						<td class="s3">130</td>
						<td class="s3">1.287</td>
						<td class="s3">72</td>
						<td class="s3">826</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">principality of asturias</th>
						<td class="s3">2015</td>
						<td class="s3">1.083</td>
						<td class="s3">107</td>
						<td class="s3">603</td>
						<td class="s3">27</td>
						<td class="s3">346</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">balearic islands</th>
						<td class="s3">2015</td>
						<td class="s3">2.408</td>
						<td class="s3">139</td>
						<td class="s3">1.328</td>
						<td class="s3">89</td>
						<td class="s3">852</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">canary islands</th>
						<td class="s3">2015</td>
						<td class="s3">5.001</td>
						<td class="s3">216</td>
						<td class="s3">3.021</td>
						<td class="s3">171</td>
						<td class="s3">1.593</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">cantabria</th>
						<td class="s3">2015</td>
						<td class="s3">771</td>
						<td class="s3">57</td>
						<td class="s3">405</td>
						<td class="s3">10</td>
						<td class="s3">299</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">castilla-la mancha</th>
						<td class="s3">2015</td>
						<td class="s3">4.883</td>
						<td class="s3">381</td>
						<td class="s3">2.548</td>
						<td class="s3">540</td>
						<td class="s3">1.414</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">castile and leon</th>
						<td class="s3">2015</td>
						<td class="s3">4.403</td>
						<td class="s3">266</td>
						<td class="s3">1.907</td>
						<td class="s3">340</td>
						<td class="s3">1.890</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">catalonia</th>
						<td class="s3">2015</td>
						<td class="s3">16.464</td>
						<td class="s3">283</td>
						<td class="s3">11.110</td>
						<td class="s3">476</td>
						<td class="s3">4.595</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">valencian community</th>
						<td class="s3">2015</td>
						<td class="s3">17.539</td>
						<td class="s3">1.030</td>
						<td class="s3">10.714</td>
						<td class="s3">420</td>
						<td class="s3">5.375</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">extremadura</th>
						<td class="s3">2015</td>
						<td class="s3">1.578</td>
						<td class="s3">192</td>
						<td class="s3">828</td>
						<td class="s3">104</td>
						<td class="s3">454</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">galicia</th>
						<td class="s3">2015</td>
						<td class="s3">2.570</td>
						<td class="s3">236</td>
						<td class="s3">1.226</td>
						<td class="s3">114</td>
						<td class="s3">994</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">community of madrid</th>
						<td class="s3">2015</td>
						<td class="s3">6.372</td>
						<td class="s3">107</td>
						<td class="s3">4.250</td>
						<td class="s3">156</td>
						<td class="s3">1.859</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">region of murcia</th>
						<td class="s3">2015</td>
						<td class="s3">6.972</td>
						<td class="s3">394</td>
						<td class="s3">3.612</td>
						<td class="s3">338</td>
						<td class="s3">2.628</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">community of navarre</th>
						<td class="s3">2015</td>
						<td class="s3">567</td>
						<td class="s3">17</td>
						<td class="s3">340</td>
						<td class="s3">68</td>
						<td class="s3">142</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">basque country</th>
						<td class="s3">2015</td>
						<td class="s3">694</td>
						<td class="s3">43</td>
						<td class="s3">297</td>
						<td class="s3">51</td>
						<td class="s3">303</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">la rioja</th>
						<td class="s3">2015</td>
						<td class="s3">539</td>
						<td class="s3">37</td>
						<td class="s3">272</td>
						<td class="s3">29</td>
						<td class="s3">201</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">ceuta</th>
						<td class="s3">2015</td>
						<td class="s3">29</td>
						<td class="s3">0</td>
						<td class="s3">17</td>
						<td class="s3">0</td>
						<td class="s3">12</td>
					</tr>
					<tr style="height: 20px">
						<th class="s2">melilla</th>
						<td class="s3">2015</td>
						<td class="s3">38</td>
						<td class="s3">1</td>
						<td class="s3">21</td>
						<td class="s3">0</td>
						<td class="s3">16</td>
					</tr>
				</tbody>
			</table>
		</div>
		
	</div>`)
});

app.listen(PORT, () => {
	console.log(`Server ready lintening on port ${PORT}`);
})