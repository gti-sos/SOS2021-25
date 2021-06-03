<script>
    import { onMount } from "svelte";
    import { Nav, NavItem, Button } from "sveltestrap";

    let evictionsData = [];
    let evictionsTotal = [];
    let rentalsKey = [];
    let rentalsData = [];
    let rentalsRent = [];

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch(
            "https://sos2021-07.herokuapp.com/api/v1/rentals"
        );
        if (res.ok) {
            console.log("Ok");
            rentalsData = await res.json();
            console.log(`We have received ${rentalsData.length} resources.`);
            rentalsData.forEach((data) => {
                let comunidad = "";
                if (data.year != 2020) {
                    if (data.autonomous_community == "comunidad de madrid") {
                        comunidad = "community of madrid";
                    } else if (data.autonomous_community == "castilla y león") {
                        comunidad = "castile and leon";
                    } else if (data.autonomous_community == "cataluña") {
                        comunidad = "catalonia";
                    } else if (data.autonomous_community == "andalucía") {
                        comunidad = "andalusia";
                    }
                    rentalsKey.push(comunidad + "-" + data.year);
                    console.log(comunidad + "-" + data.year);
                    rentalsRent.push(parseInt(data.rent, 10));
                }
            });
            //            console.log("totales: " + evictionsTotal);
            //            console.log("total totales: " + evictionsTotal.length);
        }
        const res1 = await fetch("api/v1/evictions");
        if (res1.ok) {
            console.log("Ok");
            evictionsData = await res1.json();
            console.log(`We have received ${evictionsData.length} resources.`);
            let evictionsAux = [rentalsKey.length];
            evictionsData.forEach((data) => {
                let indice = rentalsKey.indexOf(
                    data.location + "-" + data.year
                );
                evictionsAux[indice] = parseInt(data["total"], 10);
            });
            evictionsTotal = evictionsAux;
            //console.log("totales: " + evictionsTotal);
            //console.log("total totales: " + evictionsTotal.length);
        }

        
        var chart = Highcharts.chart("container", {
            chart: {
                type: "column",
            },

            title: {
                text: "Integración de G25-Desahucios con G07-Alquileres",
            },

            subtitle: {
                text: "Relación de la renta media per cápita con la cantidad de desahucios",
            },

            legend: {
                align: "right",
                verticalAlign: "middle",
                layout: "vertical",
            },

            xAxis: {
                categories: rentalsKey,
                labels: {
                    x: -10,
                },
            },

            yAxis: {
                allowDecimals: false,
                title: {
                    text: "Valores",
                },
            },

            series: [
                {
                    name: "Renta media per cápita",
                    data: rentalsRent,
                },
                {
                    name: "Total desahucios",
                    data: evictionsTotal,
                }
            ],

            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500,
                        },
                        chartOptions: {
                            legend: {
                                align: "center",
                                verticalAlign: "bottom",
                                layout: "horizontal",
                            },
                            yAxis: {
                                labels: {
                                    align: "left",
                                    x: 0,
                                    y: -5,
                                },
                                title: {
                                    text: null,
                                },
                            },
                            subtitle: {
                                text: null,
                            },
                            credits: {
                                enabled: false,
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
                <a href="/#/info">
                    <Button style="margin: 0 5px 10px 50px;" color="primary"
                        >Volver</Button
                    ></a
                >
                <a href="/#/evictions">
                    <Button style="margin: 0 5px 10px 50px;" color="dark"
                        >Ver datos</Button
                    ></a
                >
            </NavItem>
        </Nav>
    </div>
    
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            En esta gráfica se observa la relación entre la renta media per cápita
            por Comunidad Autónoma y año con la cantidad de desahucios totales que
            han tenido lugar en dicha Comunidad Autónoma y año, con los datos en común
            de las APIs de la asignatura Sistemas Orientados a Servicios (SOS), curso
            2020-2021: G07-Alquileres y G25-Desahucios.            
        </p>
    </figure>
</main>
