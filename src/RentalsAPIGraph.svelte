<script>
    import { onMount } from "svelte";
    import { Nav, NavItem, NavLink, Button } from "sveltestrap";

    let rentalsData = [];
    let rentalsPricesquaremeter = [];
    let rentalsAnnualvariation = [];
    let rentalsAlltimehigh = [];
    let rentalsMaxvariation = [];

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch("api/v1/rentals");
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            rentalsData = json;
            rentalsData.sort((a, b) => (a.year > b.year ? 1 : -1));
            rentalsData.sort((a, b) => (a.location > b.location ? 1 : -1));
            console.log(`We have received ${rentalsData.length} resources.`);
            rentalsData.forEach((data) => {
                rentalsPricesquaremeter.push([data.location + "-" + data.year,parseInt(data["pricesquaremeter"], 10)]);
                rentalsAnnualvariation.push([data.location + "-" + data.year,parseInt(data["annualvariation"], 10)]);
                rentalsAlltimehigh.push([data.location + "-" + data.year,parseInt(data["alltimehigh"], 10)]);
                rentalsMaxvariation.push([data.location + "-" + data.year,parseInt(data["maxvariation"], 10)]);
            });
        } else {
            console.log("Error");
        }

        Highcharts.chart("container", {
            chart: {
                type: "area",
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 30,
                    depth: 200,
                },
            },
            title: {
                text: "Precios alquileres y variaciones %",
            },
            yAxis: {
                title: {
                    text: "Precio m2 €/m2   ||  %",
                    x: -40,
                },
                labels: {
                    format: "{value:,.0f}",
                },
                gridLineDashStyle: "Dash", //Linea discontinua de la gráfica
            },
            xAxis: [
                {
                    visible: false,
                },
                {
                    visible: false,
                },
                {
                    visible: false,
                },
                {
                    visible: false,
                },
            ],
            plotOptions: {
                area: {
                    depth: 100, //Separacion de las graficas
                    marker: {
                        enabled: false, //Puntos de la grafica, por dato introducido
                    },
                    states: {
                        inactive: {
                            enabled: false, //Invisibilizar el resto de graficas cuando colocamos el mouse encima
                        },
                    },
                },
            },
            series: [
                {
                    name: "Precio m2",
                    lineColor: "rgb(180,90,50)",
                    color: "rgb(200,110,50)",
                    fillColor: "rgb(200,110,50)",
                    data: rentalsPricesquaremeter,
                },
                {
                    xAxis: 1,
                    lineColor: "rgb(120,160,180)",
                    color: "rgb(140,180,200)",
                    fillColor: "rgb(140,180,200)",
                    name: "Variacion Anual",
                    data:rentalsAnnualvariation,
                },
                {
                    xAxis: 2,
                    lineColor: "rgb(200, 190, 140)",
                    color: "rgb(200, 190, 140)",
                    fillColor: "rgb(230, 220, 180)",
                    name: "Maxima Variacion",
                    data: rentalsMaxvariation,
                },
                {
                    xAxis: 3,
                    lineColor: "rgb(190, 240, 180)",
                    color: "rgb(190, 240, 180)",
                    fillColor: "rgb(220, 270, 230)",
                    name: "Maximo Historico",
                    data: rentalsAlltimehigh,
                },
                
            ],
        });
    }
</script>

<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/highcharts-3d.js"on:load={getDataGraph}></script>
</svelte:head>

<main>
    <div class="container">
        <Nav>
            <NavItem>
                <a href="/#/info"
                    ><Button style="margin: 0 5px 10px 50px;" color="primary"
                        >Inicio</Button
                    ></a
                >
                <a href="/#/rentals"
                    ><Button style="margin: 0 5px 10px 50px;" color="dark"
                        >Ver datos</Button
                    ></a
                >
            </NavItem>
        </Nav>
    </div>
    <figure class="highcharts-figure">
        <div id="container"></div>
        <p class="highcharts-description">
            Información acerca de los precios de los alquileres que tienen lugar a lo
            largo del año en cada comunidad autónoma, incluyendo la variación en comparación con el año anterior, el maximo historico y la maxima variacion.
        </p>
    </figure>
</main>

<style>
</style>
