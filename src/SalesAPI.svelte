<script>
    import {
        onMount
    } from "svelte";

    import Table from "sveltestrap/src/Table.svelte"

    let getData = [];

    async function loadData(){
        console.log("Fetching data...");
        const res = await fetch("/api/v1/sales/loadInitialData");

        if (res.ok){
            console.log("Ok");
            const json = await res.json();
            getData = json;
            console.log(`We have received ${getData.length} resources`);
        }else{
            console.log("Error");
        }
    }

    onMount(loadData);

    console.log("Before loadData");
    loadData();
    console.log("After loadData");



</script>

<main>
    <Table bordered>
        <thead>
            <tr>
                <td>Localizacion</td>
                <td>Año</td>
                <td>Total</td>
                <td>Viviendas protegidas</td>
                <td>Nuevas</td>
                <td>Segunda mano</td>
            </tr>
        </thead>
        <tbody>
            {#each getData as data}
                <tr>
                    <td>data.location</td>
                    <td>data.year</td>
                    <td>data.total</td>
                    <td>data.protectedHousing</td>
                    <td>data.secondHand</td>
                </tr>
            {/each}
        </tbody>
    </Table>
</main>