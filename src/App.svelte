<script>
	import Router from "svelte-spa-router";

	import SalesApi from "./SalesAPI.svelte";
	import RentalsApi from "./RentalsAPI.svelte";
	import EvictionsApi from "./EvictionsAPI.svelte";

	import Info from "./Info.svelte";
	import SalesApiEdit from "./SalesAPIEdit.svelte";
	import EvictionsApiEdit from "./EvictionsAPIEdit.svelte";
	import RentalsApiEdit from "./RentalsAPIEdit.svelte";

	import EvictionsApiGraph from "./EvictionsAPIGraph.svelte";
	import SalesApiGraph from "./SalesAPIGraph.svelte";
	import RentalsApiGraph from "./RentalsAPIGraph.svelte";
	import CommonGraph from "./CommonGraph.svelte";


	import SalesUnemployement from "./Integrations/SalesUnemployement.svelte";
	import Integrations from "./Integrations/Integrations.svelte";
	import SalesSanity from "./Integrations/SalesSanity.svelte";
	import RentalBuySell from "./Integrations/RentalBuySell.svelte";

	import EvictionsRentals from "./Integrations/EvictionsRentals.svelte";
	import EvictionsCulturaBase from "./Integrations/EvictionsCulturaBASE.svelte";


	const routes = {
		"/": Info,
		"/info": Info,
		"/sales": SalesApi,
		"/rentals": RentalsApi,
		"/evictions": EvictionsApi,
		"/sales/:location/:year": SalesApiEdit,
		"/evictions/:location/:year": EvictionsApiEdit,
		"/rentals/:location/:year": RentalsApiEdit,
		"/analytics": CommonGraph,
		"/evictions/evictionsGraph": EvictionsApiGraph,
		"/sales/salesGraph": SalesApiGraph,
		"/rentals/rentalsGraph": RentalsApiGraph,
		"/Integrations": Integrations,
		"/Integrations/unenployementIntegrationGraph": SalesUnemployement,
		"/Integrations/sanityIntegrationGraph": SalesSanity,
		"/Integrations/buySellIntegrationGraph": RentalBuySell,
		"/Integrations/rentalsIntegrationGraph": EvictionsRentals,
		"/Integrations/culturaBASEIntegrationGraph": EvictionsCulturaBase,
	};
</script>

<Router {routes} />

<style>
</style>
