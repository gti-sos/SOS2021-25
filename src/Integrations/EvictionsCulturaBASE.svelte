<script>

    import { onMount } from "svelte";
    import { Nav, NavItem, Button } from "sveltestrap";

    let evictionsRustic = [];
    let evictionsBuildinglot = [];
    let culturaRecaudacion = [];
    let culturaEspectadores = [];
    let culturaGasto = [];
    let culturaData = [];
    let evictionsData = [];

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch(
            "https://sos2021-26.herokuapp.com/api/v2/culturaBASE/"
        );
        if (res.ok) {
            console.log("Ok");
            culturaData = await res.json();
            console.log(`We have received ${culturaData.length} resources.`);
            culturaData.forEach((data) => {
                if(data.district=="Canarias" && data.year=="2018"){
                    culturaGasto.push(parseInt(data.fundraising,10));
                    culturaEspectadores.push(Math.round(data["spectator"], 10));
                    culturaRecaudacion.push(Math.round(data["spending_per_view"], 10));
                }
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
                if(data.location=="canary islands" && data.year=="2018"){
                    evictionsRustic.push(parseInt(data.rustic, 10));
                    evictionsBuildinglot.push(parseInt(data.buildinglot, 10));
                }
                
            });
            //console.log("totales: " + evictionsTotal);
            //console.log("total totales: " + evictionsTotal.length);
        }

        new Morris.Donut({
            element: 'myfirstchart',
            data: [
                {label: "Desahucios de viviendas rústicas", value: evictionsRustic[0]},
                {label: "Desahucios de solares", value: evictionsBuildinglot[0]},
                {label: "Espectadores (x1.000.000)", value: culturaEspectadores[0]},
                {label: "Gasto por espectador (x1.000.000)", value: culturaGasto[0]},
                {label: "Recaudación total (x1.000.000)", value: culturaRecaudacion[0]},
            ]
        });

    }

</script>

<svelte:head>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js" on:load={getDataGraph}></script>
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
    <div id="container2">
        <p>
            Integración de G25-Desahucios con G26-CulturaBASE
        </p>
    </div>
    <div id="container3">
        <p>
            Relación de la cultura con la cantidad de desahucios en ISLAS CANARIAS 2018
        </p>
    </div>
    <div id="myfirstchart" style="height: 250px;" />
    <div>
        <figure class="highcharts-figure">
            <div id="container" />
            <p class="highcharts-description">
                Relación entre la cultura y los desahucios en las Islas Canarias en el año
                2018. En este gráfico podemos ver la integración de las APIs de la asignatura
                Sistemas Orientados a Servicios (SOS), en el curso 2020-2021: G25-Desahucios y
                G26-CulturaBASE.

                Concretamente, podemos observar por parte de la API G25-Desahucios la cantidad
                de desahucios de viviendas rústicas y de solares que tuvieron lugar en las Islas Canarias
                en 2018, mientras que por parte de la API G26-CulturaBASE podemos ver los espectadores,
                la recaudación y el gasto por espectador (todo por millones) de los espectáculos en las
                Islas Canarias durante el año 2018.
            </p>
        </figure>
    </div>
</main>

<style>
    #myfirstchart{
        margin-top: 30px;
        width: 100%;
    }

    .highcharts-description{
        margin-top: 30px;
        width: 100%;
        text-align: center;
    }

    #container2{
        text-align: center;
        font-size: larger;
    }

    #container3{
        text-align: center;
        font-size: medium;
    }
</style>