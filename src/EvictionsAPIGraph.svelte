<script>
    import { onMount } from "svelte";

    import { Nav, NavItem, Button } from "sveltestrap";

    let evictionsData = [];
    let evictionsKey = [];
    let evictionsTotal = [];
    let evictionsRustic = [];
    let evictionsHousehold = [];
    let evictionsBuildinglot = [];
    let evictionsOther = [];

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch("api/v1/evictions");
        if (res.ok) {
            console.log("Ok");
            evictionsData = await res.json();
            console.log(`We have received ${evictionsData.length} resources.`);
            evictionsData.forEach((data) => {
                evictionsKey.unshift(data.location + "-" + data.year);
                evictionsTotal.unshift(parseInt(data["total"], 10));
                evictionsRustic.unshift(parseInt(data["rustic"], 10));
                evictionsHousehold.unshift(parseInt(data["household"], 10));
                evictionsBuildinglot.unshift(parseInt(data["buildinglot"], 10));
                evictionsOther.unshift(parseInt(data["other"], 10));
            });
            console.log("totales: " + evictionsTotal);
            console.log("total totales: " + evictionsTotal.length);
        }


       /* new Morris.Bar({
            // ID of the element in which to draw the chart.
            element: "myfirstchart",
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [
                {
                    com: evictionsKey[0],
                    a: evictionsTotal[0],
                    b: evictionsRustic[0],
                    c: evictionsHousehold[0],
                    d: evictionsBuildinglot[0],
                    e: evictionsOther[0]
                },
                {
                    com: evictionsKey[1],
                    a: evictionsTotal[1],
                    b: evictionsRustic[1],
                    c: evictionsHousehold[1],
                    d: evictionsBuildinglot[1],
                    e: evictionsOther[1]
                },
                {
                    com: evictionsKey[2],
                    a: evictionsTotal[2],
                    b: evictionsRustic[2],
                    c: evictionsHousehold[2],
                    d: evictionsBuildinglot[2],
                    e: evictionsOther[2]
                },
                {
                    com: evictionsKey[3],
                    a: evictionsTotal[3],
                    b: evictionsRustic[3],
                    c: evictionsHousehold[3],
                    d: evictionsBuildinglot[3],
                    e: evictionsOther[3]
                },
                {
                    com: evictionsKey[4],
                    a: evictionsTotal[4],
                    b: evictionsRustic[4],
                    c: evictionsHousehold[4],
                    d: evictionsBuildinglot[4],
                    e: evictionsOther[4]
                },
                {
                    com: evictionsKey[5],
                    a: evictionsTotal[5],
                    b: evictionsRustic[5],
                    c: evictionsHousehold[5],
                    d: evictionsBuildinglot[5],
                    e: evictionsOther[5]
                },
                {
                    com: evictionsKey[6],
                    a: evictionsTotal[6],
                    b: evictionsRustic[6],
                    c: evictionsHousehold[6],
                    d: evictionsBuildinglot[6],
                    e: evictionsOther[6]
                },
                {
                    com: evictionsKey[7],
                    a: evictionsTotal[7],
                    b: evictionsRustic[7],
                    c: evictionsHousehold[7],
                    d: evictionsBuildinglot[7],
                    e: evictionsOther[7]
                },
                {
                    com: evictionsKey[8],
                    a: evictionsTotal[8],
                    b: evictionsRustic[8],
                    c: evictionsHousehold[8],
                    d: evictionsBuildinglot[8],
                    e: evictionsOther[8]
                },
                {
                    com: evictionsKey[9],
                    a: evictionsTotal[9],
                    b: evictionsRustic[9],
                    c: evictionsHousehold[9],
                    d: evictionsBuildinglot[9],
                    e: evictionsOther[9]
                }
            ],
            // The name of the data record attribute that contains x-values.
            xkey: "com",
            // A list of names of data record attributes that contain y-values.
            ykeys: ["a", "b", "c", "d", "e"],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ["Total Desahucios", "Desahucios en viviendas rústicas", 
                "Desahucios de viviendas", "Desahucios de solares",
                "Otros desahucios"],
            stacked: true,
        });*/

        Highcharts.chart("container", {         
            chart: {
                type:'area',
            },
            title: {
                text: "Desahucios en España",
            },

            subtitle: {
                text: "Fuente: Instituto Nacional de Estadística",
            },

            yAxis: {
                title: {
                    text: "Número de desahucios",
                },
            },

            xAxis: {
                title: {
                    text: "Comunidad-Año",
                },
                categories: evictionsKey,
            },

            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "middle",
            },

            series: [
                {
                    name: "Total desahucios",
                    data: evictionsTotal,
                },
                {
                    name: "Viviendas rústicas",
                    data: evictionsRustic,
                },
                {
                    name: "Viviendas",
                    data: evictionsHousehold,
                },
                {
                    name: "Solares",
                    data: evictionsBuildinglot,
                },
                {
                    name: "Otros",
                    data: evictionsOther,
                },
            ],

            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500,
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
        on:load={getDataGraph}></script>
<!--
    <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css"
    />
    <script
        src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script
        src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
    <script
        src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"
        on:load={getDataGraph}></script>-->
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
                <a href="/#/evictions"
                    ><Button style="margin: 0 5px 10px 50px;" color="dark"
                        >Ver datos</Button
                    ></a
                >
            </NavItem>
        </Nav>
    </div>
    <div>
        <figure class="highcharts-figure">
            <div id="container" />
            <p class="highcharts-description">
                Información acerca de la cantidad de desahucios que tienen lugar
                a lo largo del año en cada comunidad autónoma, separándolos por
                tipo.
            </p>
        </figure>
    </div>
    <!--<div id="myfirstchart" style="height: 250px;" />-->
</main>

<style>
    .highcharts-description {
        text-align: center;
    }
</style>
