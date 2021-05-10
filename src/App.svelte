<script>
	import Router from 'svelte-spa-router';

	import SalesApi from "./SalesAPI.svelte";
	import RentalsApi from "./RentalsAPI.svelte";
	import EvictionsApi from "./EvictionsAPI.svelte";


	import Info from "./Info.svelte";
import SalesApiEdit from './SalesAPIEdit.svelte';
import EvictionsApiEdit from './EvictionsAPIEdit.svelte';
import RentalsApiEdit from './RentalsAPIEdit.svelte';

	const routes = {
		"/": Info,
		"/info": Info,
		"/sales": SalesApi,
		"/rentals": RentalsApi,
		"/evictions": EvictionsApi,
		"/sales/:location/:year":SalesApiEdit,
		"/evictions/:location/:year": EvictionsApiEdit,
		"/rentals/:location/:year": RentalsApiEdit
	};

</script>


	<Router {routes}> </Router>

<style>
</style>