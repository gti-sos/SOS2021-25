<script>
import SalesApi from "./SalesAPI.svelte";
import Info from "./Info.svelte";

</script>

<main>
	<h1>SOS2021-25</h1>
	<Info></Info>
	<a href="info.html">View components</a>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>