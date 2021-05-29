<script>
    import { onMount } from "svelte";
    import {
        Nav,
        NavItem,
        NavLink,
        Button,
    } from "sveltestrap";

    let UnemploymentData = [];
    let UnemploymentLocation = []
    let UnemploymentYear = [];
    let unemploymentRate = [];
    let salesData = [];
    let salesLocation = [];
    let salesYear = [];
    let salesTotal = [];


    function distinctRecords(MYJSON, prop) {
    return MYJSON.filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch("https://sos2021-07.herokuapp.com/api/v2/unemployment");
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            UnemploymentData = json;
            UnemploymentData.sort((a, b) => (a.year > b.year) ? 1 : -1)
            UnemploymentData.sort((a, b) => (a.location > b.location) ? 1 : -1)
            console.log(`We have received ${UnemploymentData.length} resources.`);
            UnemploymentData.forEach((data) => {
                UnemploymentYear.push(data.autonomous_community+"-"+data.year);
                unemploymentRate.push(parseFloat(data["unemployment_rate"]));
            });
            console.log("totales: "+UnemploymentData.length);
            console.log("años: "+UnemploymentYear+UnemploymentLocation);
            console.log("Rate: "+unemploymentRate);
        } else {
            console.log("Error");
        }
        const res2 = await fetch("api/v1/sales");
        if (res.ok) {
            console.log("Ok");
            const json2 = await res2.json();
            salesData = json2;
            salesData.sort((a, b) => (a.year > b.year) ? 1 : -1)
            salesData.sort((a, b) => (a.location > b.location) ? 1 : -1)
            console.log(`We have received ${salesData.length} resources.`);
            salesData.forEach((data) => {
                salesYear.push(data.year);
                salesLocation.push(data.location+"-"+data.year);
                salesTotal.push(parseInt(data["total"]));
            });
            console.log("años y localidad: "+salesLocation);
            console.log("total totales: "+salesTotal.length);
        } else {
            console.log("Error");
        }

    Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Desempleo en España'
    },
    subtitle: {
        text: 'Fuente: Instituto Nacional de Estadística'
    },
    xAxis: {
        categories: UnemploymentYear,//['2015', '2016', '2017', '2018', '2019', '2020'],
        title: {
            text: (null)
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Número de Desempleo (x1000)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'millions'
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
        name: 'Desempleo',
        data: unemploymentRate
    }, {
        name: 'Total Ventas',
        data: salesTotal
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
                <a href="/#/Integrations"><Button style="margin: 0 5px 10px 50px;" color="primary">Volver</Button></a>
            </NavItem>
        </Nav>
     </div> 
    <figure class="highcharts-figure">
        <div id="container" />
        <p class="highcharts-description">
            Información acerca de el desempleo en España por Comunidad autónoma.
        </p>
    </figure>
  
</main>

<style>

</style>
