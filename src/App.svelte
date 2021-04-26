<script>
	import Router from 'svelte-spa-router';

	import SalesApi from "./SalesAPI.svelte";
	import RentalsApi from "./RentalsAPI.svelte";
	import EvictionsApi from "./EvictionsAPI.svelte";


	import Info from "./Info.svelte";

	const routes = {
		"/": Info,
		"/sales": SalesApi,
		"/rentals": RentalsApi,
		"/evictions": EvictionsApi
	};

</script>

<main>
	<Router {routes}> </Router>
</main>

<style>
</style>