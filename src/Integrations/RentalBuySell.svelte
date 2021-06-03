<script>
    import bb from "billboard.js/dist/billboard.pkgd";
    import { onMount } from "svelte";
    import { Nav, NavItem, NavLink, Button } from "sveltestrap";
    import App from "../App.svelte";

    let year = [];
    let salesTotalData2015 = 0;
    let salesTotalData2016 = 0;
    let salesTotalData2017 = 0;
    let salesTotalData2018 = 0;
    let salesTotalData2019 = 0;

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch(
            "https://sos2021-07.herokuapp.com/api/v2/buy_sell"
        );
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            UnemploymentData = json;
            UnemploymentData.sort((a, b) => (a.year > b.year ? 1 : -1));
            UnemploymentData.sort((a, b) => (a.location > b.location ? 1 : -1));
            console.log(
                `We have received ${UnemploymentData.length} resources.`
            );
            UnemploymentData.forEach((data) => {
                if (data.year == 2020) {
                    unemploymentTotal =
                        unemploymentTotal +
                        parseFloat(data["unemployment_rate"]);
                }
            });
            console.log("Rate: " + unemploymentTotal);
        } else {
            console.log("Error");
        }
        const res2 = await fetch("api/v1/rentals");
        if (res.ok) {
            console.log("Ok");
            const json2 = await res2.json();
            salesData = json2;
            salesData.sort((a, b) => (a.year > b.year ? 1 : -1));
            salesData.sort((a, b) => (a.location > b.location ? 1 : -1));
            console.log(`We have received ${salesData.length} resources.`);

            salesData.forEach((data) => {
                if (data.year == 2015) {
                    salesTotalData2015 =
                        salesTotalData2015 + parseInt(data["total"]);
                }
                if (data.year == 2016) {
                    salesTotalData2016 =
                        salesTotalData2016 + parseInt(data["total"]);
                }
                if (data.year == 2017) {
                    salesTotalData2017 =
                        salesTotalData2017 + parseInt(data["total"]);
                }
                if (data.year == 2018) {
                    salesTotalData2018 =
                        salesTotalData2018 + parseInt(data["total"]);
                }
                if (data.year == 2019) {
                    salesTotalData2019 =
                        salesTotalData2019 + parseInt(data["total"]);
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

        var chart = bb.generate({
            data: {
                columns: [
                    ["data1", 30, 200, 100, 400, 150, 250],
                    ["data2", 130, 100, 140, 200, 150, 50],
                ],
                type: "bar", // for ESM specify as: bar()
            },
            bar: {
                width: {
                    ratio: 0.5,
                },
            },
            bindto: "#barChart",
        });
    }
</script>

<svelte:head>
    <!-- Step 1) Load D3.js -->
    <script src="https://d3js.org/d3.v6.min.js" on:load={getDataGraph}></script>
    <link
        rel="stylesheet"
        href="https://naver.github.io/billboard.js/release/latest/dist/theme/insight.min.css"
    />
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
    <div id="chart" />
</main>

<style>
</style>
