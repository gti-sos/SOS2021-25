<script>
    import { onMount } from "svelte";
    import { Nav, NavItem, NavLink, Button } from "sveltestrap";
    import App from "../App.svelte";

    let pokeData = [];
    let pokeTodo = [];
    let pokeName = [];
    let pokeStats = [];

    let cutsTotal = [];

    async function getDataGraph() {
        console.log("Fetching data...");
        for (let i = 0; i < 10; i++) {
            let id = Math.round(Math.random() * 150);
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
            if (res.ok) {
                console.log("Ok");
                const json = await res.json();
                pokeData = json;
                console.log(pokeData);
                pokeTodo.push([
                    pokeData.name,
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                        id +
                        ".png",
                    pokeData.stats[0].base_stat,
                    pokeData.stats[1].base_stat,
                    pokeData.stats[2].base_stat,
                    pokeData.stats[3].base_stat,
                    pokeData.stats[4].base_stat,
                    pokeData.stats[4].base_stat,
                ]);
            } else {
                console.log("Error");
            }
        }

        console.log(pokeTodo);

        for (let i = 0; i < pokeTodo.length; i++) {
            pokeName.push(pokeTodo[i][0]);
            for (let e = 0; e < 5; e++) {
                    pokeStats.push([i,e,pokeTodo[i][e+2]]);
                    
                }
        }
        console.log(pokeStats);

        function getPointCategoryName(point, dimension) {
            var series = point.series,
                isY = dimension === "y",
                axis = series[isY ? "yAxis" : "xAxis"];
            return axis.categories[point[isY ? "y" : "x"]];
        }

        Highcharts.chart("container", {
            chart: {
                type: "heatmap",
                marginTop: 30,
                marginBottom: 120,
                plotBorderWidth: 1,
            },

            title: {
                text: "Datos de 10 Pokemons",
            },

            xAxis: {
                categories: pokeName,
                labels:{
                    useHTML: true,
                    formatter: function(){
                        let image = pokeTodo[this.pos][1];
                        return '<img width="80px" src="'+image+'"></img><br><span style"text-align: center;">'+this.value+'</span>';
                    }
                }
            },

            yAxis: {
                categories: [
                    "Hp",
                    "Ataque",
                    "Defensa",
                    "Ataque Especial",
                    "Defensa Especial",
                ],
                title: null,
                reversed: true,
            },
            colorAxis: {
                minColor: "#FFFFFF",
                maxColor: Highcharts.getOptions().colors[4],
            },

            legend: {
                align: "right",
                layout: "vertical",
                margin: 0,
                verticalAlign: "top",
                y: 25,
                symbolHeight: 280,
            },

            tooltip: {
                formatter: function () {
                    return (
                        "<b>" +
                        getPointCategoryName(this.point, "x") +
                        "</b> tiene <b>" +
                        this.point.value +
                        "</b> de <b>" +
                        getPointCategoryName(this.point, "y") +
                        "</b>"
                    );
                },
            },

            series: [
                {
                    borderWidth: 1,
                    data: pokeStats,
                    dataLabels: {
                        enabled: true,
                        color: "#000000",
                    },
                },
            ],

            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500,
                        },
                        chartOptions: {
                            yAxis: {
                                labels: {
                                    formatter: function () {
                                        return this.value.charAt(0);
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        });
    }
</script>

<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/heatmap.js"></script>
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
                <a href="/#/Integrations"
                    ><Button style="margin: 0 5px 10px 50px;" color="primary"
                        >Volver</Button
                    ></a
                >
            </NavItem>
        </Nav>
    </div>
    <figure class="highcharts-figure">
        <div id="container" />
        <p class="highcharts-description">
            La gráfica muestra datos de 10 pokemons, con su imagen, el nivel de vida, ataque, defensa, y ataque y defensa especiales.
            Cada vez que la pagina es recargada se muestran 10 pokemons nuevos aleatorios.
        </p>
    </figure>
</main>

<style>
</style>
