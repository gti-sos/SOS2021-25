var BASE_RENTALS_API_PATH = "/api/v1";
var path = require('path');

var Datastore = require("nedb");
var datafile = path.join(__dirname, 'rentals-stats.db');
var db = new Datastore({ filename: datafile, autoload: true });

var rentalsInitial =
	[
		{ "location": "andalusia", "year": "2019", "pricesquaremeter": "8.5", "annualvariation": "7", "alltimehigh": "9.5", "maxvariation": "-9.9" },
		{ "location": "aragon", "year": "2019", "pricesquaremeter": "7.8", "annualvariation": "9.1", "alltimehigh": "8.2", "maxvariation": "-4" },
		{ "location": "principality of asturias", "year": "2019", "pricesquaremeter": "7.2", "annualvariation": "4.6", "alltimehigh": "10.8", "maxvariation": "-33.2" },
		{ "location": "balearic islands", "year": "2019", "pricesquaremeter": "12.6", "annualvariation": "2", "alltimehigh": "14", "maxvariation": "-9.6" },
		{ "location": "canary islands", "year": "2019", "pricesquaremeter": "10", "annualvariation": "3.3", "alltimehigh": "10.3", "maxvariation": "-2.7" },
		{ "location": "cantabria", "year": "2019", "pricesquaremeter": "7.6", "annualvariation": "4.3", "alltimehigh": "12.7", "maxvariation": "-40.2" },
		{ "location": "castile and leon", "year": "2019", "pricesquaremeter": "6.5", "annualvariation": "5.8", "alltimehigh": "7", "maxvariation": "-7.7" },
		{ "location": "castilla-la mancha", "year": "2019", "pricesquaremeter": "5.4", "annualvariation": "6.6", "alltimehigh": "5.8", "maxvariation": "-6.6" },
		{ "location": "catalonia", "year": "2019", "pricesquaremeter": "14.2", "annualvariation": "4.4", "alltimehigh": "15.2", "maxvariation": "-6.8" },
		{ "location": "valencian community", "year": "2019", "pricesquaremeter": "7.5", "annualvariation": "7.4", "alltimehigh": "9.4", "maxvariation": "-19.9" },
		{ "location": "basque country", "year": "2019", "pricesquaremeter": "11.9", "annualvariation": "5.1", "alltimehigh": "12.3", "maxvariation": "-3.9" },
		{ "location": "extremadura", "year": "2019", "pricesquaremeter": "5", "annualvariation": "5.3", "alltimehigh": "5.4", "maxvariation": "-6.5" },
		{ "location": "galicia", "year": "2019", "pricesquaremeter": "6.6", "annualvariation": "0.7", "alltimehigh": "8.7", "maxvariation": "-24.8" },
		{ "location": "la rioja", "year": "2019", "pricesquaremeter": "6.5", "annualvariation": "8.7", "alltimehigh": "6.8", "maxvariation": "-4.2" },
		{ "location": "community of madrid", "year": "2019", "pricesquaremeter": "14.7", "annualvariation": "3.6", "alltimehigh": "15.4", "maxvariation": "-4" },
		{ "location": "melilla", "year": "2019", "pricesquaremeter": "8.4", "annualvariation": "-0.6", "alltimehigh": "9.5", "maxvariation": "-11.3" },
		{ "location": "region of murcia", "year": "2019", "pricesquaremeter": "6.1", "annualvariation": "7.5", "alltimehigh": "7.1", "maxvariation": "-13.9" },
		{ "location": "community of navarre", "year": "2019", "pricesquaremeter": "8.5", "annualvariation": "10.6", "alltimehigh": "8.8", "maxvariation": "-3.4" },
		{ "location": "andalusia", "year": "2018", "pricesquaremeter": "8", "annualvariation": "96", "alltimehigh": "9.5", "maxvariation": "-15.7" },
		{ "location": "aragon", "year": "2018", "pricesquaremeter": "7.2", "annualvariation": "6.6", "alltimehigh": "8.2", "maxvariation": "-12" },
		{ "location": "principality of asturias", "year": "2018", "pricesquaremeter": "6.9", "annualvariation": "3.9", "alltimehigh": "10.8", "maxvariation": "-36.1" },
		{ "location": "balearic islands", "year": "2018", "pricesquaremeter": "12.4", "annualvariation": "4.2", "alltimehigh": "14", "maxvariation": "-11.4" },
		{ "location": "canary islands", "year": "2018", "pricesquaremeter": "9.7", "annualvariation": "10.8", "alltimehigh": "10.3", "maxvariation": "-5.9" },
		{ "location": "cantabria", "year": "2018", "pricesquaremeter": "7.3", "annualvariation": "7.7", "alltimehigh": "12.7", "maxvariation": "-42.6" },
		{ "location": "castile and leon", "year": "2018", "pricesquaremeter": "6.1", "annualvariation": "6.1", "alltimehigh": "7", "maxvariation": "-12.8" },
		{ "location": "castilla-la mancha", "year": "2018", "pricesquaremeter": "5.1", "annualvariation": "6.6", "alltimehigh": "5.8", "maxvariation": "-12.4" },
		{ "location": "catalonia", "year": "2018", "pricesquaremeter": "13.6", "annualvariation": "-0.5", "alltimehigh": "15.2", "maxvariation": "-10.8" },
		{ "location": "valencian community", "year": "2018", "pricesquaremeter": "7", "annualvariation": "7.2", "alltimehigh": "9.4", "maxvariation": "-25.4" },
		{ "location": "basque country", "year": "2018", "pricesquaremeter": "11.3", "annualvariation": "3.5", "alltimehigh": "12.3", "maxvariation": "-8.5" },
		{ "location": "extremadura", "year": "2018", "pricesquaremeter": "4.8", "annualvariation": "0.4", "alltimehigh": "5.4", "maxvariation": "-11.2" },
		{ "location": "galicia", "year": "2018", "pricesquaremeter": "6.1", "annualvariation": "5.5", "alltimehigh": "8.7", "maxvariation": "-29.7" },
		{ "location": "la rioja", "year": "2018", "pricesquaremeter": "6", "annualvariation": "0.9", "alltimehigh": "6.8", "maxvariation": "-11.9" },
		{ "location": "community of madrid", "year": "2018", "pricesquaremeter": "14.2", "annualvariation": "9.6", "alltimehigh": "15.4", "maxvariation": "-7.3" },
		{ "location": "melilla", "year": "2018", "pricesquaremeter": "8.5", "annualvariation": "-2", "alltimehigh": "9.5", "maxvariation": "-10.8" },
		{ "location": "region of murcia", "year": "2018", "pricesquaremeter": "5.7", "annualvariation": "7.1", "alltimehigh": "7.1", "maxvariation": "-19.9" },
		{ "location": "community of navarre", "year": "2018", "pricesquaremeter": "7.7", "annualvariation": "10.9", "alltimehigh": "8.8", "maxvariation": "-12.6" },
		{ "location": "andalusia", "year": "2017", "pricesquaremeter": "7.3", "annualvariation": "11.2", "alltimehigh": "9.5", "maxvariation": "-23.1" },
		{ "location": "aragon", "year": "2016", "pricesquaremeter": "6.7", "annualvariation": "5.6", "alltimehigh": "8.2", "maxvariation": "-17.5" },
		{ "location": "principality of asturias", "year": "2016", "pricesquaremeter": "6.6", "annualvariation": "5.6", "alltimehigh": "10.8", "maxvariation": "-38.5" },
		{ "location": "balearic islands", "year": "2016", "pricesquaremeter": "11.9", "annualvariation": "16.8", "alltimehigh": "14", "maxvariation": "-14.9" },
		{ "location": "canary islands", "year": "2016", "pricesquaremeter": "8.7", "annualvariation": "19.8", "alltimehigh": "10.3", "maxvariation": "-15" },
		{ "location": "cantabria", "year": "2016", "pricesquaremeter": "6.8", "annualvariation": "3.4", "alltimehigh": "12.7", "maxvariation": "-46.7" },
		{ "location": "castile and leon", "year": "2016", "pricesquaremeter": "5.8", "annualvariation": "5.9", "alltimehigh": "7", "maxvariation": "-17.8" },
		{ "location": "castilla-la mancha", "year": "2016", "pricesquaremeter": "4.8", "annualvariation": "4.8", "alltimehigh": "5.8", "maxvariation": "-17.8" },
		{ "location": "catalonia", "year": "2016", "pricesquaremeter": "13.7", "annualvariation": "13.4", "alltimehigh": "15.2", "maxvariation": "-10.3" },
		{ "location": "valencian community", "year": "2016", "pricesquaremeter": "6.5", "annualvariation": "10.9", "alltimehigh": "9.4", "maxvariation": "-30.4" },
		{ "location": "basque country", "year": "2016", "pricesquaremeter": "10.9", "annualvariation": "6.4", "alltimehigh": "12.3", "maxvariation": "-11.6" },
		{ "location": "extremadura", "year": "2016", "pricesquaremeter": "4.8", "annualvariation": "5", "alltimehigh": "5.4", "maxvariation": "-11.6" },
		{ "location": "galicia", "year": "2016", "pricesquaremeter": "5.8", "annualvariation": "4.8", "alltimehigh": "8.7", "maxvariation": "-33.3" },
		{ "location": "la rioja", "year": "2016", "pricesquaremeter": "5.5", "annualvariation": "5.7", "alltimehigh": "6.8", "maxvariation": "-19.2" },
		{ "location": "community of madrid", "year": "2016", "pricesquaremeter": "13", "annualvariation": "10.6", "alltimehigh": "15.4", "maxvariation": "-15.5" },
		{ "location": "melilla", "year": "2016", "pricesquaremeter": "8.7", "annualvariation": "7", "alltimehigh": "9.5", "maxvariation": "-9" },
		{ "location": "region of murcia", "year": "2016", "pricesquaremeter": "5.3", "annualvariation": "7.9", "alltimehigh": "7.1", "maxvariation": "-25.2" },
		{ "location": "community of navarre", "year": "2016", "pricesquaremeter": "6.9", "annualvariation": "6.9", "alltimehigh": "8.8", "maxvariation": "-21.2" },
		{ "location": "andalusia", "year": "2015", "pricesquaremeter": "6.5", "annualvariation": "6", "alltimehigh": "9.5", "maxvariation": "-30.8" },
		{ "location": "aragon", "year": "2015", "pricesquaremeter": "6.4", "annualvariation": "5.5", "alltimehigh": "8.2", "maxvariation": "-21.8" },
		{ "location": "principality of asturias", "year": "2015", "pricesquaremeter": "6.3", "annualvariation": "5", "alltimehigh": "10.8", "maxvariation": "-41.8" },
		{ "location": "balearic islands", "year": "2015", "pricesquaremeter": "10.2", "annualvariation": "23.8", "alltimehigh": "14", "maxvariation": "-27.2" },
		{ "location": "canary islands", "year": "2015", "pricesquaremeter": "7.3", "annualvariation": "6.2", "alltimehigh": "10.3", "maxvariation": "-29" },
		{ "location": "cantabria", "year": "2015", "pricesquaremeter": "6.6", "annualvariation": "6.8", "alltimehigh": "12.7", "maxvariation": "-48.5" },
		{ "location": "castile and leon", "year": "2015", "pricesquaremeter": "5.4", "annualvariation": "4", "alltimehigh": "7", "maxvariation": "-22.4" },
		{ "location": "castilla-la mancha", "year": "2015", "pricesquaremeter": "4.5", "annualvariation": "2", "alltimehigh": "5.8", "maxvariation": "-21.6" },
		{ "location": "catalonia", "year": "2015", "pricesquaremeter": "12", "annualvariation": "19.9", "alltimehigh": "15.2", "maxvariation": "-20.9" },
		{ "location": "valencian community", "year": "2015", "pricesquaremeter": "5.9", "annualvariation": "9.5", "alltimehigh": "9.4", "maxvariation": "-37.3" },
		{ "location": "basque country", "year": "2015", "pricesquaremeter": "10.3", "annualvariation": "5", "alltimehigh": "12.3", "maxvariation": "-16.9" },
		{ "location": "extremadura", "year": "2015", "pricesquaremeter": "4.5", "annualvariation": "6.8", "alltimehigh": "5.4", "maxvariation": "-15.8" },
		{ "location": "galicia", "year": "2015", "pricesquaremeter": "5.6", "annualvariation": "2.7", "alltimehigh": "8.7", "maxvariation": "-36.4" },
		{ "location": "la rioja", "year": "2015", "pricesquaremeter": "5.2", "annualvariation": "3.3", "alltimehigh": "6.8", "maxvariation": "-23.6" },
		{ "location": "community of madrid", "year": "2015", "pricesquaremeter": "11.7", "annualvariation": "9.6", "alltimehigh": "15.4", "maxvariation": "-23.6" },
		{ "location": "melilla", "year": "2015", "pricesquaremeter": "8.1", "annualvariation": "-3.3", "alltimehigh": "9.5", "maxvariation": "-15" },
		{ "location": "region of murcia", "year": "2015", "pricesquaremeter": "4.9", "annualvariation": "1", "alltimehigh": "7.1", "maxvariation": "-30.7" },
		{ "location": "community of navarre", "year": "2015", "pricesquaremeter": "6.5", "annualvariation": "2.8", "alltimehigh": "8.8", "maxvariation": "-26.3" }
	];

	var rentals = [];

    // db.insert(rentals);



    module.exports.register = (app) =>{
            //carga inicial de datos
            
        app.get(BASE_RENTALS_API_PATH + "/rentals/loadInitialData", (req, res) => {
            //res.send(JSON.stringify(rentals));
            db.find({}, function (err, rentalsInDB) {
                if (err) {
                    console.error("ERROR accesing DB in GET");
                    res.sendStatus(500);
                }
                else {
                    if (rentalsInDB.length == 0) {
                        db.insert(rentalsInitial);
                        console.log(`Loaded initial data: ${JSON.stringify(rentalsInitial, null, 2)}`);
                        return res.sendStatus(200);
                    }
                    else {
                        console.log(`Dabase is not empty, please remove before`);
                        return res.sendStatus(205);
                    }
                }
            });
            
        });

        //GET a la lista de recursos
        app.get(BASE_RENTALS_API_PATH + "/rentals", (req, res) => {
            var query = req.query;
            var limit = parseInt(query.limit);
            var offset = parseInt(query.offset);
            var querySearch = [];

            //busqueda
            for (data in query) {
                var queryObject = {};
                if (data == 'location') {
                    queryObject[data] = query[data];
                } else if (data == 'year') {
                    queryObject[data] = query[data];
                } else if (data == 'pricesquaremeter') {
                    queryObject[data] = query[data];
                } else if (data == 'annualvariation') {
                    queryObject[data] = query[data];
                } else if (data == 'alltimehigh') {
                    queryObject[data] = query[data];
                } else if (data == 'maxvariation') {
                    queryObject[data] = query[data];
                }
                if (data != 'limit' && data != 'offset') {
                    querySearch.push(queryObject);
                }
            }

            console.log("querysearch: " + JSON.stringify(querySearch, null, 2));
            //Comprobamos si se ha utilizado limit o offset
            if (!isNaN(limit) || !isNaN(offset)) {
                console.log("with limit or offset - Limit: " + limit + " offset: " + offset);
                //Comprobamos si ha habido una busqueda
                if (Object.keys(query).length == 0) {
                    console.log("Empty query");
                    //Se devuelven todos los elementos
                    db.find({}, (err, rentalsInDB) => {
                        if (err) {
                            console.error("ERROR accesing DB in GET");
                            res.sendStatus(500);
                        } else {
                            if (rentalsInDB.length == 0) {
                                console.error("No data found");
                                res.sendStatus(404);
                            } else {
                                console.log(`Requested rentals`);
                                var rentalsToSend = rentalsInDB.map((c) => {
                                    return { location: c.location, year: c.year, "pricesquaremeter": c.pricesquaremeter, "annualvariation": c.annualvariation, "alltimehigh": c.alltimehigh, "maxvariation": c.maxvariation }
                                });
                                res.status(200).send(JSON.stringify(rentalsToSend, null, 2));
                            }
                        }
                    });

                } else {
                    //Se pasan los paremetros de la busqueda
                    db.find({ $and: querySearch }, { _id: 0 }).skip(offset).limit(limit).exec((err, rentalsInDB) => {
                        if (err) {
                            console.error("ERROR accesing DB in GET");
                            res.sendStatus(500);
                        } else if (rentalsInDB.length == 0) {
                            console.error("No data found");
                            res.sendStatus(404);
                        } else {
                            console.log(`Requested rentals query dataset`);
                            res.status(200).send(JSON.stringify(rentalsInDB, null, 2));
                        }
                    });
                }
            } else {
                console.log("without limit or offset - Limit: " + limit + " offset: " + offset);
                if (Object.keys(query).length == 0) {
                    console.log("Empty query");
                    //Se devuelven todos los elementos
                    db.find({}, function (err, rentalsInDB) {
                        if (err) {
                            console.error("Error accesing DB in GET");
                            res.sendStatus(500);
                        } else {
                            if (rentalsInDB.length == 0) {
                                console.error("No data found");
                                res.sendStatus(404);
                            } else {
                                console.log(`Requested rentals`);
                                var rentalsToSend = rentalsInDB.map((c) => {
                                    return { location: c.location, year: c.year, "pricesquaremeter": c.pricesquaremeter, "annualvariation": c.annualvariation, "alltimehigh": c.alltimehigh, "maxvariation": c.maxvariation }
                                });
                                res.status(200).send(JSON.stringify(rentalsToSend, null, 2));
                            }
                        }
                    });
                } else {
                    //Se pasan los paremetros de la busqueda
                    db.find({ $and: querySearch }, { _id: 0 }, function (err, rentalsInDB) {
                        if (err) {
                            console.error("Error accesing DB in GET");
                            res.sendStatus(500);
                        } else if (rentalsInDB.length == 0) {
                            console.error("No data found");
                            res.sendStatus(404);
                        } else {
                            console.log(`Requested rentals`);
                            var rentalsToSend = rentalsInDB.map((c) => {
                                return { location: c.location, year: c.year, "pricesquaremeter": c.pricesquaremeter, "annualvariation": c.annualvariation, "alltimehigh": c.alltimehigh, "maxvariation": c.maxvariation }
                            });
                            res.status(200).send(JSON.stringify(rentalsToSend, null, 2));
                        }
                    });
                }
            }
        });
        //POST a la lista de recursoss
        app.post(BASE_RENTALS_API_PATH + "/rentals", (req, res) => {
            var newRentals = req.body;
            var locationTA = req.body.location;
            var yearTA = req.body.year;
            db.find({ location: locationTA, year: yearTA }, (err, rentalsInDB) => {
                if (err) {
                    console.error("Error accessing DB in POST: " + err);
                    res.sendStatus(500);
                } else {
                    if (rentalsInDB.length == 0) {
                        if (!newRentals.location ||
                            !newRentals.year ||
                            !newRentals['pricesquaremeter'] ||
                            !newRentals['annualvariation'] ||
                            !newRentals['alltimehigh'] ||
                            !newRentals['maxvariation']) {
                            console.log(`Number of parameters is incorrect`);
                            return res.sendStatus(400);
                        }
                        else if (!(/^([0-9])*$/.test(newRentals['pricesquaremeter'])) ||
                            !(/^([0-9])*$/.test(newRentals['annualvariation'])) ||
                            !(/^([0-9])*$/.test(newRentals['alltimehigh'])) ||
                            !(/^([0-9])*$/.test(newRentals['maxvariation']))) {
                            console.log(`Only numbers are allowed`);
                            return res.sendStatus(409);
                        }
                        else {
                            console.log("Inserting new rentals in db: " + JSON.stringify(newRentals, null, 2));
                            db.insert(newRentals);
                            res.sendStatus(201); // CREATED	
                        }
                    } else {
                        console.log("Conflit is detected");
                        res.sendStatus(409); // CONFLICT
                    }
                }
            })
        });
        //GET a un recurso
        app.get(BASE_RENTALS_API_PATH + "/rentals/:location/:year", (req, res) => {
            var locationTF = req.params.location;
            var yearTF = req.params.year;
            db.find({ location: locationTF, year: yearTF }, function (err, rentalsInDB) {
                console.log("Buscando " + locationTF + " " + yearTF);
                if (err) {
                    console.error(err);
                    res.sendStatus(404);
                }
                if (rentalsInDB.length == 0) {
                    console.log("Rentals not found: " + locationTF + " " + yearTF);
                    res.sendStatus(404); // NOT FOUND
                } else {
                    
                    var rentalsToSend = rentalsInDB.map((c) => {
                        return { location: c.location, year: c.year, "pricesquaremeter": c.pricesquaremeter, "annualvariation": c.annualvariation, "alltimehigh": c.alltimehigh, "maxvariation": c.maxvariation }
                    });
                    console.log(rentalsToSend);
                    res.status(200).send(JSON.stringify(rentalsToSend, null, 2));
                }

            })
        });

        //DELETE a un recurso
        app.delete(BASE_RENTALS_API_PATH + "/rentals/:location/:year", (req,res) => {
            var locationTD = req.params.location;
            var yearTD = req.params.year;

            db.remove({ location: locationTD, year: yearTD }, {}, (err, numRentalsRemoved) => {
                if (err) {
                    console.error("ERROR deleting DB rentals in DELETE: " + err);
                    res.sendStatus(500);
                } else {
                    if (numRentalsRemoved == 0) {
                        console.log("No data found");
                        res.sendStatus(404); // NOT FOUND
                    } else {
                        console.log(`data ${locationTD} - ${yearTD} has been deleted`);
                        res.sendStatus(200); // OK
                    }
                }
            })

        }); 

        //PUT a un recurso
        app.put(BASE_RENTALS_API_PATH + "/rentals/:location/:year", (req, res) => {
            
            var locationTU = req.params.location;
            var yearTU = req.params.year;
            var newRentals = req.body;
    
            console.log(`Edit ${newRentals.location} Selected ${locationTU}`);
            console.log(`Edit ${newRentals.year} Selected ${yearTU}`);
    
            db.find({}, (err, rentalsInDB) => {
                if (err) {
                    console.error(err);
                    res.sendStatus(500);
                } else {
                    if (rentalsInDB == 0) {
                        console.log(`Database is empty`);
                        return res.sendStatus(404);
                    } else {
                        if (!newRentals.location ||
                            !newRentals.year ||
                            !newRentals['pricesquaremeter'] ||
                            !newRentals['annualvariation'] ||
                            !newRentals['alltimehigh'] ||
                            !newRentals['maxvariation']) {
                            console.log(`Number of parameters is incorrect`);
                            return res.sendStatus(400);
                        } else {
                            db.find({ location: locationTU, year: yearTU }, function (err, rentalsInDB) {
                                console.log("buscando " + locationTU + " " + yearTU);
                                if (err) {
                                    console.error(err);
                                    res.sendStatus(404);
                                }
                                if (rentalsInDB.length == 0) {
                                    console.log("Rentals not found: " + locationTU + " " + yearTU);
                                    res.sendStatus(404); // NOT FOUND
                                } else {
                                    console.log(rentalsInDB);
                                    // Mantiene location y year, aunque en el body se le indiquen location y/o year distintos
                                    db.update({ location: locationTU, year: yearTU },
                                        {
                                            location: locationTU,
                                            year: yearTU,
                                            pricesquaremeter: newRentals['pricesquaremeter'],
                                            annualvariation: newRentals['annualvariation'],
                                            alltimehigh: newRentals['alltimehigh'],
                                            maxvariation: newRentals['maxvariation']
                                        }, {}, function (err, numReplaced) {
                                            if (err) {
                                                console.error(err);
                                                res.sendStatus(404);
                                            } else {
                                                res.sendStatus(200);
                                                console.log("Rentals " + locationTU + " " + yearTU + " updated")
                                            }
                                        });
                                }
                            });
                        }
                    }
                }
    
            });
    
    
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
            db.remove({}, { multi: true }, (err, numRentalsRemoved) => {
                if (err) {
                    console.error("ERROR deleting DB rentals: " + err);
                    res.sendStatus(500);
                } else {
                    if (numRentalsRemoved == 0) {
                        res.sendStatus(404);
                    } else {
                        console.log("Rentals deleted");
                        res.sendStatus(200);
                    }
                }
            })  
        });
    };
