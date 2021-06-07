<script>
    import { onMount } from "svelte";
    import { Nav, NavItem, Button } from "sveltestrap";

    let evictionsKey = [];
    let fotosData = [];
    let evictionsData = [];
    let suicidiosAndalusia = [];
    let nombreDato = [];
    let categorias = [];

    let evictionsHousehold = [];

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch(
            "https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/t15/p417/a2018/06004.px?tip=AM"
        );
        if (res.ok) {
            console.log("Ok");
            fotosData = await res.json();
            console.log(`We have received ${fotosData.length} resources.`);
            fotosData.forEach((data) => {
                let aux = data["Nombre"];
                if (aux == "Andalucía, Ambos sexos, Todas las edades") {
                    suicidiosAndalusia.unshift(
                        parseInt(data["Data"]["0"]["Valor"])
                    );
                    nombreDato.unshift(aux);
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
                evictionsKey.unshift(data.location + "-" + data.year);
                evictionsHousehold.unshift(parseInt(data.household));
                if (data.location == "andalusia" && data.year == "2018") {
                    categorias.unshift(data.year);
                    categorias.push("2019");
                    categorias.unshift("2017");
                }
            });
            //console.log("totales: " + evictionsTotal);
            //console.log("total totales: " + evictionsTotal.length);
        }

        

        Morris.Area({
            element: "area",
            data: [
                {
                    y: categorias[0],
                    b: evictionsHousehold[92],
                },
                {
                    y: categorias[1],
                    a: suicidiosAndalusia[0],
                    b: evictionsHousehold[93],
                },
                {
                    y: categorias[2],
                    b: evictionsHousehold[94],
                },
            ],
            xkey: "y",
            ykeys: ["a", "b"],
            labels: ["Suicidios", "Desahucios de viviendas"],
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
            Integración de G25-Desahucios con API Externa: Suicidios en España
        </p>
    </div>
    <div id="container3">
        <p>
            Relación de los desahucios ocurridos en Andalucía entre 2017 y 2019 con los suicidios en Andalucía en 2018
        </p>
    </div>

    <div id="area" style="height: 250px;" />

    <figure class="highcharts-figure">
        <div id="container" />
        <p class="highcharts-description">
            En esta gráfica se observa la relación entre la cantidad de suicidios totales en Andalucía durante el año 2018, a los que hemos accedido mediante una API
            Externa del Gobierno de España <a href="https://datos.gob.es/">(datos.gob.es)</a>, con la cantidad de desahucios totales que han tenido lugar en Andalucía entre los años 2017 y 2019, cuyos
            datos pertenecen a nuestra API propia de la asignatura Sistemas Orientados a Servicios (SOS), curso 2020-2021: G25-Desahucios.
        </p>
    </figure>
</main>

<style>
    #area{
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
