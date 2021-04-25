<script>
	import Router from 'svelte-spa-router';
	import SalesApi from "./SalesAPI.svelte";
	import Info from "./Info.svelte";

	const routes = {
		"/": Info,
		"/sales": SalesApi
	};

</script>

<main>
	<Router {routes}> </Router>
</main>

<style>
</style>