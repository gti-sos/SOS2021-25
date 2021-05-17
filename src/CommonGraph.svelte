<script>

    const BASE_CONTACT_API_PATH = "/api/v1";

    let rentalsData = [];
    let rentalsGraphData = [];
    let evictionsData = [];
    let evictionsGraphData = [];
    let salesData = [];
    let salesGraphData = [];

    var dates = [];

    async function loadGraph(){
        console.log("Fetching data...");

        const res = await fetch(BASE_CONTACT_API_PATH + "/rentals");
        const res1 = await fetch(BASE_CONTACT_API_PATH + "/evictions");
        const res2 = await fetch(BASE_CONTACT_API_PATH + "/sales");

        if (res.ok || res1.ok || res2.ok){
            if(res.ok){
                rentalsData = await res.json();
            }
            // ESTA EN PROCESO AUN 
        }
    }


</script>

<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script
        src="https://code.highcharts.com/modules/accessibility.js"
        on:load={loadGraph}></script>
</svelte:head>

<main>
    <figure class="highcharts-figure">
        <div id="container" />
        <p class="highcharts-description">
            Basic line chart showing trends in a dataset. This chart includes
            the
            <code>series-label</code> module, which adds a label to each line for
            enhanced readability.
        </p>
    </figure>
</main>

<style>
</style>
