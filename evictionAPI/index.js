var BASE_EVICTION_API_PATH = "/api/v1";

var evictions_initial = [
	{"location":"andalusia","year":"2019","evictions-total":"9834","evictions-rustic":"517","evictions-household":"5681","evictions-buildinglot":"598","evictions-other":"3038"},
	{"location":"aragon","year":"2019","evictions-total":"1152","evictions-rustic":"26","evictions-household":"473","evictions-buildinglot":"121","evictions-other":"532"},
	{"location":"principality of asturias","year":"2019","evictions-total":"920","evictions-rustic":"81","evictions-household":"338","evictions-buildinglot":"38","evictions-other":"463"},
	{"location":"balearic islands","year":"2019","evictions-total":"801","evictions-rustic":"15","evictions-household":"405","evictions-buildinglot":"21","evictions-other":"360"},
	{"location":"canary islands","year":"2019","evictions-total":"1266","evictions-rustic":"57","evictions-household":"630","evictions-buildinglot":"53","evictions-other":"526"},
	{"location":"cantabria","year":"2019","evictions-total":"618","evictions-rustic":"22","evictions-household":"376","evictions-buildinglot":"18","evictions-other":"202"},
	{"location":"castilla-la mancha","year":"2019","evictions-total":"3104","evictions-rustic":"424","evictions-household":"1642","evictions-buildinglot":"316","evictions-other":"722"},
	{"location":"castile and leon","year":"2019","evictions-total":"2680","evictions-rustic":"195","evictions-household":"791","evictions-buildinglot":"822","evictions-other":"872"},
	{"location":"catalonia","year":"2019","evictions-total":"12131","evictions-rustic":"169","evictions-household":"5757","evictions-buildinglot":"634","evictions-other":"5571"},
	{"location":"valencian community","year":"2019","evictions-total":"11644","evictions-rustic":"690","evictions-household":"5356","evictions-buildinglot":"248","evictions-other":"5350"},
	{"location":"extremadura","year":"2019","evictions-total":"950","evictions-rustic":"68","evictions-household":"452","evictions-buildinglot":"133","evictions-other":"297"},
	{"location":"galicia","year":"2019","evictions-total":"2667","evictions-rustic":"100","evictions-household":"1393","evictions-buildinglot":"114","evictions-other":"1060"},
	{"location":"community of madrid","year":"2019","evictions-total":"3303","evictions-rustic":"91","evictions-household":"1424","evictions-buildinglot":"85","evictions-other":"1703"},
	{"location":"region of murcia","year":"2019","evictions-total":"4374","evictions-rustic":"253","evictions-household":"2051","evictions-buildinglot":"106","evictions-other":"1964"},
	{"location":"community of navarre","year":"2019","evictions-total":"174","evictions-rustic":"42","evictions-household":"54","evictions-buildinglot":"5","evictions-other":"73"},
	{"location":"basque country","year":"2019","evictions-total":"218","evictions-rustic":"2","evictions-household":"81","evictions-buildinglot":"0","evictions-other":"135"},
	{"location":"la rioja","year":"2019","evictions-total":"495","evictions-rustic":"25","evictions-household":"143","evictions-buildinglot":"21","evictions-other":"306"},
	{"location":"ceuta","year":"2019","evictions-total":"12","evictions-rustic":"0","evictions-household":"3","evictions-buildinglot":"1","evictions-other":"8"},
	{"location":"melilla","year":"2019","evictions-total":"6","evictions-rustic":"0","evictions-household":"5","evictions-buildinglot":"0","evictions-other":"1"},
	{"location":"andalusia","year":"2018","evictions-total":"10123","evictions-rustic":"518","evictions-household":"5154","evictions-buildinglot":"431","evictions-other":"4020"},
	{"location":"aragon","year":"2018","evictions-total":"1073","evictions-rustic":"47","evictions-household":"466","evictions-buildinglot":"138","evictions-other":"422"},
	{"location":"principality of asturias","year":"2018","evictions-total":"1128","evictions-rustic":"158","evictions-household":"471","evictions-buildinglot":"74","evictions-other":"425"},
	{"location":"balearic islands","year":"2018","evictions-total":"802","evictions-rustic":"43","evictions-household":"387","evictions-buildinglot":"19","evictions-other":"353"},
	{"location":"canary islands","year":"2018","evictions-total":"3036","evictions-rustic":"77","evictions-household":"1433","evictions-buildinglot":"37","evictions-other":"1489"},
	{"location":"cantabria","year":"2018","evictions-total":"856","evictions-rustic":"51","evictions-household":"406","evictions-buildinglot":"78","evictions-other":"321"},
	{"location":"castilla-la mancha","year":"2018","evictions-total":"2919","evictions-rustic":"116","evictions-household":"1531","evictions-buildinglot":"442","evictions-other":"830"},
	{"location":"castile and leon","year":"2018","evictions-total":"2851","evictions-rustic":"179","evictions-household":"865","evictions-buildinglot":"521","evictions-other":"1286"},
	{"location":"catalonia","year":"2018","evictions-total":"8841","evictions-rustic":"180","evictions-household":"4561","evictions-buildinglot":"733","evictions-other":"3367"},
	{"location":"valencian community","year":"2018","evictions-total":"10076","evictions-rustic":"512","evictions-household":"5242","evictions-buildinglot":"378","evictions-other":"3944"},
	{"location":"extremadura","year":"2018","evictions-total":"952","evictions-rustic":"117","evictions-household":"463","evictions-buildinglot":"178","evictions-other":"194"},
	{"location":"galicia","year":"2018","evictions-total":"1972","evictions-rustic":"183","evictions-household":"1076","evictions-buildinglot":"64","evictions-other":"649"},
	{"location":"community of madrid","year":"2018","evictions-total":"4191","evictions-rustic":"82","evictions-household":"1646","evictions-buildinglot":"58","evictions-other":"2405"},
	{"location":"region of murcia","year":"2018","evictions-total":"3260","evictions-rustic":"212","evictions-household":"1424","evictions-buildinglot":"108","evictions-other":"1516"},
	{"location":"community of navarre","year":"2018","evictions-total":"342","evictions-rustic":"43","evictions-household":"173","evictions-buildinglot":"14","evictions-other":"112"},
	{"location":"basque country","year":"2018","evictions-total":"261","evictions-rustic":"7","evictions-household":"97","evictions-buildinglot":"35","evictions-other":"122"},
	{"location":"la rioja","year":"2018","evictions-total":"1156","evictions-rustic":"18","evictions-household":"495","evictions-buildinglot":"44","evictions-other":"599"},
	{"location":"ceuta","year":"2018","evictions-total":"10","evictions-rustic":"0","evictions-household":"6","evictions-buildinglot":"0","evictions-other":"4"},
	{"location":"melilla","year":"2018","evictions-total":"8","evictions-rustic":"0","evictions-household":"7","evictions-buildinglot":"0","evictions-other":"1"},
	{"location":"andalusia","year":"2017","evictions-total":"13644","evictions-rustic":"706","evictions-household":"7693","evictions-buildinglot":"1054","evictions-other":"4191"},
	{"location":"aragon","year":"2017","evictions-total":"1122","evictions-rustic":"75","evictions-household":"513","evictions-buildinglot":"111","evictions-other":"423"},
	{"location":"principality of asturias","year":"2017","evictions-total":"561","evictions-rustic":"66","evictions-household":"284","evictions-buildinglot":"31","evictions-other":"180"},
	{"location":"balearic islands","year":"2017","evictions-total":"1026","evictions-rustic":"54","evictions-household":"515","evictions-buildinglot":"24","evictions-other":"433"},
	{"location":"canary islands","year":"2017","evictions-total":"2616","evictions-rustic":"66","evictions-household":"1349","evictions-buildinglot":"100","evictions-other":"1101"},
	{"location":"cantabria","year":"2017","evictions-total":"341","evictions-rustic":"19","evictions-household":"222","evictions-buildinglot":"6","evictions-other":"94"},
	{"location":"castilla-la mancha","year":"2017","evictions-total":"2302","evictions-rustic":"429","evictions-household":"1023","evictions-buildinglot":"158","evictions-other":"692"},
	{"location":"castile and leon","year":"2017","evictions-total":"2425","evictions-rustic":"502","evictions-household":"695","evictions-buildinglot":"173","evictions-other":"1055"},
	{"location":"catalonia","year":"2017","evictions-total":"7206","evictions-rustic":"118","evictions-household":"4107","evictions-buildinglot":"290","evictions-other":"2691"},
	{"location":"valencian community","year":"2017","evictions-total":"10212","evictions-rustic":"553","evictions-household":"5356","evictions-buildinglot":"292","evictions-other":"4011"},
	{"location":"extremadura","year":"2017","evictions-total":"657","evictions-rustic":"72","evictions-household":"354","evictions-buildinglot":"17","evictions-other":"214"},
	{"location":"galicia","year":"2017","evictions-total":"1790","evictions-rustic":"180","evictions-household":"787","evictions-buildinglot":"49","evictions-other":"774"},
	{"location":"community of madrid","year":"2017","evictions-total":"3885","evictions-rustic":"45","evictions-household":"2147","evictions-buildinglot":"79","evictions-other":"1614"},
	{"location":"region of murcia","year":"2017","evictions-total":"3252","evictions-rustic":"349","evictions-household":"1591","evictions-buildinglot":"110","evictions-other":"1202"},
	{"location":"community of navarre","year":"2017","evictions-total":"206","evictions-rustic":"12","evictions-household":"129","evictions-buildinglot":"7","evictions-other":"58"},
	{"location":"basque country","year":"2017","evictions-total":"348","evictions-rustic":"6","evictions-household":"188","evictions-buildinglot":"9","evictions-other":"145"},
	{"location":"la rioja","year":"2017","evictions-total":"342","evictions-rustic":"31","evictions-household":"165","evictions-buildinglot":"13","evictions-other":"133"},
	{"location":"ceuta","year":"2017","evictions-total":"51","evictions-rustic":"0","evictions-household":"44","evictions-buildinglot":"1","evictions-other":"6"},
	{"location":"melilla","year":"2017","evictions-total":"13","evictions-rustic":"0","evictions-household":"9","evictions-buildinglot":"0","evictions-other":"4"},
	{"location":"andalusia","year":"2016","evictions-total":"20611","evictions-rustic":"1123","evictions-household":"11581","evictions-buildinglot":"1314","evictions-other":"6593"},
	{"location":"aragon","year":"2016","evictions-total":"1441","evictions-rustic":"65","evictions-household":"929","evictions-buildinglot":"66","evictions-other":"381"},
	{"location":"principality of asturias","year":"2016","evictions-total":"745","evictions-rustic":"66","evictions-household":"395","evictions-buildinglot":"13","evictions-other":"271"},
	{"location":"balearic islands","year":"2016","evictions-total":"1418","evictions-rustic":"95","evictions-household":"761","evictions-buildinglot":"69","evictions-other":"493"},
	{"location":"canary islands","year":"2016","evictions-total":"3668","evictions-rustic":"99","evictions-household":"1952","evictions-buildinglot":"115","evictions-other":"1502"},
	{"location":"cantabria","year":"2016","evictions-total":"629","evictions-rustic":"41","evictions-household":"340","evictions-buildinglot":"34","evictions-other":"214"},
	{"location":"castilla-la mancha","year":"2016","evictions-total":"2835","evictions-rustic":"196","evictions-household":"1521","evictions-buildinglot":"336","evictions-other":"782"},
	{"location":"castile and leon","year":"2016","evictions-total":"2565","evictions-rustic":"298","evictions-household":"987","evictions-buildinglot":"323","evictions-other":"957"},
	{"location":"catalonia","year":"2016","evictions-total":"11195","evictions-rustic":"167","evictions-household":"6956","evictions-buildinglot":"446","evictions-other":"3626"},
	{"location":"valencian community","year":"2016","evictions-total":"12769","evictions-rustic":"687","evictions-household":"7638","evictions-buildinglot":"253","evictions-other":"4191"},
	{"location":"extremadura","year":"2016","evictions-total":"893","evictions-rustic":"92","evictions-household":"490","evictions-buildinglot":"52","evictions-other":"259"},
	{"location":"galicia","year":"2016","evictions-total":"1564","evictions-rustic":"132","evictions-household":"727","evictions-buildinglot":"59","evictions-other":"646"},
	{"location":"community of madrid","year":"2016","evictions-total":"5958","evictions-rustic":"95","evictions-household":"3498","evictions-buildinglot":"105","evictions-other":"2260"},
	{"location":"region of murcia","year":"2016","evictions-total":"4893","evictions-rustic":"427","evictions-household":"2582","evictions-buildinglot":"436","evictions-other":"1448"},
	{"location":"community of navarre","year":"2016","evictions-total":"564","evictions-rustic":"4","evictions-household":"233","evictions-buildinglot":"24","evictions-other":"303"},
	{"location":"basque country","year":"2016","evictions-total":"520","evictions-rustic":"16","evictions-household":"214","evictions-buildinglot":"57","evictions-other":"233"},
	{"location":"la rioja","year":"2016","evictions-total":"620","evictions-rustic":"127","evictions-household":"284","evictions-buildinglot":"32","evictions-other":"177"},
	{"location":"ceuta","year":"2016","evictions-total":"14","evictions-rustic":"0","evictions-household":"11","evictions-buildinglot":"0","evictions-other":"3"},
	{"location":"melilla","year":"2016","evictions-total":"39","evictions-rustic":"0","evictions-household":"30","evictions-buildinglot":"0","evictions-other":"9"},
	{"location":"andalusia","year":"2015","evictions-total":"28251","evictions-rustic":"1658","evictions-household":"16246","evictions-buildinglot":"1294","evictions-other":"9053"},
	{"location":"aragon","year":"2015","evictions-total":"2315","evictions-rustic":"130","evictions-household":"1287","evictions-buildinglot":"72","evictions-other":"826"},
	{"location":"principality of asturias","year":"2015","evictions-total":"1083","evictions-rustic":"107","evictions-household":"603","evictions-buildinglot":"27","evictions-other":"346"},
	{"location":"balearic islands","year":"2015","evictions-total":"2408","evictions-rustic":"139","evictions-household":"1328","evictions-buildinglot":"89","evictions-other":"852"},
	{"location":"canary islands","year":"2015","evictions-total":"5001","evictions-rustic":"216","evictions-household":"3021","evictions-buildinglot":"171","evictions-other":"1593"},
	{"location":"cantabria","year":"2015","evictions-total":"771","evictions-rustic":"57","evictions-household":"405","evictions-buildinglot":"10","evictions-other":"299"},
	{"location":"castilla-la mancha","year":"2015","evictions-total":"4883","evictions-rustic":"381","evictions-household":"2548","evictions-buildinglot":"540","evictions-other":"1414"},
	{"location":"castile and leon","year":"2015","evictions-total":"4403","evictions-rustic":"266","evictions-household":"1907","evictions-buildinglot":"340","evictions-other":"1890"},
	{"location":"catalonia","year":"2015","evictions-total":"16464","evictions-rustic":"283","evictions-household":"11110","evictions-buildinglot":"476","evictions-other":"4595"},
	{"location":"valencian community","year":"2015","evictions-total":"17539","evictions-rustic":"1030","evictions-household":"10714","evictions-buildinglot":"420","evictions-other":"5375"},
	{"location":"extremadura","year":"2015","evictions-total":"1578","evictions-rustic":"192","evictions-household":"828","evictions-buildinglot":"104","evictions-other":"454"},
	{"location":"galicia","year":"2015","evictions-total":"2570","evictions-rustic":"236","evictions-household":"1226","evictions-buildinglot":"114","evictions-other":"994"},
	{"location":"community of madrid","year":"2015","evictions-total":"6372","evictions-rustic":"107","evictions-household":"4250","evictions-buildinglot":"156","evictions-other":"1859"},
	{"location":"region of murcia","year":"2015","evictions-total":"6972","evictions-rustic":"394","evictions-household":"3612","evictions-buildinglot":"338","evictions-other":"2628"},
	{"location":"community of navarre","year":"2015","evictions-total":"567","evictions-rustic":"17","evictions-household":"340","evictions-buildinglot":"68","evictions-other":"142"},
	{"location":"basque country","year":"2015","evictions-total":"694","evictions-rustic":"43","evictions-household":"297","evictions-buildinglot":"51","evictions-other":"303"},
	{"location":"la rioja","year":"2015","evictions-total":"539","evictions-rustic":"37","evictions-household":"272","evictions-buildinglot":"29","evictions-other":"201"},
	{"location":"ceuta","year":"2015","evictions-total":"29","evictions-rustic":"0","evictions-household":"17","evictions-buildinglot":"0","evictions-other":"12"},
	{"location":"melilla","year":"2015","evictions-total":"38","evictions-rustic":"1","evictions-household":"21","evictions-buildinglot":"0","evictions-other":"16"}
];
var evictions = [];



module.exports.register = (app) => {
    //codigo PALMA
    //carga inicial de datos
    app.get(BASE_EVICTION_API_PATH + "/evictions/loadInitialData", (req, res) => {
    	//res.send(JSON.stringify(evictions));
    	if (evictions.length == 0){
    		for (var i=0; i<evictions_initial.length; i++){
    			evictions.push(evictions_initial[i]);
    		}
    		//console.log(`Loaded initial data: ${JSON.stringify(sales)}`);
    		console.log(`Loaded initial data`);
    		return res.status(200).json(evictions);
    	}
    
    });

    //GET a la lista de recursos
    app.get(BASE_EVICTION_API_PATH + "/evictions", (req, res) => {
    	if (evictions.length !=0) {
    		console.log(`Request evictions`);
    		return res.send(JSON.stringify(evictions));
    	}
    	else {
    		console.log("No data found");
    		return res.sendStatus(404);	
    	}
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
    			!newEvictions['evictions-total'] ||
    			!newEvictions['evictions-rustic'] ||
    			!newEvictions['evictions-household'] ||
    			!newEvictions['evictions-buildinglot'] ||
    			!newEvictions['evictions-other']){
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
    		!newEvictions['evictions-total'] ||
    		!newEvictions['evictions-rustic'] ||
    		!newEvictions['evictions-household'] ||
    		!newEvictions['evictions-buildinglot'] ||
    		!newEvictions['evictions-other']){
    			console.log(`Number of parameters is incorrect`);
    			return res.sendStatus(400);
    		}
    	else {
    		console.log(`new evictions to be added: <${JSON.stringify(newEvictions, null, 2)}>`);
    		evictions.push(newEvictions);
    		return res.sendStatus(201);
    	}
    });

    //GET a un recurso
    app.get(BASE_EVICTION_API_PATH + "/evictions/:location/:year", (req, res) => {
    	var location = req.params.location;
    	var year = parseInt(req.params.year);

    	console.log(`get data by location: ${location} and year ${year}`);
    	for (var status of evictions){
    		if (status.location == location && status.year == year){
    			return res.status(200).json(status);
    		}
    	}
    	console.log (`Data not found`);
    	return res.sendStatus(404);
    });

    //DELETE a un recurso
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
    			!newEvictions['evictions-total'] ||
    			!newEvictions['evictions-rustic'] ||
    			!newEvictions['evictions-household'] ||
    			!newEvictions['evictions-buildinglot'] ||
    			!newEvictions['evictions-other']){
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
    						evictions[i]['evictions-total'] = newEvictions['evictions-total'];
    						evictions[i]['evictions-rustic'] = newEvictions['evictions-rustic'];
    						evictions[i]['evictions-household'] = newEvictions['evictions-household'];
    						evictions[i]['evictions-buildinglot'] = newEvictions['evictions-buildinglot'];
    						evictions[i]['evictions-other'] = newEvictions['evictions-other'];
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

      //DELETE a una lista de recursos
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
    });
}