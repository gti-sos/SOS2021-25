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
    let unemploymentTotal = 0;
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
        const res = await fetch("https://sos2021-07.herokuapp.com/api/integration/unemployment");
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            UnemploymentData = json;
            UnemploymentData.sort((a, b) => (a.year > b.year) ? 1 : -1)
            UnemploymentData.sort((a, b) => (a.location > b.location) ? 1 : -1)
            console.log(`We have received ${UnemploymentData.length} resources.`);
            UnemploymentData.forEach((data) => {
                if (data.year == 2020){
                    unemploymentTotal=unemploymentTotal+parseFloat(data["unemployment_rate"]);
                }
            });
            console.log("Rate: "+unemploymentTotal);

            
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

                //salesYear.push(data.year);
                //salesLocation.push(data.location+"-"+data.year);
                //salesTotal.push(parseInt(data["total"]));
            });
            //console.log("años y localidad: "+salesLocation);
            //console.log("total totales: "+salesTotal.length);
            // console.log("total totales: "+salesTotalData);
        } else {
            console.log("Error");
        }

var chart = c3.generate({
    bindto: '#chart',
    data: {
        x : 'x',
      columns: [
        ['x', 2015, 2016, 2017, 2018, 2019, 2020],
        ['Ventas totales',salesTotalData2015,salesTotalData2016,salesTotalData2017,salesTotalData2018,salesTotalData2019 ],
        ['Desempleo', 0,0,0,0,0,unemploymentTotal],
      ],
      axes: {
        Desempleo: 'y2'
      },
      types: {
        Desempleo: 'bar'
      }
    },
    axis: {
      y: {
        label: {
          text: 'Total ventas',
          position: 'outer-middle'
        },
      },
      y2: {
        show: true,
        label: {
          text: 'Total desempleo',
          position: 'outer-middle'
        }
      }
    }
});

    }
</script>

<svelte:head>

    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/d3/3.4.11/d3.js" on:load={getDataGraph}></script>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.js" on:load={getDataGraph}></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.css" rel="stylesheet" type="text/css">
</svelte:head>

<main>
    <div class="container">
        <Nav>
            <NavItem>
                <a href="/#/Integrations"><Button style="margin: 0 5px 10px 50px;" color="primary">Volver</Button></a>
            </NavItem>
        </Nav>
     </div> 
     <div id="chart"></div>
  
</main>

<style>

</style>
