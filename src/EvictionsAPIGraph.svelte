<script>
    import { onMount } from "svelte";

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
                evictionsTotal.unshift(parseInt(data["total"],10));
                evictionsRustic.unshift(parseInt(data["rustic"],10));
                evictionsHousehold.unshift(parseInt(data["household"],10));
                evictionsBuildinglot.unshift(parseInt(data["buildinglot"],10));
                evictionsOther.unshift(parseInt(data["other"],10));
            });
            console.log("totales: "+evictionsTotal);
            console.log("total totales: "+evictionsTotal.length);
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
</svelte:head>

<main>
    <div>
        <figure class="highcharts-figure">
            <div id="container" />
            <p class="highcharts-description">
                Información acerca de la cantidad de desahucios que tienen lugar a lo largo
                del año en cada comunidad autónoma, separándolos por tipo.
            </p>
        </figure>
    </div>
    
</main>

<style>

</style>
