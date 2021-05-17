<script>
    import { onMount } from "svelte";
    import {
        Nav,
        NavItem,
        NavLink,
        Button,
    } from "sveltestrap";

    const BASE_CONTACT_API_PATH = "/api/v1";

    let rentalsData = [];
    let rentalsPrice =[];
    let rentalsGraphData = [];
    let evictionsData = [];
    let evictionsTotal = [];
    let evictionsGraphData = [];
    let salesData = [];
    let salesTotal = []
    let salesGraphData = [];

    var dates = [];

    async function loadGraph(){
        console.log("Fetching data...");

       /* const res = await fetch(BASE_CONTACT_API_PATH + "/rentals");
        const res1 = await fetch(BASE_CONTACT_API_PATH + "/evictions");*/
        const res2 = await fetch(BASE_CONTACT_API_PATH + "/sales");

        if (res.ok || res1.ok || res2.ok){
            if(res.ok){
                const json = await res.json();
                salesData = json;
                salesData = await res.json();
                salesData.forEach((data) => {
                salesYear.push(data.location + "-" + data.year);
                salesTotal.push(parseInt(data["total"],10));
            });
            console.log("totales: "+salesTotal);
            console.log("total totales: "+salesTotal.length);
            }
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
            console.log("totales: "+salesTotal);
            console.log("total totales: "+salesTotal.length);
        } else {
            console.log("Error");
        }

        Highcharts.chart("container", {
            title: {
                text: "Venta de viviendas en España",
            },

            subtitle: {
                text: "Fuente: Instituto Nacional de Estadística",
            },

            yAxis: {
                title: {
                    text: "Número de ventas",
                },
            },

            xAxis: {
                accessibility: {
                    rangeDescription: "Rango: 2015 a 2019",
                },
                title: {
                    text: "Comunidad-Año",
                },
                categories: salesYear,
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
                <a href="/#/info"><Button style="margin: 0 5px 10px 50px;" color="primary">Volver</Button></a>
            </NavItem>
        </Nav>
     </div> 
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

</style>
