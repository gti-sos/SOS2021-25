var BASE_SALES_API_PATH = "/api/v1";
var path = require('path');

var Datastore = require("nedb");
var datafile = path.join(__dirname, 'sales-stats.db');
var db = new Datastore({ filename: datafile, autoload: true });

var salesInitial = [
    { "location": "andalusia", "year": "2019", "total": "109275", "protectedhousing": "5806", "new": "9165", "secondhand": "98636" },
    { "location": "aragon", "year": "2019", "total": "15365", "protectedhousing": "369", "new": "1816", "secondhand": "13459" },
    { "location": "principality of asturias", "year": "2019", "total": "10120", "protectedhousing": "693", "new": "657", "secondhand": "9333" },
    { "location": "balearic islands", "year": "2019", "total": "15692", "protectedhousing": "111", "new": "1301", "secondhand": "14388" },
    { "location": "canary islands", "year": "2019", "total": "24630", "protectedhousing": "945", "new": "1670", "secondhand": "22886" },
    { "location": "cantabria", "year": "2019", "total": "7250", "protectedhousing": "240", "new": "742", "secondhand": "6435" },
    { "location": "castilla-la mancha", "year": "2019", "total": "24082", "protectedhousing": "907", "new": "1988", "secondhand": "21882" },
    { "location": "castile and leon", "year": "2019", "total": "25852", "protectedhousing": "1130", "new": "1712", "secondhand": "23825" },
    { "location": "catalonia", "year": "2019", "total": "89237", "protectedhousing": "1647", "new": "6455", "secondhand": "82341" },
    { "location": "valencian community", "year": "2019", "total": "84737", "protectedhousing": "4097", "new": "7688", "secondhand": "76815" },
    { "location": "extremadura", "year": "2019", "total": "9686", "protectedhousing": "765", "new": "360", "secondhand": "9213" },
    { "location": "galicia", "year": "2019", "total": "20462", "protectedhousing": "487", "new": "1828", "secondhand": "18560" },
    { "location": "community of madrid", "year": "2019", "total": "78634", "protectedhousing": "3628", "new": "9211", "secondhand": "68036" },
    { "location": "region of murcia", "year": "2019", "total": "19296", "protectedhousing": "536", "new": "1551", "secondhand": "17723" },
    { "location": "community of navarre", "year": "2019", "total": "6521", "protectedhousing": "323", "new": "1114", "secondhand": "5271" },
    { "location": "basque country", "year": "2019", "total": "23644", "protectedhousing": "1367", "new": "3059", "secondhand": "19870" },
    { "location": "la rioja", "year": "2019", "total": "4292", "protectedhousing": "279", "new": "277", "secondhand": "3991" },
    { "location": "ceuta", "year": "2019", "total": "1218", "protectedhousing": "71", "new": "129", "secondhand": "1043" },
    { "location": "andalusia", "year": "2018", "total": "110425", "protectedhousing": "5575", "new": "9065", "secondhand": "100435" },
    { "location": "aragon", "year": "2018", "total": "15499", "protectedhousing": "409", "new": "1882", "secondhand": "13515" },
    { "location": "principality of asturias", "year": "2018", "total": "10186", "protectedhousing": "707", "new": "823", "secondhand": "9194" },
    { "location": "balearic islands", "year": "2018", "total": "17466", "protectedhousing": "122", "new": "1160", "secondhand": "16302" },
    { "location": "canary islands", "year": "2018", "total": "25269", "protectedhousing": "525", "new": "1519", "secondhand": "23703" },
    { "location": "cantabria", "year": "2018", "total": "7072", "protectedhousing": "222", "new": "787", "secondhand": "6226" },
    { "location": "castilla-la mancha", "year": "2018", "total": "23626", "protectedhousing": "1071", "new": "2127", "secondhand": "21222" },
    { "location": "castile and leon", "year": "2018", "total": "25957", "protectedhousing": "1059", "new": "1581", "secondhand": "24071" },
    { "location": "catalonia", "year": "2018", "total": "89685", "protectedhousing": "1731", "new": "6647", "secondhand": "82596" },
    { "location": "valencian community", "year": "2018", "total": "88792", "protectedhousing": "4128", "new": "7270", "secondhand": "81061" },
    { "location": "extremadura", "year": "2018", "total": "9280", "protectedhousing": "813", "new": "334", "secondhand": "8800" },
    { "location": "galicia", "year": "2018", "total": "19786", "protectedhousing": "527", "new": "1912", "secondhand": "17805" },
    { "location": "community of madrid", "year": "2018", "total": "85294", "protectedhousing": "3940", "new": "9451", "secondhand": "74574" },
    { "location": "region of murcia", "year": "2018", "total": "18213", "protectedhousing": "508", "new": "1494", "secondhand": "16656" },
    { "location": "community of navarre", "year": "2018", "total": "7156", "protectedhousing": "596", "new": "1439", "secondhand": "5367" },
    { "location": "basque country", "year": "2018", "total": "23166", "protectedhousing": "1409", "new": "2835", "secondhand": "19781" },
    { "location": "la rioja", "year": "2018", "total": "4659", "protectedhousing": "304", "new": "430", "secondhand": "4139" },
    { "location": "ceuta", "year": "2018", "total": "1357", "protectedhousing": "252", "new": "181", "secondhand": "963" },
    { "location": "andalusia", "year": "2017", "total": "96440", "protectedhousing": "4703", "new": "6615", "secondhand": "89004" },
    { "location": "aragon", "year": "2017", "total": "13988", "protectedhousing": "573", "new": "1469", "secondhand": "12291" },
    { "location": "principality of asturias", "year": "2017", "total": "9216", "protectedhousing": "739", "new": "869", "secondhand": "8133" },
    { "location": "balearic islands", "year": "2017", "total": "18390", "protectedhousing": "127", "new": "1435", "secondhand": "16947" },
    { "location": "canary islands", "year": "2017", "total": "25868", "protectedhousing": "572", "new": "1548", "secondhand": "24207" },
    { "location": "cantabria", "year": "2017", "total": "6638", "protectedhousing": "223", "new": "695", "secondhand": "5874" },
    { "location": "castilla-la mancha", "year": "2017", "total": "20642", "protectedhousing": "1039", "new": "2684", "secondhand": "17653" },
    { "location": "castile and leon", "year": "2017", "total": "22890", "protectedhousing": "1228", "new": "1461", "secondhand": "21025" },
    { "location": "catalonia", "year": "2017", "total": "85567", "protectedhousing": "1747", "new": "5729", "secondhand": "79236" },
    { "location": "valencian community", "year": "2017", "total": "79132", "protectedhousing": "3515", "new": "7171", "secondhand": "71674" },
    { "location": "extremadura", "year": "2017", "total": "8090", "protectedhousing": "962", "new": "302", "secondhand": "7544" },
    { "location": "galicia", "year": "2017", "total": "17555", "protectedhousing": "546", "new": "1888", "secondhand": "15524" },
    { "location": "community of madrid", "year": "2017", "total": "80613", "protectedhousing": "4013", "new": "7755", "secondhand": "71738" },
    { "location": "region of murcia", "year": "2017", "total": "15447", "protectedhousing": "491", "new": "1372", "secondhand": "14005" },
    { "location": "community of navarre", "year": "2017", "total": "6040", "protectedhousing": "450", "new": "1132", "secondhand": "4734" },
    { "location": "basque country", "year": "2017", "total": "20909", "protectedhousing": "1168", "new": "2325", "secondhand": "17994" },
    { "location": "la rioja", "year": "2017", "total": "3748", "protectedhousing": "262", "new": "258", "secondhand": "3415" },
    { "location": "ceuta", "year": "2017", "total": "1088", "protectedhousing": "56", "new": "207", "secondhand": "866" },
    { "location": "andalusia", "year": "2016", "total": "83508", "protectedhousing": "4612", "new": "6315", "secondhand": "76094" },
    { "location": "aragon", "year": "2016", "total": "11688", "protectedhousing": "712", "new": "1356", "secondhand": "9966" },
    { "location": "principality of asturias", "year": "2016", "total": "7602", "protectedhousing": "524", "new": "605", "secondhand": "6919" },
    { "location": "balearic islands", "year": "2016", "total": "15882", "protectedhousing": "101", "new": "1350", "secondhand": "14525" },
    { "location": "canary islands", "year": "2016", "total": "22283", "protectedhousing": "507", "new": "1419", "secondhand": "20735" },
    { "location": "cantabria", "year": "2016", "total": "5250", "protectedhousing": "240", "new": "626", "secondhand": "4523" },
    { "location": "castilla-la mancha", "year": "2016", "total": "16265", "protectedhousing": "871", "new": "1943", "secondhand": "14049" },
    { "location": "castile and leon", "year": "2016", "total": "20509", "protectedhousing": "1156", "new": "1491", "secondhand": "18612" },
    { "location": "catalonia", "year": "2016", "total": "75152", "protectedhousing": "1378", "new": "4888", "secondhand": "69837" },
    { "location": "valencian community", "year": "2016", "total": "67820", "protectedhousing": "2882", "new": "6535", "secondhand": "60925" },
    { "location": "extremadura", "year": "2016", "total": "7197", "protectedhousing": "926", "new": "303", "secondhand": "6623" },
    { "location": "galicia", "year": "2016", "total": "15604", "protectedhousing": "634", "new": "2133", "secondhand": "13264" },
    { "location": "community of madrid", "year": "2016", "total": "67366", "protectedhousing": "3830", "new": "6104", "secondhand": "59755" },
    { "location": "region of murcia", "year": "2016", "total": "13638", "protectedhousing": "414", "new": "1702", "secondhand": "11882" },
    { "location": "community of navarre", "year": "2016", "total": "4946", "protectedhousing": "302", "new": "850", "secondhand": "3992" },
    { "location": "basque country", "year": "2016", "total": "18730", "protectedhousing": "1733", "new": "2532", "secondhand": "15075" },
    { "location": "la rioja", "year": "2016", "total": "3255", "protectedhousing": "308", "new": "232", "secondhand": "2992" },
    { "location": "ceuta", "year": "2016", "total": "1043", "protectedhousing": "34", "new": "180", "secondhand": "856" },
    { "location": "andalusia", "year": "2015", "total": "76743", "protectedhousing": "3885", "new": "8238", "secondhand": "67443" },
    { "location": "aragon", "year": "2015", "total": "11317", "protectedhousing": "343", "new": "1466", "secondhand": "9749" },
    { "location": "principality of asturias", "year": "2015", "total": "6516", "protectedhousing": "537", "new": "554", "secondhand": "5865" },
    { "location": "balearic islands", "year": "2015", "total": "12952", "protectedhousing": "61", "new": "1336", "secondhand": "11608" },
    { "location": "canary islands", "year": "2015", "total": "19846", "protectedhousing": "440", "new": "1850", "secondhand": "17896" },
    { "location": "cantabria", "year": "2015", "total": "4660", "protectedhousing": "163", "new": "672", "secondhand": "3929" },
    { "location": "castilla-la mancha", "year": "2015", "total": "14288", "protectedhousing": "1058", "new": "1624", "secondhand": "12180" },
    { "location": "castile and leon", "year": "2015", "total": "18306", "protectedhousing": "1174", "new": "1525", "secondhand": "16248" },
    { "location": "catalonia", "year": "2015", "total": "61108", "protectedhousing": "1162", "new": "4747", "secondhand": "55981" },
    { "location": "valencian community", "year": "2015", "total": "59605", "protectedhousing": "2123", "new": "6760", "secondhand": "52644" },
    { "location": "extremadura", "year": "2015", "total": "6323", "protectedhousing": "788", "new": "450", "secondhand": "5556" },
    { "location": "galicia", "year": "2015", "total": "14633", "protectedhousing": "525", "new": "2663", "secondhand": "11794" },
    { "location": "community of madrid", "year": "2015", "total": "57431", "protectedhousing": "3255", "new": "5244", "secondhand": "50611" },
    { "location": "region of murcia", "year": "2015", "total": "12788", "protectedhousing": "380", "new": "1404", "secondhand": "11336" },
    { "location": "community of navarre", "year": "2015", "total": "4533", "protectedhousing": "443", "new": "644", "secondhand": "3559" },
    { "location": "basque country", "year": "2015", "total": "16568", "protectedhousing": "2033", "new": "2365", "secondhand": "12688" },
    { "location": "la rioja", "year": "2015", "total": "3124", "protectedhousing": "206", "new": "321", "secondhand": "2759" },
    { "location": "ceuta", "year": "2015", "total": "972", "protectedhousing": "30", "new": "209", "secondhand": "755" }
];

var sales = [];

//db.insert(sales);

module.exports.register = (app) => {

    //carga inicial de datos
    app.get(BASE_SALES_API_PATH + "/sales/loadInitialData", (req, res) => {
        /*if (sales.length == 0) {
            for (var i = 0; i < salesInitial.length; i++) {
                sales.push(salesInitial[i]);
            }
            console.log(`Loaded initial data`);
            return res.status(200).json(sales);
        }
        console.log(`Dabase is not empty, please remove before`);
        return res.sendStatus(205);*/
        db.find({}, function (err, salesInDB) {
            if (err) {
                console.error("ERROR accesing DB in GET");
                res.sendStatus(500);
            }
            else {
                if (salesInDB.length == 0) {
                    db.insert(salesInitial);
                    console.log(`Loaded initial data: ${JSON.stringify(salesInitial, null, 2)}`);
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
    app.get(BASE_SALES_API_PATH + "/sales", (req, res) => {

        //GET a la lista de recursos consultando a DB

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
            } else if (data == 'total') {
                queryObject[data] = query[data];
            } else if (data == 'protectedhousing') {
                queryObject[data] = query[data];
            } else if (data == 'new') {
                queryObject[data] = query[data];
            } else if (data == 'secondhand') {
                queryObject[data] = query[data];
            }
            if (data != 'limit' && data != 'offset') {
                querySearch.push(queryObject);
            }
        }

        console.log("Querysearch: " + JSON.stringify(querySearch, null, 2));
        //Comprobamos si se ha utilizado limit o offset
        if (!isNaN(limit) || !isNaN(offset)) {
            console.log("With limit or offset - Limit: " + limit + " offset: " + offset);
            //Comprobamos si ha habido una busqueda
            if (Object.keys(query).length == 0) {
                console.log("Empty query");
                //Se devuelven todos los elementos
                db.find({}, (err, salesInDB) => {
                    if (err) {
                        console.error("Error accesing DB in GET");
                        res.sendStatus(500);
                    } else {
                        if (salesInDB.length == 0) {
                            console.error("No data found");
                            res.sendStatus(404);
                        } else {
                            console.log(`Requested sales`);
                            var salesToSend = salesInDB.map((c) => {
                                return { location: c.location, year: c.year, "total": c.total, "protectedhousing": c.protectedhousing, "new": c.new, "secondhand": c.secondhand }
                            });
                            res.status(200).send(JSON.stringify(salesToSend, null, 2));
                        }
                    }
                });

            } else {
                //Se pasan los paremetros de la busqueda
                db.find({ $and: querySearch }, { _id: 0 }).skip(offset).limit(limit).exec((err, salesInDB) => {
                    if (err) {
                        console.error("Error accesing DB in GET");
                        res.sendStatus(500);
                    } else if (salesInDB.length == 0) {
                        console.error("No data found");
                        res.sendStatus(404);
                    } else {
                        console.log(`Requested sales query dataset`);
                        res.status(200).send(JSON.stringify(salesInDB, null, 2));
                    }
                });
            }
        } else {
            console.log("Without limit or offset - Limit: " + limit + " offset: " + offset);
            if (Object.keys(query).length == 0) {
                console.log("Empty query");
                //Se devuelven todos los elementos
                db.find({}, function (err, salesInDB) {
                    if (err) {
                        console.error("Error accesing DB in GET");
                        res.sendStatus(500);
                    } else {
                        if (salesInDB.length == 0) {
                            console.error("No data found");
                            res.sendStatus(404);
                        } else {
                            console.log(`Requested sales`);
                            var salesToSend = salesInDB.map((c) => {
                                return { location: c.location, year: c.year, "total": c.total, "protectedhousing": c.protectedhousing, "new": c.new, "secondhand": c.secondhand }
                            });
                            res.status(200).send(JSON.stringify(salesToSend, null, 2));
                        }
                    }
                });
            } else {
                //Se pasan los paremetros de la busqueda
                db.find({ $and: querySearch }, { _id: 0 }, function (err, salesInDB) {
                    if (err) {
                        console.error("Error accesing DB in GET");
                        res.sendStatus(500);
                    } else if (salesInDB.length == 0) {
                        console.error("No data found");
                        res.sendStatus(404);
                    } else {
                        console.log(`Requested sales`);
                        var salesToSend = salesInDB.map((c) => {
                            return { location: c.location, year: c.year, "total": c.total, "protectedhousing": c.protectedhousing, "new": c.new, "secondhand": c.secondhand }
                        });
                        res.status(200).send(JSON.stringify(salesToSend, null, 2));
                    }
                });
            }
        }
        /*
                db.find({}, (err, salesInDB)=> {
                    if (err) {
                        console.error("ERROR conecting DB: "+err);
                        res.sendStatus(500);
                    }
                    else {
                        var salesToSend = salesInDB.map((c) => {
                           return {location: c.location, year: c.year, "total": c.total, "protectedhousing": c.protectedhousing, "new": c.new, "secondhand": c.seconhand} 
                        });
                    }
                });*/
    });
    //POST a la lista de recursoss
    app.post(BASE_SALES_API_PATH + "/sales", (req, res) => {
        /*var newSales = req.body;
        var location = req.body.location;
        var year = parseInt(req.body.year);
        var salesError = [];

        //con datos
        if (sales.length != 0) {
            for (var status of sales) {
                if (status.location == location && status.year == year) {
                    console.log(`Location ${location} and Year ${year} are already in the database`);
                    return res.sendStatus(403);
                }
            }
            if (!newSales.location ||
                !newSales.year ||
                !newSales['total'] ||
                !newSales['protectedhousing'] ||
                !newSales['new'] ||
                !newSales['secondhand']) {

                salesError.push(newSales);
                console.log(`Number of parameters is incorrect`);
                return res.status(400).json(salesError);
            }
            else if (!(/^([0-9])*$/.test(newSales['total'])) ||
                !(/^([0-9])*$/.test(newSales['protectedhousing'])) ||
                !(/^([0-9])*$/.test(newSales['new'])) ||
                !(/^([0-9])*$/.test(newSales['secondhand']))) {
                console.log(`Only numbers are allowed`);
                salesError.push(newSales);
                return res.status(409).json(salesError);
            }

            console.log(`new sales to be added: <${JSON.stringify(newSales, null, 2)}>`);
            sales.push(newSales);
            return res.sendStatus(201);
        }
        //sin datos
        else if (!newSales.location ||
            !newSales.year ||
            !newSales['total'] ||
            !newSales['protectedhousing'] ||
            !newSales['new'] ||
            !newSales['secondhand']) {
            console.log(`Number of parameters is incorrect`);
            return res.sendStatus(400);
        }
        else if (!(/^([0-9])*$/.test(newSales['total'])) ||
            !(/^([0-9])*$/.test(newSales['protectedhousing'])) ||
            !(/^([0-9])*$/.test(newSales['new'])) ||
            !(/^([0-9])*$/.test(newSales['secondhand']))) {
            console.log(`Only numbers are allowed`);
            salesError.push(newSales);
            return res.sendStatus(409);
        }
        else {
            console.log(`new sales to be added: <${JSON.stringify(newSales, null, 2)}>`);
            sales.push(newSales);
            return res.sendStatus(201);
        }*/
        var newSales = req.body;
        var locationTA = req.body.location;
        var yearTA = req.body.year;
        db.find({ location: locationTA, year: yearTA }, (err, salesInDB) => {
            if (err) {
                console.error("Error accessing DB in POST: " + err);
                res.sendStatus(500);
            } else {
                if (salesInDB.length == 0) {
                    if (!newSales.location ||
                        !newSales.year ||
                        !newSales['total'] ||
                        !newSales['protectedhousing'] ||
                        !newSales['new'] ||
                        !newSales['secondhand']) {
                        console.log(`Number of parameters is incorrect`);
                        return res.sendStatus(400);
                    }
                    else if (!(/^([0-9])*$/.test(newSales['total'])) ||
                        !(/^([0-9])*$/.test(newSales['protectedhousing'])) ||
                        !(/^([0-9])*$/.test(newSales['new'])) ||
                        !(/^([0-9])*$/.test(newSales['secondhand']))) {
                        console.log(`Only numbers are allowed`);
                        return res.sendStatus(409);
                    }
                    else {
                        console.log("Inserting new sales in db: " + JSON.stringify(newSales, null, 2));
                        db.insert(newSales);
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
    app.get(BASE_SALES_API_PATH + "/sales/:location/:year", (req, res) => {
        /*var location = req.params.location;
        var year = parseInt(req.params.year);

        console.log(`get data by location: ${location} and year ${year}`);
        for (var status of sales) {
            if (status.location == location && status.year == year) {
                return res.status(200).json(status);
            }
        }
        console.log(`Data not found`);
        return res.sendStatus(404);*/
        var locationTF = req.params.location;
        var yearTF = req.params.year;
        db.find({ location: locationTF, year: yearTF }, function (err, salesInDB) {
            console.log("Buscando " + locationTF + " " + yearTF);
            if (err) {
                console.error(err);
                res.sendStatus(404);
            }
            if (salesInDB.length == 0) {
                console.log("Sales not found: " + locationTF + " " + yearTF);
                res.sendStatus(404); // NOT FOUND
            } else {
                
                var salesToSend = salesInDB.map((c) => {
                    return { location: c.location, year: c.year, "total": c.total, "protectedhousing": c.protectedhousing, "new": c.new, "secondhand": c.secondhand };
                });
                console.log(salesToSend);
                res.status(200).send(JSON.stringify(salesToSend[0], null, 2));
            }

        })

    });

    //DELETE a un recurso
    app.delete(BASE_SALES_API_PATH + "/sales/:location/:year", (req, res) => {
        /*var location = req.params.location;
        var year = parseInt(req.params.year);

        if (sales.length != 0) {
            for (var i = 0; i < sales.length; i++) {
                if (sales[i]["location"] == location && sales[i]["year"] == year) {
                    console.log(`DELETE location ${location} and year ${year}`);
                    sales.splice(i, 1)
                    return res.sendStatus(200);
                }
            }
            console.log(`No data found`);
            return res.sendStatus(404);
        }
        else {
            console.log(`Database is empty`);
            return res.sendStatus(404);
        }*/
        var locationTD = req.params.location;
        var yearTD = req.params.year;

        db.remove({ location: locationTD, year: yearTD }, {}, (err, numSalesRemoved) => {
            if (err) {
                console.error("ERROR deleting DB sales in DELETE: " + err);
                res.sendStatus(500);
            } else {
                if (numSalesRemoved == 0) {
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
    app.put(BASE_SALES_API_PATH + "/sales/:location/:year", (req, res) => {
        /*var location = req.params.location;
        var year = parseInt(req.params.year);
        var newSales = req.body;

        console.log(`Edit ${newSales.location} Selected ${location}`);
        console.log(`Edit ${newSales.year} Selected ${year}`);

        if (sales.length == 0) {
            console.log(`Database is empty`);
            return res.sendStatus(404);
        }
        else {
            if (!newSales.location ||
                !newSales.year ||
                !newSales['total'] ||
                !newSales['protectedhousing'] ||
                !newSales['new'] ||
                !newSales['secondhand']) {
                console.log(`Number of parameters is incorrect`);
                return res.sendStatus(400);
            }
            else {
                for (var i = 0; i < sales.length; i++) {
                    if (sales[i]["location"] == location && sales[i]["year"] == year) {
                        if (newSales.location != location) {
                            console.log(`Error, location is not editable`);
                            return res.sendStatus(403);
                        }
                        else if (newSales.year != year) {
                            console.log(`Error, year is not editable`);
                            return res.sendStatus(403);
                        }
                        else {
                            sales[i]["location"] = location;
                            sales[i]["year"] = year;
                            sales[i]['total'] = newSales['total'];
                            sales[i]['protectedhousing'] = newSales['protectedhousing'];
                            sales[i]['new'] = newSales['new'];
                            sales[i]['secondhand'] = newSales['secondhand'];
                            //sales[i] = newSales;
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
*/
        var locationTU = req.params.location;
        var yearTU = req.params.year;
        var newSales = req.body;

        console.log(`Edit ${newSales.location} Selected ${locationTU}`);
        console.log(`Edit ${newSales.year} Selected ${yearTU}`);

        db.find({}, (err, salesInDB) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
            } else {
                if (salesInDB == 0) {
                    console.log(`Database is empty`);
                    return res.sendStatus(404);
                } else {
                    if (!newSales.location ||
                        !newSales.year ||
                        !newSales['total'] ||
                        !newSales['protectedhousing'] ||
                        !newSales['new'] ||
                        !newSales['secondhand']) {
                        console.log(`Number of parameters is incorrect`);
                        return res.sendStatus(400);
                    } else {
                        db.find({ location: locationTU, year: yearTU }, function (err, salesInDB) {
                            console.log("buscando " + locationTU + " " + yearTU);
                            if (err) {
                                console.error(err);
                                res.sendStatus(404);
                            }
                            if (salesInDB.length == 0) {
                                console.log("Sales not found: " + locationTU + " " + yearTU);
                                res.sendStatus(404); // NOT FOUND
                            } else {
                                console.log(salesInDB);
                                // Mantiene location y year, aunque en el body se le indiquen location y/o year distintos
                                db.update({ location: locationTU, year: yearTU },
                                    {
                                        location: locationTU,
                                        year: yearTU,
                                        total: newSales['total'],
                                        "protectedhousing": newSales['protectedhousing'],
                                        "new": newSales['new'],
                                        secondhand: newSales['secondhand']
                                    }, {}, function (err, numReplaced) {
                                        if (err) {
                                            console.error(err);
                                            res.sendStatus(404);
                                        } else {
                                            res.sendStatus(200);
                                            console.log("Sales " + locationTU + " " + yearTU + " updated")
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
    app.post(BASE_SALES_API_PATH + "/sales/:location/:year", (req, res) => {
        console.log("Unable to POST to a specific resource");
        return res.sendStatus(405);
    });
    //PUT a una lista de recursos
    app.put(BASE_SALES_API_PATH + "/sales", (req, res) => {
        console.log("Unable to PUT to a list of resources");
        return res.sendStatus(405);
    });

    //DELETE a una lista de recursos
    app.delete(BASE_SALES_API_PATH + "/sales", (req, res) => {
        /*if (sales.length == 0) {
            console.log("Array is empty");
            return res.sendStatus(404);
        }
        else {
            sales = [];
            console.log("DELETE sales success");
            return res.sendStatus(200);
        }*/
        db.remove({}, { multi: true }, (err, numSalesRemoved) => {
            if (err) {
                console.error("ERROR deleting DB sales: " + err);
                res.sendStatus(500);
            } else {
                if (numSalesRemoved == 0) {
                    res.sendStatus(404);
                } else {
                    console.log("Sales deleted");
                    res.sendStatus(200);
                }
            }
        })
    });
}