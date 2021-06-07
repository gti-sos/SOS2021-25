<script>
    import bb from "billboard.js/dist/billboard.pkgd";
    import { onMount } from "svelte";
    import { Nav, NavItem, NavLink, Button } from "sveltestrap";
    import App from "../App.svelte";

    let animeData = [];
    let letras = [];
    let animeSort = [];

    let animeAZ = new Map();

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch(
            "https://animechan.vercel.app/api/available/anime"
        );
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            animeData = json;
            console.log(animeData);
            console.log(`We have received ${animeData.length} resources.`);
            animeData.forEach((data) => {
                console.log(animeAZ.get(data.charAt(0)));
                if (animeAZ.get(data.charAt(0)) == undefined) {
                    animeAZ.set(data.charAt(0), 1);
                } else {
                    let almacen = animeAZ.get(data.charAt(0));
                    animeAZ.set(data.charAt(0), almacen + 1);
                }
            });
        } else {
            console.log("Error");
        }

        for (var letra of animeAZ.keys()) {
            letras.push(letra);
        }
        letras.sort();
        for (let i = 0; i < letras.length; i++) {
            animeSort.push(animeAZ.get(letras[i]));
        }

        console.log(animeAZ);

        Highcharts.chart("container", {
            chart: {
                type: "area",
            },
            title: {
                text: "Animes más conocidos que comienzan por las letras...",
            },
            subtitle: {
                text: "Source: animechan.vercel.app",
            },
            xAxis: {
                categories: letras,
               
                title: {
                    enabled: false,
                },
            },
            plotOptions: {
                area: {
                    stacking: "normal",
                    lineColor: "#666666",
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: "#666666",
                    },
                },
            },
            series: [
                {
                    name: "Numero de Animes: ",
                    data: animeSort,
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
           La grafica recoge información acerca de los animes mas reconocidos (consta de unos 800 animes)
           y los agrupa en funcion de la letra por la que comiencen dichos animes.
        </p>
    </figure>
</main>

<style>
</style>
