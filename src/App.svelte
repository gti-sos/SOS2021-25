<script>
	import Router from 'svelte-spa-router';

	import SalesApi from "./SalesAPI.svelte";
	import RentalsApi from "./RentalsAPI.svelte";
	import EvictionsApi from "./EvictionsAPI.svelte";


	import Info from "./Info.svelte";
import SalesApiEdit from './SalesAPIEdit.svelte';

	const routes = {
		"/": Info,
		"/info": Info,
		"/sales": SalesApi,
		"/rentals": RentalsApi,
		"/evictions": EvictionsApi,
		"/sales/:location/:year":SalesApiEdit
	};

</script>

<main>
	<Router {routes}> </Router>
</main>

<style>
</style>