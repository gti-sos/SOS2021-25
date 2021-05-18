<script>
    import { onMount } from "svelte";
    import {
        Nav,
        NavItem,
        NavLink,
        Button,
    } from "sveltestrap";

    let salesData = [];
    let salesYear = [];
    let salesTotal = [];
    let salesProtectedhousing = [];
    let salesNew = [];
    let salesSecondhand = [];
    let salesOther = [];

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch("api/v1/sales");
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            salesData = json;
            console.log(`We have received ${salesData.length} resources.`);
            salesData.forEach((data) => {
                salesYear.push(data.location + "-" + data.year);
                salesTotal.push(parseInt(data["total"],10));
                salesProtectedhousing.push(parseInt(data["protectedhousing"],10));
                salesNew.push(parseInt(data["new"],10));
                salesSecondhand.push(parseInt(data["secondhand"],10));
                salesOther.push(parseInt(data["other]"],10));
            });
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
                        {
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
                        },
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
        on:load={getDataGraph}></script>
</svelte:head>

<main>
    <div class="container">
        <Nav>
            <NavItem>
                <a href="/#/info"><Button style="margin: 0 5px 10px 50px;" color="primary">Volver</Button></a>
                <a href="/#/sales"><Button style="margin: 0 5px 10px 50px;" color="dark">Ver datos</Button></a>
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
