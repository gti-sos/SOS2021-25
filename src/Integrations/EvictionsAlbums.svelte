<script>
    import { onMount } from "svelte";
    import { Nav, NavItem, Button } from "sveltestrap";

    let evictionsRustic = [];
    let evictionsBuildinglot = [];
    let evictionsKey = [];
    let fotosData = [];
    let evictionsData = [];
    let fotosPorAlbum = new Array(100);
    let nombreAlbum = new Array(100);
    let evictionsHousehold = [];

    function inicializaVector() {
        for (let i = 0; i < 100; i++) {
            fotosPorAlbum[i] = 0;
            nombreAlbum[i] = "Álbum de fotos " + (i+1);
        }
    }

    async function getDataGraph() {
        console.log("Fetching data...");
        inicializaVector();
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        if (res.ok) {
            console.log("Ok");
            fotosData = await res.json();
            console.log(`We have received ${fotosData.length} resources.`);
            fotosData.forEach((data) => {
                let aux = data.albumId;
                fotosPorAlbum[aux - 1]++;
            });
            //            console.log("totales: " + evictionsTotal);
            //            console.log("total totales: " + evictionsTotal.length);
        }
        const res1 = await fetch("/api/v1/evictions/");
        if (res1.ok) {
            console.log("Ok");
            evictionsData = await res1.json();
            console.log(`We have received ${evictionsData.length} resources.`);
            evictionsData.forEach((data) => {
                evictionsKey.unshift(data.location + "-" + data.year);
                evictionsHousehold.unshift(parseInt(data.other));
            });
            //console.log("totales: " + evictionsTotal);
            //console.log("total totales: " + evictionsTotal.length);
        }

        Highcharts.chart("container", {
            chart: {
                type: "columnpyramid",
            },
            title: {
                text: "Integración de álbums de fotos (API Externa) con otros desahucios (API propia)",
            },
            colors: ["#C79D6D", "#B5927B", "#CE9B84", "#B7A58C", "#C7A58C"],
            xAxis: {
                crosshair: true,
                labels: {
                    style: {
                        fontSize: "14px",
                    },
                },
                type: "category",
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Cantidad (fotos o desahucios)",
                },
            },
            /*tooltip: {
                valueSuffix: " m",
            },*/
            series: [
                {
                    name: "Cantidad",
                    colorByPoint: true,
                    data: [
                        [nombreAlbum[0], fotosPorAlbum[0]],
                        [nombreAlbum[1], fotosPorAlbum[1]],
                        [nombreAlbum[13], fotosPorAlbum[13]],
                        [nombreAlbum[28], fotosPorAlbum[28]],
                        [nombreAlbum[67], fotosPorAlbum[67]],
                        [evictionsKey[0], evictionsHousehold[0]],
                        [evictionsKey[1], evictionsHousehold[1]],
                        [evictionsKey[2], evictionsHousehold[2]],
                        [evictionsKey[3], evictionsHousehold[3]],
                    ],
                    showInLegend: false,
                },
            ],
        });
    }
</script>

<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
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
                <a href="/#/integrations">
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
        <div id="container" />
        <p class="highcharts-description">
            En esta gráfica se observa la relación entre la cantidad de fotos
            que posee cada álbum de fotos al que hemos accedido mediante una API
            Externa con la cantidad de desahucios de otro tipo que han tenido
            lugar en comunidades autónomas de España entre los años 2015 y 2019,
            cuyos datos pertenecen a nuestra API propia de la asignatura
            Sistemas Orientados a Servicios (SOS), curso 2020-2021:
            G25-Desahucios.
        </p>
    </figure>
</main>

<style>
    #container {
        height: 500px;
    }

    .highcharts-figure,
    .highcharts-data-table table {
        min-width: 310px;
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
