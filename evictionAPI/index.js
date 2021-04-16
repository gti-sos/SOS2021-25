var BASE_EVICTION_API_PATH = "/api/v1";

var Datastore = require("nedb");
var db = new Datastore();

var evictions_initial = [
	{"location":"andalusia","year":"2019","total":"9834","rustic":"517","household":"5681","buildinglot":"598","other":"3038"},
	{"location":"aragon","year":"2019","total":"1152","rustic":"26","household":"473","buildinglot":"121","other":"532"},
	{"location":"principality of asturias","year":"2019","total":"920","rustic":"81","household":"338","buildinglot":"38","other":"463"},
	{"location":"balearic islands","year":"2019","total":"801","rustic":"15","household":"405","buildinglot":"21","other":"360"},
	{"location":"canary islands","year":"2019","total":"1266","rustic":"57","household":"630","buildinglot":"53","other":"526"},
	{"location":"cantabria","year":"2019","total":"618","rustic":"22","household":"376","buildinglot":"18","other":"202"},
	{"location":"castilla-la mancha","year":"2019","total":"3104","rustic":"424","household":"1642","buildinglot":"316","other":"722"},
	{"location":"castile and leon","year":"2019","total":"2680","rustic":"195","household":"791","buildinglot":"822","other":"872"},
	{"location":"catalonia","year":"2019","total":"12131","rustic":"169","household":"5757","buildinglot":"634","other":"5571"},
	{"location":"valencian community","year":"2019","total":"11644","rustic":"690","household":"5356","buildinglot":"248","other":"5350"},
	{"location":"extremadura","year":"2019","total":"950","rustic":"68","household":"452","buildinglot":"133","other":"297"},
	{"location":"galicia","year":"2019","total":"2667","rustic":"100","household":"1393","buildinglot":"114","other":"1060"},
	{"location":"community of madrid","year":"2019","total":"3303","rustic":"91","household":"1424","buildinglot":"85","other":"1703"},
	{"location":"region of murcia","year":"2019","total":"4374","rustic":"253","household":"2051","buildinglot":"106","other":"1964"},
	{"location":"community of navarre","year":"2019","total":"174","rustic":"42","household":"54","buildinglot":"5","other":"73"},
	{"location":"basque country","year":"2019","total":"218","rustic":"2","household":"81","buildinglot":"0","other":"135"},
	{"location":"la rioja","year":"2019","total":"495","rustic":"25","household":"143","buildinglot":"21","other":"306"},
	{"location":"ceuta","year":"2019","total":"12","rustic":"0","household":"3","buildinglot":"1","other":"8"},
	{"location":"melilla","year":"2019","total":"6","rustic":"0","household":"5","buildinglot":"0","other":"1"},
	{"location":"andalusia","year":"2018","total":"10123","rustic":"518","household":"5154","buildinglot":"431","other":"4020"}, // ANDALUCIA 2018
	{"location":"aragon","year":"2018","total":"1073","rustic":"47","household":"466","buildinglot":"138","other":"422"},
	{"location":"principality of asturias","year":"2018","total":"1128","rustic":"158","household":"471","buildinglot":"74","other":"425"},
	{"location":"balearic islands","year":"2018","total":"802","rustic":"43","household":"387","buildinglot":"19","other":"353"},
	{"location":"canary islands","year":"2018","total":"3036","rustic":"77","household":"1433","buildinglot":"37","other":"1489"},
	{"location":"cantabria","year":"2018","total":"856","rustic":"51","household":"406","buildinglot":"78","other":"321"},
	{"location":"castilla-la mancha","year":"2018","total":"2919","rustic":"116","household":"1531","buildinglot":"442","other":"830"},
	{"location":"castile and leon","year":"2018","total":"2851","rustic":"179","household":"865","buildinglot":"521","other":"1286"},
	{"location":"catalonia","year":"2018","total":"8841","rustic":"180","household":"4561","buildinglot":"733","other":"3367"},
	{"location":"valencian community","year":"2018","total":"10076","rustic":"512","household":"5242","buildinglot":"378","other":"3944"},
	{"location":"extremadura","year":"2018","total":"952","rustic":"117","household":"463","buildinglot":"178","other":"194"},
	{"location":"galicia","year":"2018","total":"1972","rustic":"183","household":"1076","buildinglot":"64","other":"649"},
	{"location":"community of madrid","year":"2018","total":"4191","rustic":"82","household":"1646","buildinglot":"58","other":"2405"},
	{"location":"region of murcia","year":"2018","total":"3260","rustic":"212","household":"1424","buildinglot":"108","other":"1516"},
	{"location":"community of navarre","year":"2018","total":"342","rustic":"43","household":"173","buildinglot":"14","other":"112"},
	{"location":"basque country","year":"2018","total":"261","rustic":"7","household":"97","buildinglot":"35","other":"122"},
	{"location":"la rioja","year":"2018","total":"1156","rustic":"18","household":"495","buildinglot":"44","other":"599"},
	{"location":"ceuta","year":"2018","total":"10","rustic":"0","household":"6","buildinglot":"0","other":"4"},
	{"location":"melilla","year":"2018","total":"8","rustic":"0","household":"7","buildinglot":"0","other":"1"},
	{"location":"andalusia","year":"2017","total":"13644","rustic":"706","household":"7693","buildinglot":"1054","other":"4191"},
	{"location":"aragon","year":"2017","total":"1122","rustic":"75","household":"513","buildinglot":"111","other":"423"},
	{"location":"principality of asturias","year":"2017","total":"561","rustic":"66","household":"284","buildinglot":"31","other":"180"},
	{"location":"balearic islands","year":"2017","total":"1026","rustic":"54","household":"515","buildinglot":"24","other":"433"},
	{"location":"canary islands","year":"2017","total":"2616","rustic":"66","household":"1349","buildinglot":"100","other":"1101"},
	{"location":"cantabria","year":"2017","total":"341","rustic":"19","household":"222","buildinglot":"6","other":"94"},
	{"location":"castilla-la mancha","year":"2017","total":"2302","rustic":"429","household":"1023","buildinglot":"158","other":"692"},
	{"location":"castile and leon","year":"2017","total":"2425","rustic":"502","household":"695","buildinglot":"173","other":"1055"},
	{"location":"catalonia","year":"2017","total":"7206","rustic":"118","household":"4107","buildinglot":"290","other":"2691"},
	{"location":"valencian community","year":"2017","total":"10212","rustic":"553","household":"5356","buildinglot":"292","other":"4011"},
	{"location":"extremadura","year":"2017","total":"657","rustic":"72","household":"354","buildinglot":"17","other":"214"},
	{"location":"galicia","year":"2017","total":"1790","rustic":"180","household":"787","buildinglot":"49","other":"774"},
	{"location":"community of madrid","year":"2017","total":"3885","rustic":"45","household":"2147","buildinglot":"79","other":"1614"},
	{"location":"region of murcia","year":"2017","total":"3252","rustic":"349","household":"1591","buildinglot":"110","other":"1202"},
	{"location":"community of navarre","year":"2017","total":"206","rustic":"12","household":"129","buildinglot":"7","other":"58"},
	{"location":"basque country","year":"2017","total":"348","rustic":"6","household":"188","buildinglot":"9","other":"145"},
	{"location":"la rioja","year":"2017","total":"342","rustic":"31","household":"165","buildinglot":"13","other":"133"},
	{"location":"ceuta","year":"2017","total":"51","rustic":"0","household":"44","buildinglot":"1","other":"6"},
	{"location":"melilla","year":"2017","total":"13","rustic":"0","household":"9","buildinglot":"0","other":"4"},
	{"location":"andalusia","year":"2016","total":"20611","rustic":"1123","household":"11581","buildinglot":"1314","other":"6593"},
	{"location":"aragon","year":"2016","total":"1441","rustic":"65","household":"929","buildinglot":"66","other":"381"},
	{"location":"principality of asturias","year":"2016","total":"745","rustic":"66","household":"395","buildinglot":"13","other":"271"},
	{"location":"balearic islands","year":"2016","total":"1418","rustic":"95","household":"761","buildinglot":"69","other":"493"},
	{"location":"canary islands","year":"2016","total":"3668","rustic":"99","household":"1952","buildinglot":"115","other":"1502"},
	{"location":"cantabria","year":"2016","total":"629","rustic":"41","household":"340","buildinglot":"34","other":"214"},
	{"location":"castilla-la mancha","year":"2016","total":"2835","rustic":"196","household":"1521","buildinglot":"336","other":"782"},
	{"location":"castile and leon","year":"2016","total":"2565","rustic":"298","household":"987","buildinglot":"323","other":"957"},
	{"location":"catalonia","year":"2016","total":"11195","rustic":"167","household":"6956","buildinglot":"446","other":"3626"},
	{"location":"valencian community","year":"2016","total":"12769","rustic":"687","household":"7638","buildinglot":"253","other":"4191"},
	{"location":"extremadura","year":"2016","total":"893","rustic":"92","household":"490","buildinglot":"52","other":"259"},
	{"location":"galicia","year":"2016","total":"1564","rustic":"132","household":"727","buildinglot":"59","other":"646"},
	{"location":"community of madrid","year":"2016","total":"5958","rustic":"95","household":"3498","buildinglot":"105","other":"2260"},
	{"location":"region of murcia","year":"2016","total":"4893","rustic":"427","household":"2582","buildinglot":"436","other":"1448"},
	{"location":"community of navarre","year":"2016","total":"564","rustic":"4","household":"233","buildinglot":"24","other":"303"},
	{"location":"basque country","year":"2016","total":"520","rustic":"16","household":"214","buildinglot":"57","other":"233"},
	{"location":"la rioja","year":"2016","total":"620","rustic":"127","household":"284","buildinglot":"32","other":"177"},
	{"location":"ceuta","year":"2016","total":"14","rustic":"0","household":"11","buildinglot":"0","other":"3"},
	{"location":"melilla","year":"2016","total":"39","rustic":"0","household":"30","buildinglot":"0","other":"9"},
	{"location":"andalusia","year":"2015","total":"28251","rustic":"1658","household":"16246","buildinglot":"1294","other":"9053"},
	{"location":"aragon","year":"2015","total":"2315","rustic":"130","household":"1287","buildinglot":"72","other":"826"},
	{"location":"principality of asturias","year":"2015","total":"1083","rustic":"107","household":"603","buildinglot":"27","other":"346"},
	{"location":"balearic islands","year":"2015","total":"2408","rustic":"139","household":"1328","buildinglot":"89","other":"852"},
	{"location":"canary islands","year":"2015","total":"5001","rustic":"216","household":"3021","buildinglot":"171","other":"1593"},
	{"location":"cantabria","year":"2015","total":"771","rustic":"57","household":"405","buildinglot":"10","other":"299"},
	{"location":"castilla-la mancha","year":"2015","total":"4883","rustic":"381","household":"2548","buildinglot":"540","other":"1414"},
	{"location":"castile and leon","year":"2015","total":"4403","rustic":"266","household":"1907","buildinglot":"340","other":"1890"},
	{"location":"catalonia","year":"2015","total":"16464","rustic":"283","household":"11110","buildinglot":"476","other":"4595"},
	{"location":"valencian community","year":"2015","total":"17539","rustic":"1030","household":"10714","buildinglot":"420","other":"5375"},
	{"location":"extremadura","year":"2015","total":"1578","rustic":"192","household":"828","buildinglot":"104","other":"454"},
	{"location":"galicia","year":"2015","total":"2570","rustic":"236","household":"1226","buildinglot":"114","other":"994"},
	{"location":"community of madrid","year":"2015","total":"6372","rustic":"107","household":"4250","buildinglot":"156","other":"1859"},
	{"location":"region of murcia","year":"2015","total":"6972","rustic":"394","household":"3612","buildinglot":"338","other":"2628"},
	{"location":"community of navarre","year":"2015","total":"567","rustic":"17","household":"340","buildinglot":"68","other":"142"},
	{"location":"basque country","year":"2015","total":"694","rustic":"43","household":"297","buildinglot":"51","other":"303"},
	{"location":"la rioja","year":"2015","total":"539","rustic":"37","household":"272","buildinglot":"29","other":"201"},
	{"location":"ceuta","year":"2015","total":"29","rustic":"0","household":"17","buildinglot":"0","other":"12"},
	{"location":"melilla","year":"2015","total":"38","rustic":"1","household":"21","buildinglot":"0","other":"16"}
];
var evictions = [];

db.insert(evictions_initial);


module.exports.register = (app) => {
    //codigo PALMA
    //carga inicial de datos
    app.get(BASE_EVICTION_API_PATH + "/evictions/loadInitialData", (req, res) => {
    	//res.send(JSON.stringify(evictions));
    	if (evictions.length == 0){
    		for (var i=0; i<evictions_initial.length; i++){
    			evictions.push(evictions_initial[i]);
    		}
			//db.insert(evictions_initial);
    		//console.log(`Loaded initial data: ${JSON.stringify(sales)}`);
    		console.log(`Loaded initial data`);
    		return res.status(200).json(evictions);
    	}
    
    });

    //GET a la lista de recursos -- CODIGO NUEVO
    app.get(BASE_EVICTION_API_PATH + "/evictions", (req, res) => {
    	/*if (evictions.length !=0) {
    		console.log(`Request evictions`);
    		return res.send(JSON.stringify(evictions));
    	}
    	else {
    		console.log("No data found");
    		return res.sendStatus(404);	
    	}*/
		db.find({}, (err,evictionsInDB)=>{
			if(err){
				console.error("");
				res.sendStatus(500);
			}else{
				var evictionsToSend = evictionsInDB.map((c)=>{
					return {location : c.location, year : c.year, total : c.total, rustic : c.rustic, household : c.household, buildinglot : c.buildinglot, other : c.other};
				});
				res.send(JSON.stringify(evictionsToSend,null,2));
			}
		})
    });

    //POST a la lista de recursoss
    app.post(BASE_EVICTION_API_PATH + "/evictions", (req, res) => {
    	var newEvictions = req.body;
    	var location = req.body.location;
    	var year = parseInt(req.body.year);

    	//con datos
    	if (evictions.length != 0){
    		for (var status of evictions){
    			if (status.location == location && status.year == year){
    				console.log (`Location ${location} and Year ${year} are already in the database`);
    				return res.sendStatus(403);
    			}
    		}
    		if (!newEvictions.location ||
    			!newEvictions.year ||
    			!newEvictions['total'] ||
    			!newEvictions['rustic'] ||
    			!newEvictions['household'] ||
    			!newEvictions['buildinglot'] ||
    			!newEvictions['other']){
    				console.log(`Number of parameters is incorrect`);
    				return res.sendStatus(400);
    			}

    		console.log(`new evictions to be added: <${JSON.stringify(newEvictions, null, 2)}>`);
    		evictions.push(newEvictions);
    		return res.sendStatus(201);
    	}
    	//sin datos
    	else if (!newEvictions.location ||
    		!newEvictions.year ||
    		!newEvictions['total'] ||
    		!newEvictions['rustic'] ||
    		!newEvictions['household'] ||
    		!newEvictions['buildinglot'] ||
    		!newEvictions['other']){
    			console.log(`Number of parameters is incorrect`);
    			return res.sendStatus(400);
    		}
    	else {
    		console.log(`new evictions to be added: <${JSON.stringify(newEvictions, null, 2)}>`);
    		evictions.push(newEvictions);
    		return res.sendStatus(201);
    	}
		/*
		var newEviction = req.body;
		var locationTA = req.body.location;
		//var yearTA = parseInt(req.body.year);
		var yearTA = req.body.year;

		db.find({location: locationTA, year: yearTA},(err, evictionsInDB)=>{
			if(err){
				console.error("ERROR accessing DB in POST: "+err);
				res.sendStatus(500);
			}else{
				if(evictionsInDB.length==0){
					console.log("Inserting new eviction in db: "+JSON.stringify(newEviction,null,2));
					db.insert(newContact);
					res.sendStatus(201); // CREATED
				}else{
					res.sendStatus(409); // CONFLICT
				}
			}
		})
		*/
    });

    //GET a un recurso -- CODIGO NUEVO
    app.get(BASE_EVICTION_API_PATH + "/evictions/:location/:year", (req, res) => {
    /*	var location = req.params.location;
    	var year = parseInt(req.params.year);

    	console.log(`get data by location: ${location} and year ${year}`);
    	for (var status of evictions){
    		if (status.location == location && status.year == year){
    			return res.status(200).json(status);
    		}
    	}
    	console.log (`Data not found`);
    	return res.sendStatus(404);
    });*/
	
		var locationTF = req.params.location;
		//var yearTF = parseInt(req.params.year);
		var yearTF = req.params.year;
		
		//console.log(`get data by location: ${location} and year ${year}`);
		db.find({location: locationTF, year: yearTF}, function(err, evictionsInDB){
		console.log("buscando "+locationTF+" "+yearTF);
			if(err) {
				console.error(err);
				res.sendStatus(404);
			}
			if(evictionsInDB.length==0){
				console.log("Eviction not found: "+locationTF+" "+yearTF);
				res.sendStatus(404); // NOT FOUND
			}else{
				console.log(evictionsInDB);
				var evictionToSend = evictionsInDB.map((c)=>{
					return {location : c.location, year : c.year, total : c.total, rustic : c.rustic, household : c.household, buildinglot : c.buildinglot, other : c.other};
				});
				res.send(JSON.stringify(evictionToSend,null,2));
			}
			
		})
	});

    //DELETE a un recurso -- POSIBLE CODIGO NUEVO (probar cuando haga el post nuevo)
    app.delete(BASE_EVICTION_API_PATH + "/evictions/:location/:year", (req,res) => {
    	var location = req.params.location;
    	var year = parseInt(req.params.year);
    
    	if (evictions.length!=0){
    		for (var i=0; i<evictions.length;i++){
    			if(evictions[i]["location"]==location && evictions[i]["year"]==year){
    				console.log (`DELETE location ${location} and year ${year}`);
    				evictions.splice(i,1)
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
		/*
		var locationTD = req.params.location;
		var yearTD = req.params.year;
		
		db.remove({name: nameTD, year: yearTD},{},(err, numEvictionsRemoved)=>{
			if(err){
				console.error("ERROR deleting DB evictions in DELETE: "+err);
				res.sendStatus(500);
			}else{
				if(numEvictionsRemoved==0){
					res.sendStatus(404); // NOT FOUND
				}else{
					res.sendStatus(200); // OK
				}
			}
		})
		*/

    }); 

    //PUT a un recurso
    app.put(BASE_EVICTION_API_PATH + "/evictions/:location/:year", (req,res) => {
    	var location = req.params.location;
    	var year = parseInt(req.params.year);
    	var newEvictions = req.body;

    	console.log(`Edit ${newEvictions.location} Selected ${location}`);
    	console.log(`Edit ${newEvictions.year} Selected ${year}`);

    	if (evictions.length == 0){
    		console.log (`Database is empty`);
    		return res.sendStatus(404);
    	}
    	else {
    		if (!newEvictions.location ||
    			!newEvictions.year ||
    			!newEvictions['total'] ||
    			!newEvictions['rustic'] ||
    			!newEvictions['household'] ||
    			!newEvictions['buildinglot'] ||
    			!newEvictions['other']){
    				console.log(`Number of parameters is incorrect`);
    				return res.sendStatus(400);
    			}
    		else{
    			for (var i=0; i<evictions.length; i++){
    				if (evictions[i]["location"]==location && evictions[i]["year"]==year){
    					if (newEvictions.location != location){
    						console.log(`Error, location is not editable`);
    						return res.sendStatus(403);	
    					}
    					else if (newEvictions.year != year){
    						console.log(`Error, year is not editable`);
    						return res.sendStatus(403);
    					}
    					else{
    						evictions[i]["location"] = location;
    						evictions[i]["year"] = year;
    						evictions[i]['total'] = newEvictions['total'];
    						evictions[i]['rustic'] = newEvictions['rustic'];
    						evictions[i]['household'] = newEvictions['household'];
    						evictions[i]['buildinglot'] = newEvictions['buildinglot'];
    						evictions[i]['other'] = newEvictions['other'];
    						console.log(`PUT success`);
    						return res.sendStatus(200);
    					}

    				}
    			}
    		}
    	}
    	console.log(`Data not found`);
    	return res.sendStatus(404);           

    });

    //POST a un recurso
    app.post(BASE_EVICTION_API_PATH + "/evictions/:location/:year", (req,res) => {
    	console.log ("Unable to POST to a specific resource");
    	return res.sendStatus(405);
    });
    //PUT a una lista de recursos
    app.put(BASE_EVICTION_API_PATH + "/evictions", (req,res) => {
    	console.log("Unable to PUT to a list of resources");
    	return res.sendStatus(405);
    });

      //DELETE a una lista de recursos -- EL CODIGO NUEVO ES EL COMENTADO
    app.delete(BASE_EVICTION_API_PATH + "/evictions", (req,res) => {
      if (evictions.length==0){
    	  console.log("Array is empty");
    	  return res.sendStatus(404);
      }
      else{
    	evictions = [];
    	console.log("DELETE evictions success");
    	return res.sendStatus(200);
      }
	  /*db.remove({},{multi: true},(err, numEvictionsRemoved)=>{
		  if(err){
			  console.error("ERROR deleting DB evictions: "+err);
			  res.sendStatus(500);
		  }else{
			  if(numEvictionsRemoved==0){
				  res.sendStatus(404);
			  }else{
				  console.log("Evictions deleted");
				  res.sendStatus(200);
			  }
		  }
	  })*/
    });
}