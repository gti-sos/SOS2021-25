<script>
    import { onMount } from "svelte";
    import {
        Nav,
        NavItem,
        NavLink,
        Button,
    } from "sveltestrap";

    let renttData = [];
    let rentLocation = []
    let rentYear = [2012, 2013, 2014, 2015, 2016];
    let rentTotal2012 = 0;
    let rentTotal2013 = 0;
    let rentTotal2014 = 0;
    let rentTotal2015 = 0;
    let rentTotal2016 = 0;
    let salesData = [];
    let salesLocation = [];
    let salesYear = [2015, 2016, 2017, 2018, 2019];
    let salesTotalData2015 = 0;
    let salesTotalData2016 = 0;
    let salesTotalData2017 = 0;
    let salesTotalData2018 = 0;
    let salesTotalData2019 = 0;
    


    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch("https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/t35/p010/base2010/ch/01001.px?tip=AM");
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            renttData = json;
            renttData.sort((a, b) => (a.year > b.year) ? 1 : -1)
            console.log(`We have received ${renttData.length} resources.`);
            renttData.forEach((data) => {
                if(data.Nombre==["Andalucía, RECURSOS: Excedente de explotación bruto / Renta mixta bruta"]){
                    if (data.Data[4]){
                    rentTotal2012=rentTotal2012+parseFloat(data.Data[4]["Valor"]);
                    }
                    if (data.Data[3]){
                    rentTotal2013=rentTotal2013+parseFloat(data.Data[3]["Valor"]);
                    }
                    if (data.Data[2]){
                    rentTotal2014=rentTotal2014+parseFloat(data.Data[2]["Valor"]);
                    }
                    if (data.Data[1]){
                    rentTotal2015=rentTotal2015+parseFloat(data.Data[1]["Valor"]);

                    }
                    if (data.Data[0]){
                    rentTotal2016=rentTotal2016+parseFloat(data.Data[0]["Valor"]);
                    }
                    
                }
                
            });

            
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
                }
                if (data.year == 2016){
                    salesTotalData2016=salesTotalData2016+parseInt(data["total"]);
                }
                if (data.year == 2017){    
                    salesTotalData2017=salesTotalData2017+parseInt(data["total"]);
                }
                if (data.year == 2018){
                    salesTotalData2018=salesTotalData2018+parseInt(data["total"]);
                }
                if (data.year == 2019){
                    salesTotalData2019=salesTotalData2019+parseInt(data["total"]);
                }

            });

        } else {
            console.log("Error");
        }
        
        var colors = Highcharts.getOptions().colors;

Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },

    legend: {
        symbolWidth: 40
    },

    title: {
        text: 'Venta de pisos y Renta bruta mixta anual'
    },

    subtitle: {
        text: 'Source: WebAIM. Click on points to visit official screen reader website'
    },

    yAxis: [{
        title: {
            text: 'Venta total de pisos'
        },
        accessibility: {
            description: 'Unidades'
        }
    }, {
        title: {
            text: 'Renta bruta mixta'
        },
        opposite: true
       
    }],
    

    xAxis: {
        title: {
            text: 'Time'
        },
        accessibility: {
            description: 'Time from December 2010 to September 2019'
        },
        categories:['2012', '2013', '2014' ,'2015', '2016', '2017', '2018', '2019'],
        
    },

    tooltip: {
        valueSuffix: ''
    },

    plotOptions: {
        series: {
            point: {
                events: {
                    click: function () {
                        window.location.href = this.series.options.website;
                    }
                }
            },
            cursor: 'pointer'
        }
    },

    series: [
        {
            name: 'Venta totales de pisos',
            data: ["", "", "", salesTotalData2015, salesTotalData2016,salesTotalData2017, salesTotalData2018, salesTotalData2019],
            color: colors[2],
            accessibility: {
                description: ''
            }
        }, {
            name: 'Renta bruta mixta anual',
            data: [rentTotal2012, rentTotal2013, rentTotal2014, rentTotal2015, rentTotal2016, "", "", ""],
            dashStyle: 'ShortDash',
            color: colors[3],
            yAxis: 1
        }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 550
            },
            chartOptions: {
                chart: {
                    spacingLeft: 3,
                    spacingRight: 3
                },
                legend: {
                    itemWidth: 150
                },
                xAxis: {
                    categories: ['2012', '2013', '2014' ,'2015', '2016', '2017', '2018', '2019'],
                    title: ''
                },
                yAxis: {
                    visible: false
                }
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
            Esta gráfica nos muestra el número de venta de pisos con la renta anual mixta bruta
        </p>
    </figure>
  
</main>

<style>

</style>
