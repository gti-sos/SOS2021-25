<script>

    import { onMount } from "svelte";
    import {
        Nav,
        NavItem,
        Button,
    } from "sveltestrap";

    let evictionsData = [];
    let evictionsKey = [];
    let evictionsTotal = [];
    let evictionsRustic = [];
    let evictionsHousehold = [];
    let evictionsBuildinglot = [];
    let evictionsOther = [];
    let rentalsKey = [];
    let rentalsData = [];
    let rentalsRent = [];

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch("https://sos2021-07.herokuapp.com/api/v1/rentals");
        if (res.ok) {
            console.log("Ok");
            rentalsData = await res.json();
            console.log(`We have received ${rentalsData.length} resources.`);
            rentalsData.forEach((data) => {
                let comunidad = "";
                if(data.year!=2020){
                    if(data.autonomous_community=="comunidad de madrid"){
                        comunidad = "community of madrid";
                    }else if(data.autonomous_community=="castilla y león"){
                        comunidad = "castile and leon";
                    }else if(data.autonomous_community=="cataluña"){
                        comunidad = "catalonia";
                    }else if(data.autonomous_community=="andalucía"){
                        comunidad = "andalusia";
                    }
                    rentalsKey.push(comunidad+"-"+data.year);
                    console.log(comunidad+"-"+data.year);
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
                let indice = rentalsKey.indexOf(data.location + "-" + data.year);
                evictionsAux[indice] = (parseInt(data["total"], 10));
            });
            evictionsTotal = evictionsAux;
            //console.log("totales: " + evictionsTotal);
            //console.log("total totales: " + evictionsTotal.length);
        }


        new Morris.Bar({
            // ID of the element in which to draw the chart.
            element: "myfirstchart",
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [
                {
                    com: rentalsKey[0],
                    a: evictionsTotal[0],
                    b: rentalsRent[0]
                },
                {
                    com: rentalsKey[1],
                    a: evictionsTotal[1],
                    b: rentalsRent[1]
                },
                {
                    com: rentalsKey[2],
                    a: evictionsTotal[2],
                    b: rentalsRent[2]
                }
            ],
            // The name of the data record attribute that contains x-values.
            xkey: "com",
            // A list of names of data record attributes that contain y-values.
            ykeys: ["a", "b"],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ["Total Desahucios", "Renta media"],
            stacked: false,
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
                <a href="/#/info">
                    <Button style="margin: 0 5px 10px 50px;" color="primary">Volver</Button></a>
                <a href="/#/evictions">
                    <Button style="margin: 0 5px 10px 50px;" color="dark">Ver datos</Button></a>
            </NavItem>
        </Nav>
    </div>
    <div>
        <figure class="highcharts-figure">
            <div id="container" />
            <p class="highcharts-description">
                Información acerca de la cantidad de desahucios que tienen lugar
                a lo largo del año en cada comunidad autónoma, separándolos por
                tipo.
            </p>
        </figure>
    </div>
    <div id="myfirstchart" style="height: 250px;" />

</main>