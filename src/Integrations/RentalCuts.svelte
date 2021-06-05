<script>
    import bb from "billboard.js/dist/billboard.pkgd";
    import { onMount } from "svelte";
    import { Nav, NavItem, NavLink, Button } from "sveltestrap";
    import App from "../App.svelte";

    let year = [];
    let cutsData = [];
    let rentalsData = [];

    let cutsDegree = new Map();
    let rentalsAllTimeHigh = 0;

    let cutsTotal = [];

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch("proxyRentals");
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            cutsData = json;
            cutsData.sort((a, b) => (a.year > b.year ? 1 : -1));
            cutsData.sort((a, b) => (a.location > b.location ? 1 : -1));
            console.log(`We have received ${cutsData.length} resources.`);
            cutsData.forEach((data) => {
                if (cutsDegree.get(data.degree) == undefined) {
                    cutsDegree.set(data.degree, parseFloat(data.cut_off_mark));
                } else if (cutsDegree.get(data.degree) < data.cut_off_mark) {
                    cutsDegree.set(data.degree, parseFloat(data.cut_off_mark));
                }
            });
        } else {
            console.log("Error");
        }
        const res2 = await fetch("api/v1/rentals");
        if (res.ok) {
            console.log("Ok");
            const json2 = await res2.json();
            rentalsData = json2;
            rentalsData.sort((a, b) => (a.year > b.year ? 1 : -1));
            rentalsData.sort((a, b) => (a.location > b.location ? 1 : -1));
            console.log(`We have received ${rentalsData.length} resources.`);

            rentalsData.forEach((data) => {
                if (
                    rentalsAllTimeHigh < data.alltimehigh &&
                    data.location == "andalusia"
                ) {
                    rentalsAllTimeHigh = data.alltimehigh;
                }
            });

            console.log("mas alto historico " + rentalsAllTimeHigh);
        } else {
            console.log("Error");
        }

        for (var [key, value] of cutsDegree) {
            let asignatura = key;
            let nota = value;
            cutsTotal.push({
                name: asignatura,
                y: nota,
            });
        }

        Highcharts.chart("container", {
            chart: {
                type: "pie",
            },
            title: {
                text: "Nota de corte mas alta por asignatura desde 2015-2020 <br>Con un alquiler €/m2 en sevilla de: " + rentalsAllTimeHigh ,
            },
            series: [
                {
                    name: "Brands",
                    colorByPoint: true,
                    data: cutsTotal,
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
    <script
        src="https://code.highcharts.com/themes/high-contrast-light.js"></script>
    <script
        src="https://code.highcharts.com/modules/accessibility.js"
        on:load={getDataGraph}></script>
</svelte:head>

<main>
    <div class="container">
        <Nav>
            <NavItem>
                <a href="/#/Integrations"
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
            La grafica muestra la nota de corte mas alta en los ultimos 5 años de selectividad ofreciendo el dato del precio de alquiler por m2 en Sevilla en esas fechas.
        </p>
    </figure>
</main>

<style>
</style>
