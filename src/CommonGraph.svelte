<script>
    import { onMount } from "svelte";
    import { Nav, NavItem, NavLink, Button } from "sveltestrap";

    const BASE_CONTACT_API_PATH = "/api/v1";

    let rentalsData = [];
    let rentalsPrice = [];
    let rentalsYear = [];
    let evictionsData = [];
    let evictionsTotal = [];
    let evictionsYear = [];
    let salesData = [];
    let salesTotal = [];
    let salesYear = [];
    let salesGraphData = [];
    let locAndYear = [];

    var dates = [];

    async function loadGraph() {
        console.log("Fetching data...");

        const res = await fetch(BASE_CONTACT_API_PATH + "/rentals");
        const res1 = await fetch(BASE_CONTACT_API_PATH + "/sales");
        const res2 = await fetch(BASE_CONTACT_API_PATH + "/evictions");

        /*if (res.ok || res1.ok || res2.ok){
            if(res.ok){
                const json = await res.json();
                salesData = json;
                salesData.sort(function (a,b) {
                    if(a.location==b.location){
                        return a.year < b.location;
                    }else{
                        return a.location > b.location;    
                    }
                });
                salesData.forEach((data) => {
                salesYear.push(data.location + "-" + data.year);
                salesTotal.push(parseInt(data["total"],10));
            });
            console.log("totales: "+salesTotal);
            console.log("total totales: "+salesTotal.length);
            }
            if(res1.ok){
                evictionsData = await res1.json();
                var evictionsAux = [evictionsData.length];
                var evictionsAux2 = [evictionsData.length];
                if(salesData.length!=0){
                    for(var data of evictionsData){
                        var dest = data.location + "-" + data.year;
                        var pos = salesYear.indexOf(dest);
                        evictionsAux[pos] = dest;
                        evictionsAux2[pos] = parseInt(data["total"],10);
                    }
                    evictionsYear = evictionsAux;
                    evictionsTotal = evictionsAux2;
                }else{
                    for(var data of evictionsData){
                        evictionsData.forEach((data) => {
                            evictionsYear.unshift(data.location + "-" + data.year);
                        evictionsTotal.unshift(parseInt(data["total"],10));
                        });
                    }
                }
            }
            if(res2.ok){
                console.log("llego aqui");
                rentalsData = await res2.json();
                var rentalsAux = [rentalsData.length];
                var rentalsAux2 = [rentalsData.length];
                rentalsData.sort(function (a,b) {
                    if(a.location==b.location){
                        return a.year < b.location;
                    }else{
                        return a.location > b.location;    
                    }
                });
                if(salesData.length!=0){
                    for(var data of rentalsData){
                        var dest = data.location + "-" + data.year;
                        var pos = salesYear.indexOf(dest);
                        rentalsAux[pos] = dest;
                        rentalsAux2[pos] = Math.round(data["pricesquaremeter"],10);
                    }
                    console.log("rentalsAux: "+rentalsAux);
                    console.log("rentalsAux2: "+rentalsAux2);
                    rentalsYear = rentalsAux.filter(Boolean);
                    rentalsPrice = rentalsAux2.filter(Boolean);
                }else{
                    for(var data of rentalsData){
                        rentalsData.forEach((data) => {
                            rentalsYear.push(data.location + "-" + data.year);
                            rentalsPrice.push(Math.round(data["pricesquaremeter"],10));
                        });
                    }
                }
            }*/
        /*salesData.forEach((data) => {
                salesYear.push(data.location + "-" + data.year);
                salesTotal.push(parseInt(data["total"],10));
            });
            evictionsData.forEach((data) => {
                evictionsYear.push(data.location + "-" + data.year);
                evictionsTotal.push(parseInt(data["total"],10));
            });
            rentalsData.forEach((data) => {
                rentalYear.push(data.location + "-" + data.year);
                rentalsPrice.push(parseInt(data["pricesquaremeter"],10));
            });*/
        //console.log("totales: "+salesTotal);
        //console.log("total totales: "+salesTotal.length);
        if (res.ok || res1.ok || res2.ok) {
            if (res.ok) {
                rentalsData = await res.json();
                rentalsData.sort(function (a, b) {
                    if (a.location == b.location) {
                        return a.year < b.location;
                    } else {
                        return a.location > b.location;
                    }
                });
                for (var data of rentalsData) {
                    var dest = data.location + "-" + data.year;
                    locAndYear.push(dest)
                    rentalsPrice.push(Math.round(data["pricesquaremeter"], 10));
                }
            }
            if (res1.ok) {
                salesData = await res1.json();
                salesData.sort(function (a,b) {
                    if(a.location==b.location){
                        return a.year < b.location;
                    }else{
                        return a.location > b.location;    
                    }
                });
                if (rentalsData.length != 0) {
                    //var salesAux = new Array(rentalsData.length);
                    var salesAux2 = [salesData.length];
                    for (var data of salesData) {
                        var dest = data.location + "-" + data.year;
                        var pos = locAndYear.indexOf(dest);
                        salesAux2[pos] = parseInt(data["total"], 10);
                    }
                    salesTotal = salesAux2;/*
                    for(let i=0; i<locAndYear.length; i++){
                        if(locAndYear[i].startsWith("Melilla")){
                            salesTotal[i]=0;
                        }
                    }*/
                    salesTotal[56]=0;
                    salesTotal[57]=0;
                    salesTotal[58]=0;
                    salesTotal[59]=0;
                    console.log("mostrar salesTotal = "+salesTotal);
                } else {
                    for (var data of salesData) {
                        salesData.forEach((data) => {
                            locAndYear.push(
                                data.location + "-" + data.year
                            );
                            salesTotal.push(parseInt(data["total"], 10));
                        });
                    }
                }
                
            }
            if (res2.ok) {
                evictionsData = await res2.json();
                if(rentalsData.length!=0){
                    var evictionsAux = [rentalsData.length];
                    var evictionsAux2 = [rentalsData.length];
                    for(var data of evictionsData){
                        var dest = data.location + "-" + data.year;
                        var pos = locAndYear.indexOf(dest);
                        evictionsAux2[pos] = parseInt(data["total"],10);
                    }
                    evictionsTotal = evictionsAux2;
                }else if(salesData.length!=0){
                    var evictionsAux = [salesData.length];
                    var evictionsAux2 = [salesData.length];
                    for(var data of evictionsData){
                        var dest = data.location + "-" + data.year;
                        var pos = locAndYear.indexOf(dest);
                        evictionsAux2[pos] = parseInt(data["total"],10);
                    }
                    evictionsYear = evictionsAux;
                    evictionsTotal = evictionsAux2;
                }else{
                    for(var data of evictionsData){
                        evictionsData.forEach((data) => {
                            locAndYear.unshift(data.location + "-" + data.year);
                        evictionsTotal.unshift(parseInt(data["total"],10));
                        });
                    }
                }
            }
        } else {
            console.log("Error");
        }

        Highcharts.chart("container", {
            chart: {
                type: "area",
            },
            title: {
                text: "Venta de viviendas, alquileres y desahucios en España",
            },

            subtitle: {
                text: "Fuente: Instituto Nacional de Estadística",
            },

            yAxis: {
                title: {
                    text: "Valor",
                },
            },

            xAxis: {
                accessibility: {
                    rangeDescription: "Rango: 2015 a 2019",
                },
                title: {
                    text: "Comunidad-Año",
                },
                categories: locAndYear,
            },

            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "middle",
            },

            annotations: [
                {
                    labels: [
                        {
                            point: "date",
                            text: "",
                        },
                        {
                            point: "min",
                            text: "Min",
                            backgroundColor: "white",
                        },
                    ],
                },
            ],
            series: [
                {
                    name: "Total ventas",
                    data: salesTotal,
                },
                {
                    name: "Total desahucios",
                    data: evictionsTotal,
                },
                {
                    name: "Precio del metro cuadrado de alquileres (€)",
                    data: rentalsPrice,
                },
                /* {
                            name: "Ventas viviendas proteccion oficial",
                            data: salesProtectedhousing,
                        },
                        {
                            name: "Ventas viviendas nuevas",
                            data: salesNew,
                        },
                        {
                            name: "Ventas viviendas segunda mano",
                            data: salesSecondhand,
                        },
                        {
                            name: "Otros",
                            data: salesOther,
                        },*/
            ],

            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 5000,
                        },
                        chartOptions: {
                            legend: {
                                layout: "horizontal",
                                align: "center",
                                verticalAlign: "bottom",
                            },
                        },
                    },
                ],
            },
        });
    }
</script>

<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script
        src="https://code.highcharts.com/modules/accessibility.js"
        on:load={loadGraph}></script>
</svelte:head>

<main>
    <div class="container">
        <Nav>
            <NavItem>
                <a href="/#/info"
                    ><Button style="margin: 0 5px 10px 50px;" color="primary"
                        >Volver</Button
                    ></a
                >
            </NavItem>
        </Nav>
    </div>
    <figure class="highcharts-figure">
        <div id="container" />
        <p class="highcharts-description">
            En este gráfico se pueden observar las ventas totales de viviendas en España,
            el precio medio por metro cuadrado registrado en los alquileres en España y
            la cantidad de desahucios en España. Todos estos datos se separan por comunidad
            autónoma y año.
        </p>
    </figure>
</main>

<style>
    .highcharts-description{
        text-align: center;
    }
</style>
