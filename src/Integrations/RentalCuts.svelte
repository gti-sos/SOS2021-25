<script>
    import bb from "billboard.js/dist/billboard.pkgd";
    import { onMount } from "svelte";
    import { Nav, NavItem, NavLink, Button } from "sveltestrap";
    import App from "../App.svelte";

    let year = [];
    let buysellData = [];
    let rentalsData = [];

    let buysellYear = new Map();
    let rentalsYear = new Map();

    let rentalsSort = [];
    let buysellSort = [];

    async function getDataGraph() {
        console.log("Fetching data...");
        const res = await fetch(
            "https://sos2021-07.herokuapp.com/api/v2/buy_sell"
        );
        if (res.ok) {
            console.log("Ok");
            const json = await res.json();
            buysellData = json;
            buysellData.sort((a, b) => (a.year > b.year ? 1 : -1));
            buysellData.sort((a, b) => (a.location > b.location ? 1 : -1));
            console.log(`We have received ${buysellData.length} resources.`);
            buysellData.forEach((data) => {
                if (buysellYear.get(data.year) == undefined) {
                    buysellYear.set(data.year, parseInt(data.surface));
                } else {
                    let almacen = buysellYear.get(data.year);
                    buysellYear.set(
                        data.year,
                        almacen + parseInt(data.surface)
                    );
                }
            });
            console.log(buysellYear);
        } else {
            console.log("Error");
        }
        const res2 = await fetch("api/v1/rentals");
        if (res.ok) {
            console.log("Ok");
            const json2 = await res2.json();
            rentalsData = json2;
            rentalsData.sort((a, b) => (a.year > b.year ? 1 : -1));
            rentalsData.sort((a, b) => (a.location > b.location ? 1 : -1));
            console.log(`We have received ${rentalsData.length} resources.`);

            rentalsData.forEach((data) => {
                if (rentalsYear.get(data.year) == undefined) {
                    rentalsYear.set(
                        parseInt(data.year),
                        parseInt(data.pricesquaremeter)
                    );
                } else {
                    let almacen = rentalsYear.get(data.year);
                    rentalsYear.set(
                        parseInt(data.year),
                        almacen + parseInt(data.pricesquaremeter)
                    );
                }
            });

            console.log(rentalsYear);
        } else {
            console.log("Error");
        }

        for (var agno of rentalsYear.keys()) {
            if (buysellYear.get(agno) == undefined) {
                console.log("mostrando el año " + rentalsYear);
                buysellYear.set(parseInt(agno), 0);
            }
        }
        for (var agno of buysellYear.keys()) {
            if (rentalsYear.get(agno) == undefined) {
                console.log("mostrando el año " + buysellYear);
                rentalsYear.set(parseInt(agno), 0);
            }
        }

        for (var agno of rentalsYear.keys()) {
            year.push(agno);
        }
        year.sort();

        rentalsSort.push("Precio €/m2");
        buysellSort.push("Superficie m2");
        for (let i = 0; i < year.length; i++) {
            rentalsSort.push(rentalsYear.get(year[i]));
            buysellSort.push(buysellYear.get(year[i]));
        }
        year.unshift("x");

        console.log(buysellYear);
        console.log(buysellSort);

        var chart = bb.generate({
            data: {
                x: "x",
                columns: [year, rentalsSort, buysellSort],
                type: "bar", // for ESM specify as: bar()
                axes: {
                    "Precio €/m2": "y",
                    "Superficie m2": "y2",
                },
            },
            axis: {
                y2: {
                    show: true,
                },
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
