<script>
    import { onMount } from "svelte";
    import {
        Nav,
        NavItem,
        NavLink,
        Button,
    } from "sveltestrap";

    let expensetData = [];
    let expenseYear = [2015, 2016, 2017, 2018, 2019];
    let expenseTotal2015 = 0;
    let expenseTotal2016 = 0;
    let expenseTotal2017 = 0;
    let expenseTotal2018 = 0;
    let expenseTotal2019 = 0;
    let salesData = [];
    let salesLocation = [];
    let salesYear = [2015, 2016, 2017, 2018, 2019];
    let salesTotalData2015 = 0;
    let salesTotalData2016 = 0;
    let salesTotalData2017 = 0;
    let salesTotalData2018 = 0;
    let salesTotalData2019 = 0;
    let salesSecondHandData2015 = 0;
    let salesSecondHandData2016 = 0;
    let salesSecondHandData2017 = 0;
    let salesSecondHandData2018 = 0;
    let salesSecondHandData2019 = 0;
    


    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch("https://servicios.ine.es/wstempus/js/ES/DATOS_SERIE/EPF425721?nult=5");
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            expensetData = json;
            //expensetData.sort((a, b) => (a.Anyo > b.Anyo) ? 1 : -1)
            console.log(`We have received ${expensetData.length} resources.`);
            expensetData.Data.forEach((data) => {
                console.log (data);
                if (data.Anyo == 2015){
                    expenseTotal2015=expenseTotal2015+parseInt(data["Valor"]);
                }
                if (data.Anyo == 2016){
                    expenseTotal2016=expenseTotal2016+parseInt(data["Valor"]);
                }
                if (data.Anyo == 2017 ){
                    expenseTotal2017=expenseTotal2017+parseInt(data["Valor"]);
                }
                if (data.Anyo == 2018 ){
                    expenseTotal2018=expenseTotal2018+parseInt(data["Valor"]);
                }
                if (data.Anyo == 2019){
                    expenseTotal2019=expenseTotal2019+parseFloat(data["Valor"]);
                }                
            }
            
            );

        } else {
            console.log("Error");
        }
        const res2 = await fetch("api/v1/sales");
        if (res.ok) {
            console.log("Ok");
            const json2 = await res2.json();
            salesData = json2;
            salesData.sort((a, b) => (a.year > b.year) ? 1 : -1)
            console.log(`We have received ${salesData.length} resources.`);
            
            salesData.forEach((data) => {
                
                if (data.year == 2015){
                    salesTotalData2015=salesTotalData2015+parseInt(data["total"]);
                    salesSecondHandData2015=salesSecondHandData2015+parseInt(data["secondhand"]);
                }
                if (data.year == 2016){
                    salesTotalData2016=salesTotalData2016+parseInt(data["total"]);
                    salesSecondHandData2016=salesSecondHandData2016+parseInt(data["secondhand"]);
                }
                if (data.year == 2017){    
                    salesTotalData2017=salesTotalData2017+parseInt(data["total"]);
                    salesSecondHandData2017=salesSecondHandData2017+parseInt(data["secondhand"]);
                }
                if (data.year == 2018){
                    salesTotalData2018=salesTotalData2018+parseInt(data["total"]);
                    salesSecondHandData2018=salesSecondHandData2018+parseInt(data["secondhand"]);
                }
                if (data.year == 2019){
                    salesTotalData2019=salesTotalData2019+parseInt(data["total"]);
                    salesSecondHandData2019=salesSecondHandData2019+parseInt(data["secondhand"]);
                }

            });

        } else {
            console.log("Error");
        }
        
        var colors = Highcharts.getOptions().colors;

Highcharts.chart('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Gasto medio en españa con el Total de pisos vendidos y la venta de pisos de segunda mano',
        align: 'left'
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        align: 'left'
    },
    xAxis: [{
        categories: ['2015', '2016', '2017', '2018', '2019'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} €',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        title: {
            text: 'Gasto medio',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        opposite: true

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Total de ventas',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} unidades',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }

    }, { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Ventas de segunda mano',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value} unidades',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 55,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Gasto medio',
        type: 'column',
        yAxis: 1,
        data: [expenseTotal2015, expenseTotal2016, expenseTotal2017, expenseTotal2018, expenseTotal2019],
        tooltip: {
            valueSuffix: ' €'
        }

    }, {
        name: 'Venta total de pisos',
        type: 'spline',
        yAxis: 2,
        data: [salesTotalData2015, salesTotalData2016, salesTotalData2017, salesTotalData2018, salesTotalData2019],
        marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
            valueSuffix: ' unidades'
        }

    }, {
        name: 'Ventas de segunda mano',
        type: 'spline',
        data: [salesSecondHandData2015, salesSecondHandData2016, salesSecondHandData2017, salesSecondHandData2018, salesSecondHandData2019],
        tooltip: {
            valueSuffix: ' unidades'
        }
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    floating: false,
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    x: 0,
                    y: 0
                },
                yAxis: [{
                    labels: {
                        align: 'right',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    visible: false
                }]
            }
        }]
    }
});

    }
</script>

<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/themes/high-contrast-light.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"
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
        <div id="container"></div>
        <p class="highcharts-description">
            Esta gráfica nos muestra la diferencia entre el gasto media por año con el nuevo de pisos vendidos totales y el número de pisos vendidos de segunda mano
        </p>
    </figure>
  
</main>

<style>

</style>
