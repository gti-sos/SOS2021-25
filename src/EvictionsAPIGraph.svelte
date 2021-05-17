<script>
    import { onMount } from "svelte";

    let evictionsData = [];
    /*let andalusiaData = [];
    let aragonData = [];
    let balearicData = [];
    let basqueData = [];
    let canaryData = [];
    let cantabriaData = [];
    let clData = [];
    let cmData = [];
    let cataloniaData = [];
    let ceutaData = [];
    let madridData = [];
    let navarreData = [];
    let extremaduraData = [];
    let galiciaData = [];
    let lariojaData = [];
    let melillaData = [];
    let asturiasData = [];
    let murciaData = [];
    let valencianData = [];
    let fechas = ["2015", "2016", "2017", "2018", "2019"];*/
    let evictionsDate = [];
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
            const json = await res.json();
            evictionsData = json;
            console.log(`We have received ${evictionsData.length} resources.`);
            /*for (var data of evictionsData) {
                switch (data.location) {
                    case "andalusia":
                        andalusiaData.unshift(data.total);
                    case "aragon":
                        aragonData.unshift(data.total);
                    case "balearic islands":
                        balearicData.unshift(data.total);
                    case "basque country":
                        basqueData.unshift(data.total);
                    case "canary islands":
                        canaryData.unshift(data.total);
                    case "cantabria":
                        cantabriaData.unshift(data.total);
                    case "castile and leon":
                        clData.unshift(data.total);
                    case "castilla-la mancha":
                        cmData.unshift(data.total);
                    case "catalonia":
                        cataloniaData.unshift(data.total);
                    case "ceuta":
                        ceutaData.unshift(data.total);
                    case "community of madrid":
                        madridData.unshift(data.total);
                    case "community of navarre":
                        navarreData.unshift(data.total);
                    case "extremadura":
                        extremaduraData.unshift(data.total);
                    case "galicia":
                        galiciaData.unshift(data.total);
                    case "la rioja":
                        lariojaData.unshift(data.total);
                    case "melilla":
                        melillaData.unshift(data.total);
                    case "principality of asturias":
                        asturiasData.unshift(data.total);
                    case "region of murcia":
                        murciaData.unshift(data.total);
                    case "valencian community":
                        valencianData.unshift(data.total);
                }
            }*/
            evictionsData.forEach((data) => {
                evictionsDate.unshift(data.location + "-" + data.year);
                evictionsTotal.unshift(data.total);
                console.log("data.total = " + data.total);
                evictionsRustic.unshift(data.rustic);
                evictionsHousehold.unshift(data.household);
                evictionsBuildinglot.unshift(data.buildinglot);
                evictionsOther.unshift(data.other);
            });
        } else {
            console.log("Error");
        }

        Highcharts.chart("container", {
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
                accessibility: {
                    rangeDescription: "Rango: 2015 a 2019",
                },
                categories: evictionsDate,
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

            /*series: [
                    {
                        name: "Andalucía",
                        data: andalusiaData,
                    },
                    {
                        name: "Aragón",
                        data: aragonData,
                    },
                    {
                        name: "Baleares",
                        data: balearicData,
                    },
                    {
                        name: "País Vasco",
                        data: basqueData,
                    },
                    {
                        name: "Canarias",
                        data: canaryData,
                    },
                    {
                        name: "Cantabria",
                        data: cantabriaData,
                    },
                    {
                        name: "Castilla y León",
                        data: clData,
                    },
                    {
                        name: "Castilla - La Mancha",
                        data: cmData,
                    },
                    {
                        name: "Cataluña",
                        data: cataloniaData,
                    },
                    {
                        name: "Ceuta",
                        data: ceutaData,
                    },
                    {
                        name: "Comunidad de Madrid",
                        data: madridData,
                    },
                    {
                        name: "Comunidad de Navarra",
                        data: navarreData,
                    },
                    {
                        name: "Extremadura",
                        data: extremaduraData,
                    },
                    {
                        name: "Galicia",
                        data: galiciaData,
                    },
                    {
                        name: "La Rioja",
                        data: lariojaData,
                    },
                    {
                        name: "Melilla",
                        data: melillaData,
                    },
                    {
                        name: "Principado de Asturias",
                        data: asturiasData,
                    },
                    {
                        name: "Región de Murcia",
                        data: murciaData,
                    },
                    {
                        name: "Comunidad Valenciana",
                        data: valencianData,
                    },
                ],*/

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
</svelte:head>

<main>
    <figure class="highcharts-figure">
        <div id="container" />
        <p class="highcharts-description">
            Basic line chart showing trends in a dataset. This chart includes
            the
            <code>series-label</code> module, which adds a label to each line for
            enhanced readability.
        </p>
    </figure>
</main>

<style>
    .highcharts-figure,
    .highcharts-data-table table {
        min-width: 360px;
        max-width: 800px;
        margin: 1em auto;
    }

    .highcharts-data-table table {
        font-family: Verdana, sans-serif;
        border-collapse: collapse;
        border: 1px solid #ebebeb;
        margin: 10px auto;
        text-align: center;
        width: 100%;
        max-width: 500px;
    }
    .highcharts-data-table caption {
        padding: 1em 0;
        font-size: 1.2em;
        color: #555;
    }
    .highcharts-data-table th {
        font-weight: 600;
        padding: 0.5em;
    }
    .highcharts-data-table td,
    .highcharts-data-table th,
    .highcharts-data-table caption {
        padding: 0.5em;
    }
    .highcharts-data-table thead tr,
    .highcharts-data-table tr:nth-child(even) {
        background: #f8f8f8;
    }
    .highcharts-data-table tr:hover {
        background: #f1f7ff;
    }
</style>
