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
    let salesLocation = [];
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
            salesData.sort((a, b) => (a.year > b.year) ? 1 : -1)
            salesData.sort((a, b) => (a.location > b.location) ? 1 : -1)
            console.log(`We have received ${salesData.length} resources.`);
            salesData.forEach((data) => {
                salesYear.push(data.location + "-" + data.year);
                salesLocation.push(data.location);
                salesTotal.push(parseInt(data["total"],10));
                salesProtectedhousing.push(parseInt(data["protectedhousing"],10));
                salesNew.push(parseInt(data["new"],10));
                salesSecondhand.push(parseInt(data["secondhand"],10));
                salesOther.push(parseInt(data["other]"],10));
            });
            console.log("años: "+salesYear);
            console.log("totales: "+salesTotal);
            console.log("total totales: "+salesTotal.length);
        } else {
            console.log("Error");
        }

    Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Venta de viviendas en España'
    },
    subtitle: {
        text: 'Fuente: Instituto Nacional de Estadística'
    },
    xAxis: {
        categories: salesYear,
        title: {
            text: "localizacion y año"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Número de ventas',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Total',
        data: salesTotal
    }, {
        name: 'Proteccion Oficial',
        data: salesProtectedhousing
    }, {
        name: 'Nuevas',
        data: salesNew
    }, {
        name: 'Segunda mano',
        data: salesSecondhand
    }, {
        name: 'Otros',
        data: salesOther
    }]
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
            Información acerca de la cantidad de Ventas que tienen lugar a lo largo del año en cada comunidad autónoma, separándolos por tipo.
        </p>
    </figure>
  
</main>

<style>

</style>
