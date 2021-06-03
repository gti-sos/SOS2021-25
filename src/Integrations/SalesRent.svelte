<script>
    import { onMount } from "svelte";
    import {
        Nav,
        NavItem,
        NavLink,
        Button,
    } from "sveltestrap";

    let sanitytData = [];
    let sanityLocation = []
    let sanityYear = [2007, 2008, 2009, 2010, 2011];
    let sanityTotal2007 = 0;
    let sanityTotal2008 = 0;
    let sanityTotal2009 = 0;
    let sanityTotal2010 = 0;
    let sanityTotal2011 = 0;
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
        const res = await fetch("https://sanity-integration.herokuapp.com/sanity-stats");
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            sanitytData = json;
            sanitytData.sort((a, b) => (a.year > b.year) ? 1 : -1)
            console.log(`We have received ${sanitytData.length} resources.`);
            sanitytData.forEach((data) => {
                if (data.year == 2007){
                    sanityTotal2007=sanityTotal2007+parseInt(data["hospital_bed"]);
                }
                if (data.year == 2008){
                    sanityTotal2008=sanityTotal2008+parseInt(data["hospital_bed"]);
                }
                if (data.year == 2009){
                    sanityTotal2009=sanityTotal2009+parseInt(data["hospital_bed"]);
                }
                if (data.year == 2010){
                    sanityTotal2010=sanityTotal2010+parseInt(data["hospital_bed"]);
                }
                if (data.year == 2011){
                    sanityTotal2011=sanityTotal2011+parseInt(data["hospital_bed"]);
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
        text: 'Integracion venta de viviendas con pacientes en camas de hospital'
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: 'Número total'
        },
        accessibility: {
            description: 'Número total'
        }
    },

    xAxis: {
        title: {
            text: 'Año'
        },
        accessibility: {
            description: 'Desde 2007 a 2019'
        },
        categories: ['2007', '2008', '2009', '2010', '2011', '2015', '2016', '2017', '2018', '2019']
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
            name: 'Venta de viviendas',
            data: ["","","","","",salesTotalData2015, salesTotalData2016,salesTotalData2017, salesTotalData2018, salesTotalData2019],
            color: colors[2],
            accessibility: {
                description: 'Venta totales de vivienda por año'
            }
        }, {
            name: 'Pacientes en cama',
            data: [sanityTotal2007, sanityTotal2008, sanityTotal2009, sanityTotal2010, sanityTotal2011],
            dashStyle: 'ShortDashDot',
            color: colors[0]
        },            
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
                    categories: ['Dec. 2010', 'May 2012', 'Jan. 2014', 'July 2015', 'Oct. 2017', 'Sep. 2019'],
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
            Esta gráfica nos muestra el número de pacientes en cama en comparación con el número de venta de viviendas en diferentes años
        </p>
    </figure>
  
</main>

<style>

</style>
