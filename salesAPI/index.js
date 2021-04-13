var BASE_SALES_API_PATH = "/api/v1";

var salesInitial = [
    { "location": "andalusia", "year": "2019", "sales-total": "109275", "sales-protected-housing": "5806", "sales-new": "9165", "sales-secondhand": "98636" },
    { "location": "aragon", "year": "2019", "sales-total": "15365", "sales-protected-housing": "369", "sales-new": "1816", "sales-secondhand": "13459" },
    { "location": "principality of asturias", "year": "2019", "sales-total": "10120", "sales-protected-housing": "693", "sales-new": "657", "sales-secondhand": "9333" },
    { "location": "balearic islands", "year": "2019", "sales-total": "15692", "sales-protected-housing": "111", "sales-new": "1301", "sales-secondhand": "14388" },
    { "location": "canary islands", "year": "2019", "sales-total": "24630", "sales-protected-housing": "945", "sales-new": "1670", "sales-secondhand": "22886" },
    { "location": "cantabria", "year": "2019", "sales-total": "7250", "sales-protected-housing": "240", "sales-new": "742", "sales-secondhand": "6435" },
    { "location": "castilla-la mancha", "year": "2019", "sales-total": "24082", "sales-protected-housing": "907", "sales-new": "1988", "sales-secondhand": "21882" },
    { "location": "castile and leon", "year": "2019", "sales-total": "25852", "sales-protected-housing": "1130", "sales-new": "1712", "sales-secondhand": "23825" },
    { "location": "catalonia", "year": "2019", "sales-total": "89237", "sales-protected-housing": "1647", "sales-new": "6455", "sales-secondhand": "82341" },
    { "location": "valencian community", "year": "2019", "sales-total": "84737", "sales-protected-housing": "4097", "sales-new": "7688", "sales-secondhand": "76815" },
    { "location": "extremadura", "year": "2019", "sales-total": "9686", "sales-protected-housing": "765", "sales-new": "360", "sales-secondhand": "9213" },
    { "location": "galicia", "year": "2019", "sales-total": "20462", "sales-protected-housing": "487", "sales-new": "1828", "sales-secondhand": "18560" },
    { "location": "community of madrid", "year": "2019", "sales-total": "78634", "sales-protected-housing": "3628", "sales-new": "9211", "sales-secondhand": "68036" },
    { "location": "region of murcia", "year": "2019", "sales-total": "19296", "sales-protected-housing": "536", "sales-new": "1551", "sales-secondhand": "17723" },
    { "location": "community of navarre", "year": "2019", "sales-total": "6521", "sales-protected-housing": "323", "sales-new": "1114", "sales-secondhand": "5271" },
    { "location": "basque country", "year": "2019", "sales-total": "23644", "sales-protected-housing": "1367", "sales-new": "3059", "sales-secondhand": "19870" },
    { "location": "la rioja", "year": "2019", "sales-total": "4292", "sales-protected-housing": "279", "sales-new": "277", "sales-secondhand": "3991" },
    { "location": "ceuta", "year": "2019", "sales-total": "1218", "sales-protected-housing": "71", "sales-new": "129", "sales-secondhand": "1043" },
    { "location": "andalusia", "year": "2018", "sales-total": "110425", "sales-protected-housing": "5575", "sales-new": "9065", "sales-secondhand": "100435" },
    { "location": "aragon", "year": "2018", "sales-total": "15499", "sales-protected-housing": "409", "sales-new": "1882", "sales-secondhand": "13515" },
    { "location": "principality of asturias", "year": "2018", "sales-total": "10186", "sales-protected-housing": "707", "sales-new": "823", "sales-secondhand": "9194" },
    { "location": "balearic islands", "year": "2018", "sales-total": "17466", "sales-protected-housing": "122", "sales-new": "1160", "sales-secondhand": "16302" },
    { "location": "canary islands", "year": "2018", "sales-total": "25269", "sales-protected-housing": "525", "sales-new": "1519", "sales-secondhand": "23703" },
    { "location": "cantabria", "year": "2018", "sales-total": "7072", "sales-protected-housing": "222", "sales-new": "787", "sales-secondhand": "6226" },
    { "location": "castilla-la mancha", "year": "2018", "sales-total": "23626", "sales-protected-housing": "1071", "sales-new": "2127", "sales-secondhand": "21222" },
    { "location": "castile and leon", "year": "2018", "sales-total": "25957", "sales-protected-housing": "1059", "sales-new": "1581", "sales-secondhand": "24071" },
    { "location": "catalonia", "year": "2018", "sales-total": "89685", "sales-protected-housing": "1731", "sales-new": "6647", "sales-secondhand": "82596" },
    { "location": "valencian community", "year": "2018", "sales-total": "88792", "sales-protected-housing": "4128", "sales-new": "7270", "sales-secondhand": "81061" },
    { "location": "extremadura", "year": "2018", "sales-total": "9280", "sales-protected-housing": "813", "sales-new": "334", "sales-secondhand": "8800" },
    { "location": "galicia", "year": "2018", "sales-total": "19786", "sales-protected-housing": "527", "sales-new": "1912", "sales-secondhand": "17805" },
    { "location": "community of madrid", "year": "2018", "sales-total": "85294", "sales-protected-housing": "3940", "sales-new": "9451", "sales-secondhand": "74574" },
    { "location": "region of murcia", "year": "2018", "sales-total": "18213", "sales-protected-housing": "508", "sales-new": "1494", "sales-secondhand": "16656" },
    { "location": "community of navarre", "year": "2018", "sales-total": "7156", "sales-protected-housing": "596", "sales-new": "1439", "sales-secondhand": "5367" },
    { "location": "basque country", "year": "2018", "sales-total": "23166", "sales-protected-housing": "1409", "sales-new": "2835", "sales-secondhand": "19781" },
    { "location": "la rioja", "year": "2018", "sales-total": "4659", "sales-protected-housing": "304", "sales-new": "430", "sales-secondhand": "4139" },
    { "location": "ceuta", "year": "2018", "sales-total": "1357", "sales-protected-housing": "252", "sales-new": "181", "sales-secondhand": "963" },
    { "location": "andalusia", "year": "2017", "sales-total": "96440", "sales-protected-housing": "4703", "sales-new": "6615", "sales-secondhand": "89004" },
    { "location": "aragon", "year": "2017", "sales-total": "13988", "sales-protected-housing": "573", "sales-new": "1469", "sales-secondhand": "12291" },
    { "location": "principality of asturias", "year": "2017", "sales-total": "9216", "sales-protected-housing": "739", "sales-new": "869", "sales-secondhand": "8133" },
    { "location": "balearic islands", "year": "2017", "sales-total": "18390", "sales-protected-housing": "127", "sales-new": "1435", "sales-secondhand": "16947" },
    { "location": "canary islands", "year": "2017", "sales-total": "25868", "sales-protected-housing": "572", "sales-new": "1548", "sales-secondhand": "24207" },
    { "location": "cantabria", "year": "2017", "sales-total": "6638", "sales-protected-housing": "223", "sales-new": "695", "sales-secondhand": "5874" },
    { "location": "castilla-la mancha", "year": "2017", "sales-total": "20642", "sales-protected-housing": "1039", "sales-new": "2684", "sales-secondhand": "17653" },
    { "location": "castile and leon", "year": "2017", "sales-total": "22890", "sales-protected-housing": "1228", "sales-new": "1461", "sales-secondhand": "21025" },
    { "location": "catalonia", "year": "2017", "sales-total": "85567", "sales-protected-housing": "1747", "sales-new": "5729", "sales-secondhand": "79236" },
    { "location": "valencian community", "year": "2017", "sales-total": "79132", "sales-protected-housing": "3515", "sales-new": "7171", "sales-secondhand": "71674" },
    { "location": "extremadura", "year": "2017", "sales-total": "8090", "sales-protected-housing": "962", "sales-new": "302", "sales-secondhand": "7544" },
    { "location": "galicia", "year": "2017", "sales-total": "17555", "sales-protected-housing": "546", "sales-new": "1888", "sales-secondhand": "15524" },
    { "location": "community of madrid", "year": "2017", "sales-total": "80613", "sales-protected-housing": "4013", "sales-new": "7755", "sales-secondhand": "71738" },
    { "location": "region of murcia", "year": "2017", "sales-total": "15447", "sales-protected-housing": "491", "sales-new": "1372", "sales-secondhand": "14005" },
    { "location": "community of navarre", "year": "2017", "sales-total": "6040", "sales-protected-housing": "450", "sales-new": "1132", "sales-secondhand": "4734" },
    { "location": "basque country", "year": "2017", "sales-total": "20909", "sales-protected-housing": "1168", "sales-new": "2325", "sales-secondhand": "17994" },
    { "location": "la rioja", "year": "2017", "sales-total": "3748", "sales-protected-housing": "262", "sales-new": "258", "sales-secondhand": "3415" },
    { "location": "ceuta", "year": "2017", "sales-total": "1088", "sales-protected-housing": "56", "sales-new": "207", "sales-secondhand": "866" },
    { "location": "andalusia", "year": "2016", "sales-total": "83508", "sales-protected-housing": "4612", "sales-new": "6315", "sales-secondhand": "76094" },
    { "location": "aragon", "year": "2016", "sales-total": "11688", "sales-protected-housing": "712", "sales-new": "1356", "sales-secondhand": "9966" },
    { "location": "principality of asturias", "year": "2016", "sales-total": "7602", "sales-protected-housing": "524", "sales-new": "605", "sales-secondhand": "6919" },
    { "location": "balearic islands", "year": "2016", "sales-total": "15882", "sales-protected-housing": "101", "sales-new": "1350", "sales-secondhand": "14525" },
    { "location": "canary islands", "year": "2016", "sales-total": "22283", "sales-protected-housing": "507", "sales-new": "1419", "sales-secondhand": "20735" },
    { "location": "cantabria", "year": "2016", "sales-total": "5250", "sales-protected-housing": "240", "sales-new": "626", "sales-secondhand": "4523" },
    { "location": "castilla-la mancha", "year": "2016", "sales-total": "16265", "sales-protected-housing": "871", "sales-new": "1943", "sales-secondhand": "14049" },
    { "location": "castile and leon", "year": "2016", "sales-total": "20509", "sales-protected-housing": "1156", "sales-new": "1491", "sales-secondhand": "18612" },
    { "location": "catalonia", "year": "2016", "sales-total": "75152", "sales-protected-housing": "1378", "sales-new": "4888", "sales-secondhand": "69837" },
    { "location": "valencian community", "year": "2016", "sales-total": "67820", "sales-protected-housing": "2882", "sales-new": "6535", "sales-secondhand": "60925" },
    { "location": "extremadura", "year": "2016", "sales-total": "7197", "sales-protected-housing": "926", "sales-new": "303", "sales-secondhand": "6623" },
    { "location": "galicia", "year": "2016", "sales-total": "15604", "sales-protected-housing": "634", "sales-new": "2133", "sales-secondhand": "13264" },
    { "location": "community of madrid", "year": "2016", "sales-total": "67366", "sales-protected-housing": "3830", "sales-new": "6104", "sales-secondhand": "59755" },
    { "location": "region of murcia", "year": "2016", "sales-total": "13638", "sales-protected-housing": "414", "sales-new": "1702", "sales-secondhand": "11882" },
    { "location": "community of navarre", "year": "2016", "sales-total": "4946", "sales-protected-housing": "302", "sales-new": "850", "sales-secondhand": "3992" },
    { "location": "basque country", "year": "2016", "sales-total": "18730", "sales-protected-housing": "1733", "sales-new": "2532", "sales-secondhand": "15075" },
    { "location": "la rioja", "year": "2016", "sales-total": "3255", "sales-protected-housing": "308", "sales-new": "232", "sales-secondhand": "2992" },
    { "location": "ceuta", "year": "2016", "sales-total": "1043", "sales-protected-housing": "34", "sales-new": "180", "sales-secondhand": "856" },
    { "location": "andalusia", "year": "2015", "sales-total": "76743", "sales-protected-housing": "3885", "sales-new": "8238", "sales-secondhand": "67443" },
    { "location": "aragon", "year": "2015", "sales-total": "11317", "sales-protected-housing": "343", "sales-new": "1466", "sales-secondhand": "9749" },
    { "location": "principality of asturias", "year": "2015", "sales-total": "6516", "sales-protected-housing": "537", "sales-new": "554", "sales-secondhand": "5865" },
    { "location": "balearic islands", "year": "2015", "sales-total": "12952", "sales-protected-housing": "61", "sales-new": "1336", "sales-secondhand": "11608" },
    { "location": "canary islands", "year": "2015", "sales-total": "19846", "sales-protected-housing": "440", "sales-new": "1850", "sales-secondhand": "17896" },
    { "location": "cantabria", "year": "2015", "sales-total": "4660", "sales-protected-housing": "163", "sales-new": "672", "sales-secondhand": "3929" },
    { "location": "castilla-la mancha", "year": "2015", "sales-total": "14288", "sales-protected-housing": "1058", "sales-new": "1624", "sales-secondhand": "12180" },
    { "location": "castile and leon", "year": "2015", "sales-total": "18306", "sales-protected-housing": "1174", "sales-new": "1525", "sales-secondhand": "16248" },
    { "location": "catalonia", "year": "2015", "sales-total": "61108", "sales-protected-housing": "1162", "sales-new": "4747", "sales-secondhand": "55981" },
    { "location": "valencian community", "year": "2015", "sales-total": "59605", "sales-protected-housing": "2123", "sales-new": "6760", "sales-secondhand": "52644" },
    { "location": "extremadura", "year": "2015", "sales-total": "6323", "sales-protected-housing": "788", "sales-new": "450", "sales-secondhand": "5556" },
    { "location": "galicia", "year": "2015", "sales-total": "14633", "sales-protected-housing": "525", "sales-new": "2663", "sales-secondhand": "11794" },
    { "location": "community of madrid", "year": "2015", "sales-total": "57431", "sales-protected-housing": "3255", "sales-new": "5244", "sales-secondhand": "50611" },
    { "location": "region of murcia", "year": "2015", "sales-total": "12788", "sales-protected-housing": "380", "sales-new": "1404", "sales-secondhand": "11336" },
    { "location": "community of navarre", "year": "2015", "sales-total": "4533", "sales-protected-housing": "443", "sales-new": "644", "sales-secondhand": "3559" },
    { "location": "basque country", "year": "2015", "sales-total": "16568", "sales-protected-housing": "2033", "sales-new": "2365", "sales-secondhand": "12688" },
    { "location": "la rioja", "year": "2015", "sales-total": "3124", "sales-protected-housing": "206", "sales-new": "321", "sales-secondhand": "2759" },
    { "location": "ceuta", "year": "2015", "sales-total": "972", "sales-protected-housing": "30", "sales-new": "209", "sales-secondhand": "755" }
];

var sales = [];


module.exports.register = (app) => {

    //carga inicial de datos
    app.get(BASE_SALES_API_PATH + "/sales/loadInitialData", (req, res) => {
        //res.send(JSON.stringify(sales));
        if (sales.length == 0) {
            for (var i = 0; i < salesInitial.length; i++) {
                sales.push(salesInitial[i]);
            }
            //console.log(`Loaded initial data: ${JSON.stringify(sales)}`);
            console.log(`Loaded initial data`);
            return res.status(200).json(sales);
        }
        console.log(`Dabase is not empty, please remove before`);
        return res.status(205).json(`ERROR 205 - Reset Content [Dabase is not empty, please remove before]`);
    });

    //GET a la lista de recursos
    app.get(BASE_SALES_API_PATH + "/sales", (req, res) => {
        if (sales.length != 0) {
            console.log(`Request sales`);
            return res.send(JSON.stringify(sales));
        }
        else {
            console.log("No data found");
            return res.sendStatus(404);
        }
    });
    //POST a la lista de recursoss
    app.post(BASE_SALES_API_PATH + "/sales", (req, res) => {
        var newSales = req.body;
        var location = req.body.location;
        var year = parseInt(req.body.year);

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
                !newSales['sales-total'] ||
                !newSales['sales-protected-housing'] ||
                !newSales['sales-new'] ||
                !newSales['sales-secondhand']) {
                console.log(`Number of parameters is incorrect`);
                return res.sendStatus(400);
            }
            else if (!(/^([0-9])*$/.test(newSales['sales-total'])) ||
            !(/^([0-9])*$/.test(newSales['sales-protected-housing'])) ||
            !(/^([0-9])*$/.test(newSales['sales-new'])) ||
            !(/^([0-9])*$/.test(newSales['sales-secondhand'])))
            {
                console.log(`Only numbers are allowed`);
                console.log(`${newSales['sales-total']}`);
                console.log(`${newSales['sales-protected-housing']}`);
                console.log(`${newSales['sales-new']}`);
                console.log(`${newSales['sales-secondhand']}`);
                console.log(`${newSales['sales-total']}`);
                return res.sendStatus(409);
            }

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
            !newSales['sales-secondhand']) {
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
    app.get(BASE_SALES_API_PATH + "/sales/:location/:year", (req, res) => {
        var location = req.params.location;
        var year = parseInt(req.params.year);

        console.log(`get data by location: ${location} and year ${year}`);
        for (var status of sales) {
            if (status.location == location && status.year == year) {
                return res.status(200).json(status);
            }
        }
        console.log(`Data not found`);
        return res.sendStatus(404);
    });

    //DELETE a un recurso
    app.delete(BASE_SALES_API_PATH + "/sales/:location/:year", (req, res) => {
        var location = req.params.location;
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
        }

    });

    //PUT a un recurso
    app.put(BASE_SALES_API_PATH + "/sales/:location/:year", (req, res) => {
        var location = req.params.location;
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
                !newSales['sales-total'] ||
                !newSales['sales-protected-housing'] ||
                !newSales['sales-new'] ||
                !newSales['sales-secondhand']) {
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
                            sales[i]['sales-total'] = newSales['sales-total'];
                            sales[i]['sales-protected-housing'] = newSales['sales-protected-housing'];
                            sales[i]['sales-new'] = newSales['sales-new'];
                            sales[i]['sales-secondhand'] = newSales['sales-secondhand'];
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
        if (sales.length == 0) {
            console.log("Array is empty");
            return res.sendStatus(404);
        }
        else {
            sales = [];
            console.log("DELETE sales success");
            return res.sendStatus(200);
        }
    });
}