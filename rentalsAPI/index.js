var BASE_RENTALS_API_PATH = "/api/v1";

var rentalsInitial =
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

	var rentals = [];



    module.exports.register = (app) =>{
            //carga inicial de datos
            
        app.get(BASE_RENTALS_API_PATH + "/rentals/loadInitialData", (req, res) => {
            //res.send(JSON.stringify(rentals));
            if (rentals.length == 0){
                for (var i=0; i<rentalsInitial.length; i++){
                    rentals.push(rentalsInitial[i]);
                }
                //console.log(`Loaded initial data: ${JSON.stringify(rentals)}`);
                console.log(`Loaded initial data`);
                return res.status(200).json(rentals);
            }
            
        });

        //GET a la lista de recursos
        app.get(BASE_RENTALS_API_PATH + "/rentals", (req, res) => {
            if (rentals.length !=0) {
                console.log(`Request rentals`);
                return res.send(JSON.stringify(rentals));
            }
            else {
                console.log("No data found");
                return res.sendStatus(404);	
            }
        });
        //POST a la lista de recursoss
        app.post(BASE_RENTALS_API_PATH + "/rentals", (req, res) => {
            var newRentals = req.body;
            var location = req.body.location;
            var year = parseInt(req.body.year);

            //con datos
            if (rentals.length != 0){
                for (var status of rentals){
                    if (status.location == location && status.year == year){
                        console.log (`Location ${location} and Year ${year} are already in the database`);
                        return res.sendStatus(403);
                    }
                }
                if (!newRentals.location ||
                    !newRentals.year ||
                    !newRentals['price-square-meter'] ||
                    !newRentals['annual-variation'] ||
                    !newRentals['all-time-high'] ||
                    !newRentals['max-variation']){
                        console.log(`Number of parameters is incorrect`);
                        return res.sendStatus(400);
                    }
                    /*else if (newRentals['rentals-total'] != (/^([0-9])*$/) ||
                    newRentals['rentals-protected-housing']!=/^([0-9])*$/ ||
                    newRentals['rentals-new']!=/^([0-9])*$/ ||
                    newRentals['rentals-secondhand']!=/^([0-9])*$/){
                        console.log(`Only numbers are allowed`);
                        console.log(`${newRentals['rentals-total']}`);
                        console.log(`${newRentals['rentals-protected-housing']}`);
                        console.log(`${newRentals['rentals-new']}`);
                        console.log(`${newRentals['rentals-secondhand']}`);
                        return res.sendStatus(400);
                    }*/
                
                console.log(`new rentals to be added: <${JSON.stringify(newRentals, null, 2)}>`);
                rentals.push(newRentals);
                return res.sendStatus(201);
            }
            //sin datos
            else if (!newRentals.location ||
                !newRentals.year ||
                !newRentals['price-square-meter'] ||
                !newRentals['annual-variation'] ||
                !newRentals['all-time-high'] ||
                !newRentals['max-variation']){
                    console.log(`Number of parameters is incorrect`);
                    return res.sendStatus(400);
                }
            else {
                console.log(`new rentals to be added: <${JSON.stringify(newRentals, null, 2)}>`);
                rentals.push(newRentals);
                return res.sendStatus(201);
            }
        });
        //GET a un recurso
        app.get(BASE_RENTALS_API_PATH + "/rentals/:location/:year", (req, res) => {
            var location = req.params.location;
            var year = parseInt(req.params.year);

            console.log(`get data by location: ${location} and year ${year}`);
            for (var status of rentals){
                if (status.location == location && status.year == year){
                    return res.status(200).json(status);
                }
            }
            console.log (`Data not found`);
            return res.sendStatus(404);
        });

        //DELETE a un recurso
        app.delete(BASE_RENTALS_API_PATH + "/rentals/:location/:year", (req,res) => {
            var location = req.params.location;
            var year = parseInt(req.params.year);
            
            if (rentals.length!=0){
                for (var i=0; i<rentals.length;i++){
                    if(rentals[i]["location"]==location && rentals[i]["year"]==year){
                        console.log (`DELETE location ${location} and year ${year}`);
                        rentals.splice(i,1)
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
        app.put(BASE_RENTALS_API_PATH + "/rentals/:location/:year", (req,res) => {
            var location = req.params.location;
            var year = parseInt(req.params.year);
            var newRentals = req.body;

            console.log(`Edit ${newRentals.location} Selected ${location}`);
            console.log(`Edit ${newRentals.year} Selected ${year}`);

            if (rentals.length == 0){
                console.log (`Database is empty`);
                return res.sendStatus(404);
            }
            else {
                if (!newRentals.location ||
                    !newRentals.year ||
                    !newRentals['price-square-meter'] ||
                    !newRentals['annual-variation'] ||
                    !newRentals['all-time-high'] ||
                    !newRentals['max-variation']){
                        console.log(`Number of parameters is incorrect`);
                        return res.sendStatus(400);
                    }
                else{
                    for (var i=0; i<rentals.length; i++){
                        if (rentals[i]["location"]==location && rentals[i]["year"]==year){
                            if (newRentals.location != location){
                                console.log(`Error, location is not editable`);
                                return res.sendStatus(403);	
                            }
                            else if (newRentals.year != year){
                                console.log(`Error, year is not editable`);
                                return res.sendStatus(403);
                            }
                            else{
                                rentals[i]["location"] = location;
                                rentals[i]["year"] = year;
                                rentals[i]['price-square-meter'] = newRentals['price-square-meter'];
                                rentals[i]['annual-variation'] = newRentals['annual-variation'];
                                rentals[i]['all-time-high'] = newRentals['all-time-high'];
                                rentals[i]['max-variation'] = newRentals['max-variation'];
                                //rentals[i] = newRentals;
                                //console.log(req.body);
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
        app.post(BASE_RENTALS_API_PATH + "/rentals/:location/:year", (req,res) => {
            console.log ("Unable to POST to a specific resource");
            return res.sendStatus(405);
        });
        //PUT a una lista de recursos
        app.put(BASE_RENTALS_API_PATH + "/rentals", (req,res) => {
            console.log("Unable to PUT to a list of resources");
            return res.sendStatus(405);
        });
        
        //DELETE a una lista de recursos
        app.delete(BASE_RENTALS_API_PATH + "/rentals", (req,res) => {
            if (rentals.length==0){
                console.log("Array is empty");
                return res.sendStatus(404);
            }
            else{
                rentals = [];
                console.log("DELETE rentals success");
                return res.sendStatus(200);
            }
        });
    };
	